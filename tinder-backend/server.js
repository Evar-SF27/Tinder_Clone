import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.PORT || 3000;

//Middlewares

//DB Config

//API endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));

//Listeners
app.listen(port, () => console.log("Listening on localhost:  ${port}"));