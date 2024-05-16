"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast';
const LoginPage = () => {
  const [user,setUser] = useState({email:"",password:""});
  const [buttonDisabled,setDisabled] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);
  const router = useRouter();
  const onLogin = async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    try{
      setLoading(true);
      const res = await axios.post('/api/users/signup',user);
      if(res.status===201){
        setLoading(false);
        toast.success("Successfully Registered!");
        router.push("/profile");
      }else{
        setLoading(false);
        toast.error("Failed to register!");
      }
    }catch(error){
      console.log(error);
    }
  }
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value });
}

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  },[user])
  return (
    <div>
      <h1>LoginPage Page: {loading?"Processing":null}</h1>
      <label htmlFor='email'>email</label><br />
      <input onChange={inputChange} type='text' id='email' name='email' value={user.email} /><br />
      <label htmlFor='password'>password</label><br />
      <input onChange={inputChange} type="password" id='password' name='password' value={user.password} /><br />
      <button disabled={buttonDisabled} onClick={onLogin}>Submit</button>
    </div>
  )
}

export default LoginPage