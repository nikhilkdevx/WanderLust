const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const flash = require("connect-flash");
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

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

const sessionOptions = {
    secret : "mysupersecertcode",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge :  7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    },
};


// Home Route 
app.get("/",(req,res)=>{
    res.send("we are at home page");
}); 

// Session 
app.use(session(sessionOptions));
// Flash messages
app.use(flash());

// Authentication and Authorization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Using the Router We Created for the routes
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

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

