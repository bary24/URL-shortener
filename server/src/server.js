const http=require("http");
const app=require("./app");
const connectMongo=require("./services/mongo");
const port=process.env.PORT||8000;
const server=http.createServer(app);
const mongoose=require("mongoose");
const Link=require("./models/links.model");
const DeviceDetector=require("device-detector-js");
const deviceDetector = new DeviceDetector();

async function startServer(){
await connectMongo();
await Link.syncIndexes();

    server.listen(port,function(){
        console.log(`Server has started on port ${port}`);
    })

}

startServer();



app.get("/",async function(req,res){
    const shortUrl=await Link.findOne({},{_id:0});
    console.log(shortUrl);
    res.render("index",
    {testVariable:shortUrl.short})
});

app.post("/short",async function(req,res){
    console.log(req.body);
    const record=  new Link({
        webFull:req.body.webUrl,
        androidFull:req.body.androidUrl
    })

    await record.save();
    res.json(record.short);
    

});

app.get("/:shortlink", async function(req,res){
    const shortLink=req.params.shortlink;
    const data= await Link.findOne({short:shortLink});
    if(!data){
        res.status(404);
    }
    // await data.save();
const userAgent=req.headers["user-agent"];
const device = deviceDetector.parse(userAgent);
console.log(device.os.name);

    if(device.os.name=="Android"){
        res.redirect(data.androidFull);
    }

    if(device.os.name=="iOS"){
        res.redirect(data.iosFull);
    }
if(!device.os.name||device.os.name=="Windows"||device.os.name==""){
    res.redirect(data.webFull);
}

})



