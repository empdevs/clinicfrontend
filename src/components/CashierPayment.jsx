import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack, Text } from '@fluentui/react';

const CashierPayment = () => {
    const [paymentData, setPaymentData] = useState({
        patientId: '',
        amount: '',
    });

    const handleChange = (e, newValue) => {
        const { name } = e.target;
        setPaymentData({
            ...paymentData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logika pengiriman data ke backend
    };

    return (
        <div>
            <Text variant="xxLarge">Pembayaran</Text>
            <form onSubmit={handleSubmit}>
                <Stack tokens={{ childrenGap: 15 }}>
                    <TextField label="ID Pasien" name="patientId" value={paymentData.patientId} onChange={handleChange} />
                    <TextField label="Jumlah Pembayaran" name="amount" value={paymentData.amount} onChange={handleChange} type="number" />
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </Stack>
            </form>
        </div>
    );
};

export default CashierPayment;
