// Import mongoose
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

// const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");

// Define the admin schema
const adminSchema = new mongoose.Schema({
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
  }
}, { timestamps: true });
adminSchema.plugin(plm);
// Create the admin model
const Admin = mongoose.model('Admin', adminSchema);

// Export the model
module.exports = Admin;
