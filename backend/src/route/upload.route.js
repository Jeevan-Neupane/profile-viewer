import { Router } from "express";
import upload from "../middleware/multer.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
const router = Router();

import { Album } from "../model/album.model.js";

router.post('/albums/add', upload.array('images', 10), async (req, res) => {

    const { title } = req.body;
    const existedOne = await Album.findOne({ title });

    if (existedOne) {
        return res.status(404).json({
            message: "Albums must have different name"
        })
    }
    const imagesPath = req.files.map((file) => {
        return file.path;
    })
    let imagesURL = [];
    if (imagesPath?.length > 0) {
        imagesURL = imagesPath.map(async (path) => {
            return await uploadOnCloudinary(path);

        })
    }
    Promise.all(imagesURL).then(async (data) => {
        const urlArray = [];
        for (let i = 0; i < data.length; i++) {
            urlArray.push(data[i].url);

        }


        const albums = await Album.create({
            title,
            images: urlArray
        })





        res.status(200).json({
            message: "Uploaded Successfully",
            data: albums
        })


    }).catch((error) => {
        console.log("Error while uploading to cloudinary", error);
        res.send("Error while uploading to cloudinary");
    })


})

router.get('/albums', async (req, res) => {

    try {
        const allAlbums = await Album.find().sort({ createdAt: -1 });



        res.status(200).json({
            message: "Data is sent successfully",
            data: allAlbums
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

})




export default router;