const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    logs: [Log]!
    friends: [String]
  }

  type Log {
    diveNumber: Int
    location: String
    dateTime: String
    breathingMixture: String
    tankType: String
    tankCapacity: Int
    startPressure: Int
    endPressure: Int
    ballast: String
    extraEquipment: String
    suit: String
    WeatherCond: String
    airTemp: Int
    waterType: String
    underwaterVisibility: Int
    waterTemp: Int
    waterCond: String
    surfaceInt: Int
    nextSurfaceInt: Int
    previousEndLetter: String
    maxDepth: Int
    nextDepth: Int
    residualNitrogenTime: Int
    actualDiveTime: Int
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    userFriend(username: [String!]): [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addLog(
      username: String!
      diveNumber: Int!
      location: String
      dateTime: String
      breathingMixture: String
      tankType: String
      tankCapacity: Int
      startPressure: Int
      endPressure: Int
      ballast: String
      extraEquipment: String
      suit: String
      WeatherCond: String
      airTemp: Int
      waterType: String
      underwaterVisibility: Int
      waterTemp: Int
      waterCond: String
      surfaceInt: Int
      nextSurfaceInt: Int
      previousEndLetter: String
      maxDepth: Int
      nextDepth: Int
      residualNitrogenTime: Int
      actualDiveTime: Int
    ): User
    removeUser(email: String!, password: String!): Auth
    removeLog(email: String!, password: String!, diveNumber: Int!): Auth
  }
`;

module.exports = typeDefs;
