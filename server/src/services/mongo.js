const mongoose=require("mongoose");
const path=require("path");
require("dotenv").config({path:path.join(__dirname,".env")});
const MONGO_URL='mongodb://localhost:27017/linkShortener';


async function connectMongo(){
    mongoose.connection.once("open",()=>{
        console.log("mongodb connection is working");
    });
    mongoose.connection.on("error",()=>{
        console.log(error);
    });
    await mongoose.connect(MONGO_URL);
    
}


module.exports={connectMongo};