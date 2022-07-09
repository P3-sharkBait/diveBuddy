const { AuthenticationError } = require("apollo-server-express");
const { User, Log, Product, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      //remember to add context back
      // if (context.user) {
      return User.find().populate("logs");
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    userFriend: async (parent, { username }, context) => {
      if (context.user) {
        return User.find({ username: [username] }).populate("logs");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    user: async (parent, { username }, context) => {
      if (context.user) {
        return User.findOne({ username }).populate("logs");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // stripe
    products: async (parent, { name }) => {
      const params = {};

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params);
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    userOrder: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
    // end stripe
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // stripe
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    // end stripe
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addLog: async (
      parent,
      {
        username,
        diveNumber,
        location,
        dateTime,
        breathingMixture,
        tankType,
        tankCapacity,
        startPressure,
        endPressure,
        ballast,
        extraEquipment,
        suit,
        weatherCond,
        airTemp,
        waterType,
        underwaterVisibility,
        waterTemp,
        waterCond,
        surfaceInt,
        nextSurfaceInt,
        previousEndLetter,
        maxDepth,
        nextDepth,
        residualNitrogenTime,
        actualDiveTime,
      },
      context
    ) => {
      const logInput = {
        diveNumber: diveNumber,
        location: location,
        dateTime: dateTime,
        breathingMixture: breathingMixture,
        tankType: tankType,
        tankCapacity: tankCapacity,
        startPressure: startPressure,
        endPressure: endPressure,
        ballast: ballast,
        extraEquipment: extraEquipment,
        suit: suit,
        weatherCond: weatherCond,
        airTemp: airTemp,
        waterType: waterType,
        underwaterVisibility: underwaterVisibility,
        waterTemp: waterTemp,
        waterCond: waterCond,
        surfaceInt: surfaceInt,
        nextSurfaceInt: nextSurfaceInt,
        previousEndLetter: previousEndLetter,
        maxDepth: maxDepth,
        nextDepth: nextDepth,
        residualNitrogenTime: residualNitrogenTime,
        actualDiveTime: actualDiveTime,
      };
      if (context.user) {
        return await User.findOneAndUpdate(
          { username: username },
          { $addToSet: { logs: logInput } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeUser: async (parent, { email, password }, context) => {
      if (context.user) {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        return await User.findOneAndDelete({ email: email });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeLog: async (parent, { email, password, diveNumber }, context) => {
      if (context.user) {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        return User.findOneAndUpdate(
          { email: email },
          {
            $pull: {
              logs: {
                diveNumber: diveNumber,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  //resolver for adding to friends list
  // addFriend: async (parent, {username, id}, context) => {
  //   return await User.findOneAndUpdate(
  //     { username: username },
  //     { $addToSet: { friends: id } },
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   )
  // }
};

module.exports = resolvers;
