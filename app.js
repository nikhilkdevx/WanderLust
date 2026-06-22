const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const {listingSchema} = require("./schema");
const Review = require("./models/review");
const {reviewSchema} = require("./schema");

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

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400 ,errMsg);
    }else{
        next();
    }
}

const validateReview = (req,res,next) =>{
    console.log(req.body);
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

app.get("/listings",wrapAsync (async (req,res)=>{
const allListings = await Listing.find({});
res.render("listings/index",{allListings});
})
);

// New and Create Route

app.get("/listings/new", (req,res)=>{
    res.render("listings/new");
});

app.post("/listings",validateListing ,wrapAsync(async (req,res,next)=>{
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings"); 
    })
);


// Show Route for One Specific View
app.get("/listings/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show",{listing});

})
);

// Edit Route

app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit",{listing});
})
); 

// Update Route 

app.put("/listings/:id",validateListing, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})
);

// Delete Route
app.delete("/listings/:id/delete",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
);

// Review Route For posting Review

app.post("/listings/:id/reviews",validateReview, wrapAsync(async (req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("new Review Saved");
    res.redirect(`/listings/${listing._id}`);
}));

// Delete Route for Review

app.delete("/listings/:id/reviews/:reviewId",wrapAsync (async (req,res)=>{
    let {id,reviewId} = req.params;

    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

// For Handling Out of Routes Request that means any random request

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


// app.get("/testlisting", async (req,res)=>{
//    let sampleListing = new Listing({
//     title : "My Home",
//     description : "By the Beach",
//     price : 2100,
//     location : "Himachal Pradesh",
//     country : "India",
//    });
//    await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful");
   
// });