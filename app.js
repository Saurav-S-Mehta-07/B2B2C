const express = require("express");
const path = require("path");
const engine = require("ejs-mate"); 
const mongoose = require("mongoose");
const Listing = require("./models/Listing.js"); 

const app = express();
const PORT = 3000;

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/listings")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


app.get("/main", async (req, res) => {
  let categories = ["grocery", "elecetronic", "milk", "oil"];
  try {
    const listings = await Listing.find();
   res.render("listings/index", { listings, categories});
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching listings");
  }
});

app.get("/addup",async (req,res)=>{
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
   let newListing = new Listing(req.body);
   newListing.title = title;
   newListing.price = price;
   newListing.category = category;
   newListing.image = image;
   await newListing.save();
   res.redirect("/main"); 
});


app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
