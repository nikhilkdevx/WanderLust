const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const { listingSchema,reviewSchema } = require("./schema");

module.exports.isLoggedIn = (req,res,next)=>{
    
    if(!req.isAuthenticated()){
        // Redirect Url after users login simply going where he left
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

// Basically passport reset the session after fresh login so we created middleware so that it transfers to local where passport will not be able to delete it 
module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

// for Authorizing that only onwer can edit the listing not by someone else
module.exports.isOwner = async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// For ValidateListing
module.exports.validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400 ,errMsg);
    }else{
        next();
    }
}

// For Validating Review
module.exports.validateReview = (req,res,next) =>{
    
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

// For Validating Author of the Review 
module.exports.isReviewAuthor = async (req,res,next) =>{
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You have not created this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}