import React from 'react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow'
import { MdDelete } from "react-icons/md";
import './styles/paymentProvide.css'
const PaymentProvider = ({data:{name,code},id}:NodeProps<{name:String,code:String}>) => {
    const {setNodes}  = useReactFlow();
  return (
    <>
        <section className='pay-providers'>
            <span>Name: {name} &nbsp;</span>
            <span>Code: {code}</span>
            <MdDelete size={'2rem'} color='red' onClick={()=>setNodes((prev)=>prev.filter((node)=>node.id!==id))}></MdDelete>
            </section>
            <Handle type="target" position={Position.Left} />
    </>
  )
}

export default PaymentProvider