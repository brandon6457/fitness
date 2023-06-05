const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { email }) => {
            const params = email ? { email } : {};
            return User.findOne(params);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        updateUser: async (parent, args) => {
            const user = await User.findOneAndUpdate(args);
            return user;
        },
    },

};

module.exports = resolvers;