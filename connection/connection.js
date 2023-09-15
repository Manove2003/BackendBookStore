 const mongoose=require("mongoose");

 mongoose.connect(
    "mongodb+srv://Manove:mk2003@cluster0.fqahijw.mongodb.net/Curd?retryWrites=true&w=majority"
 )
 .then(()=>console.log("Connected"));