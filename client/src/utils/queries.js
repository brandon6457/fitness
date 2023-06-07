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
