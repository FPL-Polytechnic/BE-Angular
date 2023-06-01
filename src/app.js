import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/be_angular')
    .then(() => console.log("Kết nối thành công!"));

export const viteNodeApp = app;

//3
//4
