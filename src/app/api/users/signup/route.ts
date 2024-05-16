import { connecaToDb } from "@/dbConnection/dbconfig";
import User from "@/models/usermode";
import bcryptjs from 'bcryptjs'
import {NextResponse,NextRequest} from 'next/server';
import { sendEmail } from "@/helpers/mailer";
connecaToDb();

export async function POST(request:NextRequest,response:NextResponse){
    try{
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        //validation
        console.log(reqBody);
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error:"user already exists!"},{status:500});
        }
        const salt = await bcryptjs.genSalt(12);
        const hashedpassowrd = await bcryptjs.hash(password,salt);
        const newusers = await new User({username,email,password:hashedpassowrd}).save();
        console.log(newusers);


        //send verification email
        const obj = {
            email,
            emailType:"VERIFY",
            userId:newusers._id
        }
        await sendEmail(obj)
        return NextResponse.json({message:"User Registered Successfully!",success:true,savedUser:newusers},{status:200});
    }catch(e:any){
        return NextResponse.json({error:e.message},{status:500});
    }
}
