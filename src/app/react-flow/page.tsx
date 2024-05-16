"use client"
import React, { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Node,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
import PaymentInit from './paymentInit';
import { initialEdges, intialNodes } from './reactFlow';
import PaymentCountry from './paymentCountry';
import PaymentProvider from './paymentProvider';
import PaymentProviderSelector from './PaymentProviderSelector';
import CustomEdge from './customized';
import './styles/flowpage.css'
// const initilalNodes:Node[] = [{
//   id:'1',
//   data:{
//     label:"Node 1"
//   },
//   //hidden:true, //hides the node
//   position:{x:0,y:0}
// },
// { id:'2',
//   data:{
//   label:"Node 2"
// },
// position:{x:110,y:110}
// },
// { id:'3',
// data:{
// label:"Node 3"
// },
// position:{x:150,y:150}
// }
// ]

//edges
//const initialEdges:Edge[] = [{id:'1-2',source:"1",target:"2",animated:true}]
const nodeTypes = {
  paymentInit:PaymentInit,
  paymentCountry:PaymentCountry,
  paymentProvider:PaymentProvider,
  paymentProviderSelect:PaymentProviderSelector
}
const edegTypes = {
  customEdge:CustomEdge
}
const ReactFlowPage = () => {
  const [nodes,setNodes,onNodesChange] = useNodesState(intialNodes)
  const [edges,setEdges,onEdgesChange]  = useEdgesState(initialEdges);
  const onConnect = useCallback((connection:Connection)=>{
    const edge = {...connection,animated:true,id:`${edges.length}+1`,type:"customEdge"};
    setEdges((prevedge)=>addEdge(edge,prevedge));
  },[edges.length,setEdges])
  return (
    <>
    <div className='react-flow'>
      <ReactFlow nodes={nodes} onConnect={onConnect} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView nodeTypes={nodeTypes} edgeTypes={edegTypes}>
      <Background />
      <Controls />
      {/* <MiniMap /> */}
      </ReactFlow>
        </div>
    </>
  )
}

export default ReactFlowPage