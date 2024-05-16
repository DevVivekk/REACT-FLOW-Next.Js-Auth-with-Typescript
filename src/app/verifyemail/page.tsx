"use client"
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'

const VerifyPage = () => {
  const [token,setToken] = useState("");
  const [verified,setVerified] = useState(false);
  const [error,setError] = useState(false);
  //extract token
  useEffect(()=>{
    setError(false);
    const urltoken = window.location.search.split("=")[1]
    setToken(urltoken || "");
  },[])

  //getting data from url using next.js and not using plain js
  // const routerr = useRouter();
  // const {query} = routerr;
  // const urltokenn =query.token;

  const verifyUser = useCallback(async()=>{
    try{
    const res = await axios.post(`/api/users/verifyemail?token=${token}`,{token})
    //in backend im handling with params obj
    if(res.status===201){
      setVerified(true);
      setError(false);
    }else{
      setError(true);
      setVerified(false);
    }
    }catch(error:any){
      console.log(error.response.data);
      setError(true);
    }
  },[token])

  useEffect(()=>{
    setError(false);
    if(token.length>0){
      verifyUser()
    }
  },[verifyUser,token])
  return (
    <div>
      <h2>Status: {verified?"True":"False"}</h2>
      <h3>Error: {error?error:null}</h3>
    </div>
  )
}

export default VerifyPage