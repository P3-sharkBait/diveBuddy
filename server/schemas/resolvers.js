const { AuthenticationError } = require('apollo-server-express');
const { User, Log } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('logs');
    },
    userFriend: async (parent, { username }) => {
      return User.find({ username: [username] }).populate('logs');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('logs');
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
    addLog: async (parent, { username, diveNumber, location, dateTime, breathingMixture, tankType, tankCapacity, startPressure, endPressure, ballast, extraEquipment, suit, weatherCond, airTemp, waterType, underwaterVisibility, waterTemp, waterCond, surfaceInt, startLetterGroup, maxDepth, residualNitrogenTime, actualDiveTime }) => {
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
        startLetterGroup: startLetterGroup,
        maxDepth: maxDepth,
        residualNitrogenTime: residualNitrogenTime,
        actualDiveTime: actualDiveTime
      }
      return await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { logs: logInput } },
        {
          new: true,
          runValidators: true,
        }
      )
    },
    removeUser: async (parent, { email, password }) => {
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
    },
  },
};

module.exports = resolvers;
