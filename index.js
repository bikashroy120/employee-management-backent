const express = require('express')
const bodyParser = require("body-parser")

const app = express();

const cors = require("cors");
const connectDB = require('./utils/db');

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.listen(8000,()=>{
    console.log("server is running ")
    connectDB()
})