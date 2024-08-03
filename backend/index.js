import express from 'express'
import ImageKit from 'imagekit';
import cors from "cors";
const port=process.env.PORT || 3000;

const app=express();

app.use(cors({
    origin:process.env.CLIENT_URL
}))

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
    console.log(`server is running at ${port}`);
})

