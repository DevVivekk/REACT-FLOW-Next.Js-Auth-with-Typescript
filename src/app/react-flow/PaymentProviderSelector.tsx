import React from 'react';
import { useReactFlow } from 'reactflow';

const paymentProviders = [
    { code: "St", name: "Stripe" },
    { code: "Gp", name: "Google Pay" },
    { code: "Ap", name: "Apple Pay" },
    { code: "Pp", name: "Paypal" },
    { code: "Am", name: "Amazon Pay" },
];

const PaymentProviderSelector = () => {
    const { setNodes } = useReactFlow();

    const onProviderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedProvider = paymentProviders.find(provider => provider.name === event.target.value);
        if (selectedProvider) {
            const location = Math.random() * 500;
            setNodes(prevNodes => [...prevNodes, {
                id: `${prevNodes.length + 1}`,
                data: { name: selectedProvider.name, code: selectedProvider.code },
                type: "paymentProvider",
                position: { x: location, y: location }
            }]);
        }
    };

    return (
        <>
            <select onChange={onProviderChange}>
                {paymentProviders.map((item, index) =>
                    <option key={index} value={item.name}>{item.name}</option>
                )}
            </select>
        </>
    );
};

export default PaymentProviderSelector;
