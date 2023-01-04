import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import appUserRoute from "./routes/appUserRoute.js";
import corsOptions from './config/corsOptions.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then( ()=> console.log("DB connected successfully") )
.catch( err => console.error(err))

app.use('/', appUserRoute)

app.listen(port, () => console.log(`App is running on port http://localhost:${port}`))
