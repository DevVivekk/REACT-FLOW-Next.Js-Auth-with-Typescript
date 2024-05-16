import User from '@/models/usermode';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
type funcObj = {
    email:string,
    emailType:string,
    userId:string
}
export const sendEmail = async({email,emailType,userId}:funcObj)=>{
    try{
        const gentoken = await bcryptjs.hash(userId.toString(),10);
        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate({_id:userId},{verifyToken:gentoken,verifyTokenExpiry:Date.now()+3600000},{new:true})
        }else if(emailType==="RESET"){
            await User.findByIdAndUpdate({_id:userId},{forgotPasswordToken:gentoken,forgotPasswordTokenExpiry:Date.now()+3600000},{new:true})
        }
        const transporter = nodemailer.createTransport({
            service:"gmail",
            secure:true,
            auth:{
            user:"myheldesk99@gmail.com",
            pass:process.env.emailpass
            }
        })

        const mailOptions ={
            from:process.env.emailid,
            to:email,
            subject:emailType==="VERIFY"?"VERIFY YOUR EMAIL":"Reset your password!",
            text:"Got email from next auth",
            html:`<a href="${process.env.DOMAIN}/verifyemail?token=${gentoken}">Click here!</a>`
        }
        const info =  await transporter.sendMail(mailOptions)
        return info
    }catch(e:any){
        throw new Error(e.message)
    }
}