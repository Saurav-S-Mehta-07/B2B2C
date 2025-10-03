const mongoose = require("mongoose");
const Shopkeeper = require("../models/Shopkeeper.js");       
const ShopkeeperData = require("./shopkeeper.js");

async function initDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/b2b2c"); 
    console.log("connection successful");

    await Shopkeeper.deleteMany({});

    await Shopkeeper.insertMany(ShopkeeperData);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

initDb();
