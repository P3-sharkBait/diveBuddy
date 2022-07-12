const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    logs: [Log]!
    friends: [User]
    orders: [Order]
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
    ballast: Int
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
    pressureUsed: Int
    SAC: Float
    pressureAtDepth: Float
    EndingLetterGroup: String
    TotalNitrogenTime: Int
    NextResidualNitrogenTime: Int
    NewStartingLetterGroup: String
    NextMaxDiveTime: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

    userOrder: User

    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
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
      ballast: Int
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
    addFriend(username: String!, _id: String!): User
  }
`;
module.exports = typeDefs;
