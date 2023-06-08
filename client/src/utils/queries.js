import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      firstName
      lastName
      age
      weight
    }
  }
`;

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      age
      weight
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_USER_POSTS = gql`
query postByUser($email: String!) {
  postByUser(email: $email) {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
    firstName
    lastName
    age
    weight
    heightFt
    heightIn
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query singleuser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      age
      weight
    }
  }
`;
