// Import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");
// Define the notice schema
const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create the notice model
const Notice = mongoose.model('Notice', noticeSchema);

// Export the model
module.exports = Notice;
