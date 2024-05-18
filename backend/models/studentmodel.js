// Import mongoose
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");
// Define the student schema
const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  roomNo: {
    type: String,
    required: true
  },
  collegeID: {
    type: String,
    required: true
  },
  collegeCourse: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  guardianName: {
    type: String,
    required: true
  },
  guardianPhone: {
    type: String,
    required: true
  },
  guardianEmail: {
    type: String,
    required: true
  },
  leaveRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LeaveRequest'
  }],
  complaints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Complaint'
  }]
}, { timestamps: true });

// Add Passport-Local Mongoose plugin
studentSchema.plugin(plm);

// Create the student model
const Student = mongoose.model('Student', studentSchema);

// Export the model
module.exports = Student;
