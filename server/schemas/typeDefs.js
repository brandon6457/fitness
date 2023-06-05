const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    firstName: String
    lastName: String
    height: Int
    weight: Int
    age: Int
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    addUser(
      email: String!
      firstName: String!
      lastName: String!
      height: Int!
      weight: Int!
      age: Int!
    ): User
    updateUser(
      firstName: String!
      lastName: String!
      height: Int!
      weight: Int!
      age: Int!
    ): User
  }
`;

module.exports = typeDefs;
