import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!, $heightFt: Int!, $heightIn: Int!, $weight: Int!, $age: Int!) {
  addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, heightFt: $heightFt, heightIn: $heightIn, weight: $weight, age: $age) {
      token
      user {
        _id
        firstName
        lastName
        email
        heightFt
        heightIn
        weight
        age
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $postAuthor: String!) {
    addPost(postText: $postText, postAuthor: $postAuthor) {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;
