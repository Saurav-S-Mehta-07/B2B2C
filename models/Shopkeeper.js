const mongoose = require("mongoose");

let shopkeeperSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    number:{
        type : Number,
        required: true,
    },
    shopname : {
        type : String,
        required : true,
    },
    location : {
        type : String, 
        required : true,
    },
    city: {
        type :String, 
        required : true,
    },
})

const Shopkeeper = mongoose.model("Shopkeeper", shopkeeperSchema);
module.exports = Shopkeeper;