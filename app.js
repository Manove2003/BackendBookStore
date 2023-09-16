require('dotenv').config()
const express =require("express");
const app=express();
const bookRoutes=require("./routes/booksRoutes")
const cors = require('cors')
require("./connection/connection")

app.use(express.json());
app.use(cors())
app.use("/api/v1",bookRoutes);
app.listen(process.env.PORT || 1004,()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
});

