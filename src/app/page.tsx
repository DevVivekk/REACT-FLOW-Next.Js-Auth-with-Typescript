"use client"
import React, { useState } from 'react'

const Page = () => {
  const [count,setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={()=>setCount((prev):number=>prev+1)}>{count} click</button>
    </div>
  )
}

export default Page