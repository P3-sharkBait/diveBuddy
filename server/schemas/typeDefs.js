const { gql } = require("apollo-server-express");

// LINE 65 MAY BE CAUSING THE ISSUES.

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    category: String
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    logs: [Log]!
    friends: [User]
  }
  type Checkout {
    session: ID
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
    products: [Product]
    product(_id: ID!): Product
    users: [User]
    userFriend(username: [String!]): [User]
    user(username: String!): User
    userOrder(purchaseDate: [String!]): Order
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
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product

  }
;

module.exports = typeDefs;
