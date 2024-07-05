import React, { useState } from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';

const Payment = () => {
    const [patientName, setPatientName] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        const payments = JSON.parse(localStorage.getItem('payments')) || [];
        const newPayment = { patientName, amount };
        localStorage.setItem('payments', JSON.stringify([...payments, newPayment]));
        setPatientName('');
        setAmount('');
        alert('Payment recorded!');
    };

    return (
        <div>
            <h2>Payment</h2>
            <TextField label="Patient Name" value={patientName} onChange={e => setPatientName(e.target.value)} />
            <TextField label="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <PrimaryButton text="Record Payment" onClick={handlePayment} />
        </div>
    );
};

export default Payment;
