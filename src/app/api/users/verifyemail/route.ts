import { connecaToDb } from "@/dbConnection/dbconfig";
import User from "@/models/usermode";
import {NextResponse,NextRequest} from 'next/server';
connecaToDb();
export async function POST(request:NextRequest){
    try{
        //sconst reqBody = await request.json();
        //const {token} = reqBody;

         // get the search params or query object as a URLSearchParams object
        const searchParams = request.nextUrl.searchParams;

  // get the values of the name and age parameters
    const token = searchParams.get('token');

        const user = await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}});
        if(!user){
            return NextResponse.json({error:"Invalid Token"},{status:500});
        }
        console.log(user);
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();
        return NextResponse.json({message:"Email verified successfully!"},{status:200});

    }catch(e:any){
        console.log(e);
        return NextResponse.json({error:e.message},{status:400});
    }
}