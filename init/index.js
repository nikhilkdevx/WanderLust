const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const getCoordinates = require("../utils/geocoding");

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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const initDB = async() =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, 
    owner : "6a3a46900d44242a79e0893c"
    }));
    for (let listing of initData.data) {

    console.log("Geocoding:", listing.location);

    const coords = await getCoordinates(
        listing.location,
        listing.country
    );

    listing.geometry = {
        type: "Point",
        coordinates: [coords.lon, coords.lat]
    };

    await sleep(1200);
    }
    await Listing.insertMany(initData.data);
    console.log("Data was initalized");
}

initDB();