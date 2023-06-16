import express from "express"
import * as dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"

import Post from "../mongodb/models/post.js"

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


// GET ALL POSTSS
router.route('/').get(async (req, res) => {
    console.log(123);
    try {
        const post = await Post.find({
        })

        res.status(200).json({
            success: true, data: post
        })

    } catch {
        res.status(500).json({
            success: false,
            message: "Error"
        })
    }
})

// CREATE A POST
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body

        const photoUrl = await cloudinary.uploader.upload(photo)
        
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        })
        res.status(201).json({ success: true, data: newPost })
    } catch {
        res.status(500).json({ success: false, message: "Error" })
    }
})




export default router