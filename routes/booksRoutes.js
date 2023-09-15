const router=require("express").Router();
const bookModel=require("../models/booksModel");

// Post Request
router.post("/add",async(req,res)=>{
    const newbook = {
        bookname : req.body.book,
        price : req.body.Price,
        description : req.body.description, 
        author : req.body.author,
        image : req.body.Image  

    }
    try {
        await bookModel.create(newbook).then(()=>{
            res.status(200).json({message:"Book Added Successfully"});
        });
    } catch (error) {
        console.log(error);
    }
    // res.json({message : "Success"})
});

// Get Request
router.get("/getBooks",async(req,res)=>{
    let books;
    try {
        books=await bookModel.find();
        res.status(200).json({books})
    } catch (error) {
        console.log(error);
    }
});

//Get request by ID
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try {
       book= await bookModel.findById(id);
       res.status(200).json({book})
    } catch (error) {
        console.log(error);
    }
});

// Update book by ID
router.put("/updateBook/:id",async(req,res)=>{
    const id = req.params.id;
    const {book,description,author,Image,Price}=req.body;
    let newBook;
    try {
        newBook = await bookModel.findByIdAndUpdate(id,{
            bookname : book,
            description,
            author,
            image : Image,
            price : Price
        });
        await newBook.save().then(()=>res.status(200).json({message:"Book updated successfully"}));
    } catch (error) {
        console.log(error);
    }
});

// Delete request by ID
router.delete("/deleteBook/:id",async(req,res)=>{
    const id =req.params.id;
    console.log(req.id);
    try {
        await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"Deleted Successfully"}))
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;
 