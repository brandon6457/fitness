const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 32
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 32
    },
    height: {
        type: Number,
        required: true,
        min: 36,
        max: 96
    },
    weight: {
        type: Number,
        required: true,
        min: 50,
        max: 500
    },
    age: {
        type: Number,
        required: true,
        min: 13,
        max: 120
    },
});

const User = model('User', userSchema);

module.exports = User;