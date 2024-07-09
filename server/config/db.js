const { default: mongoose } = require('mongoose');
const mangoose=require('mongoose');
mangoose.set('strictQuery',false);
const connectDB=async() =>{
    try{
        const conn=await mongoose.connect("mongodb://localhost:27017/UserManagement");
        console.log(`Database Connected: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports=connectDB;