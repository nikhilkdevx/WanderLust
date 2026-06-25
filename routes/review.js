const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review");
const Listing = require("../models/listing");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");

// Review Route For posting Review
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

// Delete Route for Review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync (reviewController.deleteReview));

module.exports = router;