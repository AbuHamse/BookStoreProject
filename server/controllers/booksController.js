import Books from "../models/Books"



const getAllBooks = async(req,res)=>{

try {
    const allBooks = await Books.find({})
    if(allBooks?.length <= 0){
        res.status(404).json({
            success:false,
            message:"There are no Books available",
            data:allBooks.length
        })
    }else{
        res.status(200).json({
            success:true,
            message:"There are books available",
            data:allBooks
        })
    }
    
} catch (error) {
    res.status(400).json({
        success:false,
        message:"There are no books available"
    })
    console.log(error.message)
}
}

export default {getAllBooks}