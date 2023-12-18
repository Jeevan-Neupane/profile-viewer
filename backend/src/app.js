import express from "express";
import cors from "cors";
import uploadRoute from "./route/upload.route.js"

const app = express();
app.use(express.json());


app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))



app.use('/api', uploadRoute);








export default app;