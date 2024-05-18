// Import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");

// Define the leave schema
const leaveSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  roomNo: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

// Create the leave model
const Leave = mongoose.model('Leave', leaveSchema);

// Export the model
module.exports = Leave;
