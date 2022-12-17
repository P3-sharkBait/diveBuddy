const { AuthenticationError } = require("apollo-server-express");
const { User, Log, Product, Order } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  // serialize(value) {
  //   return value.getTime(); // Convert outgoing Date to integer for JSON
  // },
  serialize(value) {
    return "2011-10-05T14:48:00.000Z"; // value sent to the client
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const resolvers = {
  Date: dateScalar,

  Query: {
    users: async (parent, args, context) => {
      //remember to add context back
      // if (context.user) {
      return User.find().populate('logs').populate('friends');
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    user: async (parent, { username }, context) => {
      // if (context.user) {
      return User.findOne({ username }).populate('logs').populate('friends');
      // }
      // throw new AuthenticationError('You need to be logged in!');

    },


    // // stripe
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
    // // end stripe

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // // stripe
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { orders: order },
    //     });

    //     return order;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, {
    //       new: true,
    //     });
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    // // end stripe
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
        actualDiveTime: actualDiveTime
      }
      // if (context.user) {
      return await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { logs: logInput } },
        {
          new: true,
          runValidators: true,
        }
      )
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    removeUser: async (parent, { email, password }, context) => {
      // if (context.user) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      return await User.findOneAndDelete(
        { email: email },
      );

      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    removeLog: async (parent, { _id }, context) => {
      // if (context.user) {

      return User.findOneAndUpdate(
        { email: context.user.email },
        {
          $pull: {
            logs: {
              _id: _id,
            },
          },
        },
        { new: true }
      );
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    //resolver for adding to friends list
    addFriend: async (parent, { _id, username }, context) => {
      return await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { friends: _id } },
        {
          new: true,
          runValidators: true,
        }
      )
    }
  },

};

module.exports = resolvers;
