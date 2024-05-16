"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
interface UserData {
    username: string;
    email:string
    // Add other properties if available
}
const UserPage = () => {
    const [data,setData] = useState<UserData | null>(null);
    //const [data, setData] = useState<UserData[]>([]); // Initialize data state as an array of UserData or nested user objects
    const router = useRouter();
    const getuserdetails = async()=>{
        const res = await axios.get("/api/users/me")
        setData(res.data);
    }
    useEffect(()=>{
        getuserdetails()
    },[])
    const logout = async()=>{
        try{
            // const res = await axios.get<UserData[]>("/api/user/me"); // Specify the response type as UserData[]
            await axios.get("/api/users/logout")
            toast.success("successfully logged out!")
            router.replace('/');
        }catch(e){
            console.log(e);
            toast.error("Got error");
        }
    }
  return (
    <div>
        <h1>Profile page</h1>
        <h2>User name: {data?.username?data.username:"nothing"}</h2>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserPage