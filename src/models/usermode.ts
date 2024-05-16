import mongoose from "mongoose";
const userSchmea = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"please provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please provide password"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})
//here edge computing is used
//the problem it faces that it dont know whether the connection to mongodb is taking place for the first time or not.
const User = mongoose.models.users || mongoose.model("users",userSchmea);
//here above im saying that if the users model already exits then give me that one else create new users model.

export default User;
