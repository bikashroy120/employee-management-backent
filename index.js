const express = require('express')
const bodyParser = require("body-parser")

const app = express();

const cors = require("cors");
const connectDB = require('./utils/db');
const ErrorMiddleware = require('./middleware/error');
const employeeRoute = require("./routes/employeRoute")


app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.listen(8000,()=>{
    console.log("server is running ")
    connectDB()
})

app.use("/api/v1/",employeeRoute)


// testing api
app.get("/test",(req,res,next)=>{
    res.status(200).json({
        message:"this is test route",
        success:true
    })
})


// unnone route
app.all("*",(req,res,next)=>{
    const err = new Error("Route not valied !")
    err.statusCode = 404;
    next(err)
})

app.use(ErrorMiddleware)