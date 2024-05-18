// Import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");
// Define the food schema
const foodSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  breakfast: {
    type: String,
    required: true
  },
  lunch: {
    type: String,
    required: true
  },
  dinner: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create the food model
const Food = mongoose.model('Food', foodSchema);

// Export the model
module.exports = Food;
