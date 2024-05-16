import {connecaToDb} from '@/dbConnection/dbconfig';
import { NextRequest, NextResponse } from 'next/server';
connecaToDb();

export async function GET(request:NextRequest){
    try{
        const res = NextResponse.json({message:"User logout successfully!"},{status:201});
        //res.cookies.set("token","",{httpOnly:true,expires:new Date(0)});
        res.cookies.delete("token");
        //send the response after manipulation
        return res;
    }catch(e:any){
        console.log(e);
        return NextResponse.json({error:e.message},{status:500})
    }
}