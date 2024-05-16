import React from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import './styles/paymentCountry.css'
const PaymentCountry = ({data:{currency,country,countryCode}}:NodeProps<{currency:string,country:string,countryCode:string}>) => {
  return (
    <>
        <section className='payment-country'>
            <span>CountryCode:{countryCode}</span><br />
            <span>Currency:{currency}</span><br />
            <span>Country:{country}</span><br />
        </section>
        <Handle type='source' position={Position.Right} />
        <Handle type='target' position={Position.Left} />
    </>
  )
}

export default PaymentCountry