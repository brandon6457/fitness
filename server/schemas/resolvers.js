const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate("posts");
    },
    posts: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        console.log("USER: ", user);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("ERROR IN ADDUSER: ", error);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      console.log("USER: ", user);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args) => {
      const user = await User.findOneAndUpdate(args);
      return user;
    },
    addPost: async (parent, { thoughtText, thoughtAuthor }) => {
      const post = await Post.create({ thoughtText, thoughtAuthor });
      await User.findOneAndUpdate(
        { email: thoughtAuthor },
        { $addToSet: { posts: post._id } }
      );
      return post;
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
  },
};

module.exports = resolvers;
