const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema");
const Listing = require("../models/listing");

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400 ,errMsg);
    }else{
        next();
    }
}

// Index Route
router.get("/",wrapAsync (async (req,res)=>{
const allListings = await Listing.find({});
res.render("listings/index",{allListings});
})
);

// New Route
router.get("/new", (req,res)=>{
    res.render("listings/new");
});

// Create Route
router.post("/", validateListing, wrapAsync(async(req,res,next)=>{
    const newListing = new Listing(req.body.listing);

    if(req.body.listing.image){
        newListing.image = {
            url: req.body.listing.image,
            filename: "listingimage"
        };
    } else {
        newListing.image = {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        };
    }

    console.log("Image =", req.body);
    await newListing.save();
    console.log(newListing);

    req.flash("success","New Listing Created!");
    res.redirect("/listings");
}));


// Show Route for One Specific View
router.get("/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
      req.flash("error","Lisitng you requested does not exist!");  
      return res.redirect("/listings");
    }
    res.render("listings/show",{listing});

})
);

// Edit Route
router.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error","Lisitng you requested does not exist!");  
      return res.redirect("/listings"); 
    }
    res.render("listings/edit",{listing});
})
); 

// Update Route 
router.put("/:id",validateListing, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    req.body.listing.image = {
        url : req.body.listing.image,
        filename : "listingimage"
    };
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
})
);

// Delete Route
router.delete("/:id/delete",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
})
);

module.exports =  router;