import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"
export const MyAuthentication = (request:NextRequest) =>{
    try{
        const token = request.cookies.get("token")?.value || "";
        if(token){
            const decodedToken:any = jwt.verify(token,process.env.token_secret!)
            return decodedToken.id
        }
    }catch(e:any){
    }
}
