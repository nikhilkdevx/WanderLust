const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const getCoordinates = require("../utils/geocoding");
require("dotenv").config({ path: "../.env" });

main()
.then(() => {
    console.log("Connected to MongoDB");
    
})
.catch((err) => {
    console.log(err);
});

async function main(){
    console.log(process.env.ATLASDB_URL);
   await mongoose.connect(process.env.ATLASDB_URL); 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const initDB = async() =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, 
    owner : "6a3c51668dfa1c54691233fb"
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