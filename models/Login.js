const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  number: { type: String, required: true },
  pin: { type: String, required: true }
});

module.exports = mongoose.model('Login', loginSchema);
