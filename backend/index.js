import express from 'express'
import ImageKit from 'imagekit';
import cors from "cors";
import mongoose from 'mongoose';
import Chat from './models/chat.js';
import UserChats from './models/userChats.js';


const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json());
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to database")
    }
    catch (err) {
        console.log(err)
    }
}
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLICKEY,
    privateKey: process.env.IMAGE_KIT_PRIVATEKEY,
});

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})
app.post("/api/chats", async (req, res) => {
    const { userId, text } = req.body;
    console.log(userId, text)
    try {
        //create new chat
        const newChat = new Chat({
            userId: userId,
            history: [{ role: "user", parts: [{ text }] }],
        })
        const savedChat = await newChat.save()
        //check if user chats exists
        const userChats = await UserChats.find({ userId: userId });
        if (!userChats.length) {
            const newUserChats = new UserChats({
                userId: userId,
                chats: [
                    {
                        _id: savedChat._id,
                        title: text.substring(0, 40)
                    }
                ]
            })
            await newUserChats.save()
        }
        else {
            await UserChats.updateOne({ userId: userId }, {
                $push: {
                    chats: {
                        _id: savedChat._id,
                        title: text.substring(0, 40)
                    }
                }
            })
        }
        res.status(200).send(newChat._id)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "failed creating chats" })
    }
})
app.listen(port, () => {
    connect();
    console.log(`server is running at ${port}`);
})

