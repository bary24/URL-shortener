const express=require("express");
const cors=require("cors");
const path=require("path");
const morgan=require("morgan");
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());
app.use(morgan("combined"));
app.set("view engine","ejs");
/*app.get("/*",function(req,res){
   res.sendFile(path.join(__dirname,"..","public","index.ejs"));
})*/









module.exports=app;


