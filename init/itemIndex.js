const mongoose = require("mongoose");
const Item = require("../models/Item.js");       
const itemsdata = require("./itemData");     

async function initDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/b2b2c"); 
    console.log("connection successful");

    await Item.deleteMany({});

    await Item.insertMany(itemsdata);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

initDb();
