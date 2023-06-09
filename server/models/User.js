const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        // minlength: 5,
        // maxlength: 32
    },
    firstName: {
        type: String,
        required: true,
        // minlength: 2,
        // maxlength: 32,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        // minlength: 2,
        // maxlength: 32,
        trim: true,
    },
    heightIn: {
        type: Number,
        required: true,
        // min: 36,
        // max: 96
    },
    heightFt: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
        // min: 50,
        // max: 500
    },
    age: {
        type: Number,
        required: true,
        // min: 13,
        // max: 120
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);

module.exports = User;