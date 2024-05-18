// Import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");

const feeSchema = new mongoose.Schema({
  acRoomFee: {
    type: String,
    required: true
  },
  nonAcRoomFee: {
    type: String,
    required: true
  },
  foodFee: {
    type: String,
    required: true
  }
});

// Create the fee model
const Fee = mongoose.model('Fee', feeSchema);

// Export the model
module.exports = Fee;
