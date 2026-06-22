const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    image : {
        filename : {
            type : String,
        },
        url : {
            type : String,
        },   
    },
    price : {
        type : Number,
        required : true,

    },
    location : {
        type : String,
    },
    country : {
        type : String,
    },
    reviews : [
     {
        type : Schema.Types.ObjectId,
        ref : "Review",
     },   
    ],
});

// Delete all the reviews if the listing is Getting Deleted
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
    
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;