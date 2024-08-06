import express from 'express'
import ImageKit from 'imagekit';
import cors from "cors";
import mongoose from 'mongoose';
const port=process.env.PORT || 3000;

const app=express();

app.use(cors({
    origin:process.env.CLIENT_URL
}))
const connect=async ()=>{
    try{
      await mongoose.connect(process.env.MONGO)
      console.log("Connected to database")
    }
    catch(err){
        console.log(err)
    }
}
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLICKEY,
    privateKey: process.env.IMAGE_KIT_PRIVATEKEY,
  });

app.get("/api/upload",(req,res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})
app.listen(port,()=>{
    connect();
    console.log(`server is running at ${port}`);
})

