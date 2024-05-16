import React from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import './styles/paymentinit.css'
const PaymentInit = ({data:{amount}}:NodeProps<{amount:number}>) => {
  return (
    <>
    <section className='payment-init'>
    <span>Payment INITIALISED!</span>
    {/* <span>{amount}</span> */}
    </section>
    <Handle type='source' position={Position.Right} />
    </>
  )
}

export default PaymentInit