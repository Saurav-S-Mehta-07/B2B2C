const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   price:{
    type:Number,
    required: true,
   },
   category:{
     type: String,
     required: true,
   },
   image:{
    type: String,
    required: true,
   },
   discount:{
    type:Number,
    default: 0,
   },
   stock:{
    type:Number,
    default: 0,
   },
   rating:{
    type:Number,
    default: 0,
   },
   quantity:{
    type:Number,
    default: 1,
   },
   vender:{
    type:String,
   },
   venderid:{
    type:String,
   },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;