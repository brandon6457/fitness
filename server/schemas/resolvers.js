const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userID }) => {
            return User.findOne({ _id: userID });
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            try {
                
            const user = await User.create(args);
            console.log("USER: ", user);
            const token = signToken(user);
            return { token, user}

            } catch (error) {
                console.error("ERROR IN ADDUSER: ", error);   
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
            console.log("USER: ", user)
            const token = signToken(user);
            return { token, user };
          },
      
        updateUser: async (parent, args) => {
            const user = await User.findOneAndUpdate(args);
            return user;
        },
    },

};

module.exports = resolvers;