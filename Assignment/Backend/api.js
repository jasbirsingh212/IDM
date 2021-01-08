const express = require("express");
const cors=require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const userRouter = require("./routes/user.js");
app.use(cors());
app.use(express.json());

//*******Database Connection*********//
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{ userNewUrlParser:true ,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb started");
})
.catch(err => {console.log(err)});
//*************************************//

app.use("/user", userRouter);
app.listen(4000, function () {
    console.log("Server is listening at port 4000");
});