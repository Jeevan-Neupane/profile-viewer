import { Schema, model } from "mongoose";

const albumSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    images: [{
        type: String,
        required: true
    }]

}, {
    timestamps: true
})

export const Album = model("album", albumSchema);

