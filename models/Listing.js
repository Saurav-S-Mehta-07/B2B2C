const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category:{
    type: String,
    default:"all",
  },
});

// Model
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
