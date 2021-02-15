const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  senderId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
    default: Date.now(),
  },
});

module.exports = model('message', messageSchema);
