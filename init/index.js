const mongoose = require("mongoose");
const initData = require("./data.js");
const Customer = require("../models/Shopkeeper.js");

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/b2b2c');
}

const initDB = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany(initData.data); 
    console.log("data was initialized");
}

initDB();
