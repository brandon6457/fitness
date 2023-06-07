const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    firstName: String
    password: String
    lastName: String
    heightFt: Int
    heightIn: Int
    weight: Int
    age: Int
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      heightFt: Int!
      heightIn: Int!
      weight: Int!
      age: Int!
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(
      firstName: String!
      lastName: String!
      heightFt: Int!
      heightIn: Int!
      weight: Int!
      age: Int!
    ): User
  }
`;

module.exports = typeDefs;
