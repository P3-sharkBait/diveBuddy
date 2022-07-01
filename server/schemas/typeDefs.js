const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    logs: [Log]!
  }

  type Log {
    diveNumber: Int
    location: Int
    dateTime: Int
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
    surfaceInt: Int,
    startLetterGroup: String
    maxDepth: Int
    residialNitrogenTime: Int
    actualDiveTime: Int
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
