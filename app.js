const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const listings = require("./routes/listing");
const reviews = require("./routes/review");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

main()
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlust'); 
}

// Home Route 
app.get("/",(req,res)=>{
    res.send("we are at home page");
});

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);

//  For Handling Out of Routes Request that means any random request
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Handling Error if in Case Any Error is coming so that user no need to see that large text
app.use((err,req,res,next)=>{
    let {statusCode = 500 , message = "Something went Wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
});

app.listen(port,()=>{
    console.log(`Server is listning to Port ${port}`);
});

