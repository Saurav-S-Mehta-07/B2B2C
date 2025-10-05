const mongoose = require("mongoose");
const {Schema} = mongoose;

let shopkeeperSchema = new Schema({
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
    items:[
        {
            type: Schema.Types.ObjectId,
            ref: "Item",
        }
    ]
})

const Shopkeeper = mongoose.model("Shopkeeper", shopkeeperSchema);
module.exports = Shopkeeper;