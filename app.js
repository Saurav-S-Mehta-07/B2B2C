const express = require("express");
const path = require("path");
const engine = require("ejs-mate"); 
const mongoose = require("mongoose");
const Listing = require("./models/Listing.js"); 
const Item = require("./models/Item.js");
const methodOverride = require("method-override");

const app = express();
const PORT = 3000;

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


mongoose.connect("mongodb://127.0.0.1:27017/b2b2c")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


app.get("/main", async (req, res) => {
    let { q } = req.query;
    const listings = await Listing.find();
    const categories = await Item.distinct("category"); 
    if(q){
        const items = await Item.find({category: q});
        return res.render("listings/index", {listings, items, categories});
    }
    const items = await Item.find();
    return res.render("listings/index", { listings, items, categories});
});


app.get("/addlist",async (req,res)=>{
    try {
    const listings = await Listing.find();
    res.render("listings/addlist", { listings });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching listings");
  }
});

app.post("/main",async(req,res)=>{
   let {title, price, category, image} = req.body;

   let newItem = new Item(req.body);

   let newListing = new Listing(req.body); 

   await newListing.save();
   await newItem.save();

   res.redirect("/main"); 
});

app.delete("/main/:id", async(req, res)=>{
   let {id} = req.params;
   let dltItem = await Item.findByIdAndDelete(id);
   let dltListing = await Listing.findByIdAndDelete(id);
   res.redirect(`/main`);
})


app.get("/main/order",(req,res)=>{
  res.render("listings/order");
})

app.post("/main/order",(req,res)=>{
  
  res.redirect("/main/order");
})


app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
