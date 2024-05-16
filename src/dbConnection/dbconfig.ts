import mongoose from "mongoose";
export async function connecaToDb(){
    try{
    await mongoose.connect(process.env.MONGO_URL!) //here ! it says that 100% string is going to come or write procees.env.MONGO_URL || ""
    const connection = mongoose.connection;
    connection.on("connected",(err)=>{
        console.log("Db is connected successfull!");
        console.log("failed db error is ",err);
        process.exit();
    })
    connection.on("error",()=>{
        console.log("Db is not connected!");
    })
    }catch(e){
        console.log(e);
    }
}