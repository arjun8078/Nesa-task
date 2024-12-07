const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [1, 'Name cannot be empty'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Invalid email format',
    },
  },
  age: {
    type: Number,
    required: true,
    min: [0, 'Age must be greater than or equal to 0'],
    validate: {
      validator: Number.isInteger,
      message: 'Age must be an integer',
    },
  },
});

module.exports = mongoose.model('User', userSchema);
