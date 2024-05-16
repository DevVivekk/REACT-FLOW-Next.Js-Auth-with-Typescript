import { Edge,Node } from "reactflow";
export const initialEdges:Edge[] = [];
export const intialNodes:Node[] = [
    {
        id:"1",
        position:{x:10,y:-110},
        data:{amount:10},
        type:"paymentInit"
    },
    {
        id:"2",
        data:{currency:'$',country:"united States",countryCode:"Us"},
        position:{x:100,y:-100},
        type:"paymentCountry",
    },
    {
        id:"3",
        data:{currency:'£',country:"England",countryCode:"Gr"},
        position:{x:100,y:-150},
        type:"paymentCountry",
    },
    {
        id:"4",
        data:{name:'Google Pay',code:"Gp"},
        position:{x:0,y:-100},
        type:"paymentProvider",
    },
    {
        id:"5",
        data:{name:'Stripe',code:"St"},
        position:{x:0,y:-120},
        type:"paymentProvider",
    },
    {
        id:"6",
        data:{name:'Apple Pay',code:"Ap"},
        position:{x:0,y:-140},
        type:"paymentProvider",
    },
    {
        id:"7",
        data:{},
        position:{x:300,y:300},
        type:"paymentProviderSelect"
    }
];
