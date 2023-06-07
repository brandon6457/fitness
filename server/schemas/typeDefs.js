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
    posts: [Post]!
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(email: String!): User
    posts(email: String): [Post]
    post(postId: ID!): Post
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
    addPost(postText: String!, postAuthor: String! ): Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
