const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const orderSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  quantity: { type: Number, default: 1 },
  image : { type: String },
  title : { type: String },
  price : { type: Number },
  orderedAt: { type: Date, default: Date.now }
});

const shopkeeperSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  number: Number,
  shopname: String,
  location: String,
  city: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }], 
  myorder: [orderSchema]  
});


shopkeeperSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("Shopkeeper", shopkeeperSchema);
