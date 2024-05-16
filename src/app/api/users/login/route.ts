import {connecaToDb} from '@/dbConnection/dbconfig';
import User from '@/models/usermode'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
connecaToDb();
import { NextRequest,NextResponse } from 'next/server';
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {email,password} = reqBody;
        //validation
        const find = await User.findOne({email});
        if(!find){
            return NextResponse.json({e:"error"},{status:401});
        }else{
            const check = await bcryptjs.compare(password,find.password);
            if(!check){
                return NextResponse.json({e:"error"},{status:401});
            }else{
                //generate token
                const userToken = {
                    username:find.username,
                    email:find.email,
                    id:find._id
                }
                const token =  jwt.sign(userToken,process.env.token_secret!,{expiresIn:"1d"});

                //send reponse
                const response = NextResponse.json({message:"Loggedin success",success:true},{status:201})
                //set cookies
                response.cookies.set("token",token,{httpOnly:true});
                //response set after adding cookies
                return response
            }
        }
    }catch(e){
        console.log(e);
        return NextResponse.json({e:"error"},{status:401});
    }
}