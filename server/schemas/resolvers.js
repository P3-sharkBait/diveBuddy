const { AuthenticationError } = require('apollo-server-express');
const { User, Log } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        return User.find().populate('logs');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    userFriend: async (parent, { username }, context) => {
      if (context.user) {
        return User.find({ username: [username] }).populate('logs');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    user: async (parent, { username }, context) => {
      if (context.user) {
        return User.findOne({ username }).populate('logs');
      }
      throw new AuthenticationError('You need to be logged in!');
    },


  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addLog: async (parent, { username, diveNumber, location, dateTime, breathingMixture, tankType, tankCapacity, startPressure, endPressure, ballast, extraEquipment, suit, weatherCond, airTemp, waterType, underwaterVisibility, waterTemp, waterCond, surfaceInt, nextSurfaceInt, previousEndLetter, maxDepth, nextDepth, residualNitrogenTime, actualDiveTime }, context) => {
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
      if (context.user) {
        return await User.findOneAndUpdate(
          { username: username },
          { $addToSet: { logs: logInput } },
          {
            new: true,
            runValidators: true,
          }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeUser: async (parent, { email, password }, context) => {
      if (context.user) {
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
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeLog: async (parent, { email, password, diveNumber }, context) => {
      if (context.user) {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
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
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  //resolver for adding to friends list
};

module.exports = resolvers;
