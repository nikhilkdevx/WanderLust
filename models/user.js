const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { default: passportLocalMongoose } = require("passport-local-mongoose");

const userSchema = new Schema({
    email : { 
        type : String,
        required : true
    }
});


// Adding this plugin will automatically creates hashed , salted username and passsword
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);