import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack, Text } from '@fluentui/react';

const PharmacistInput = () => {
    const [prescriptionData, setPrescriptionData] = useState({
        prescriptionId: '',
        medicine: '',
    });

    const handleChange = (e, newValue) => {
        const { name } = e.target;
        setPrescriptionData({
            ...prescriptionData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logika pengiriman data ke backend
    };

    return (
        <div>
            <Text variant="xxLarge">Input Resep</Text>
            <form onSubmit={handleSubmit}>
                <Stack tokens={{ childrenGap: 15 }}>
                    <TextField label="ID Resep" name="prescriptionId" value={prescriptionData.prescriptionId} onChange={handleChange} />
                    <TextField label="Nama Obat" name="medicine" value={prescriptionData.medicine} onChange={handleChange} />
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </Stack>
            </form>
        </div>
    );
};

export default PharmacistInput;
