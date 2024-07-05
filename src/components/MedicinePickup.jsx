import React, { useState } from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';

const MedicinePickup = () => {
    const [patientName, setPatientName] = useState('');
    const [medicine, setMedicine] = useState('');

    const handlePickup = () => {
        const pickups = JSON.parse(localStorage.getItem('pickups')) || [];
        const newPickup = { patientName, medicine };
        localStorage.setItem('pickups', JSON.stringify([...pickups, newPickup]));
        setPatientName('');
        setMedicine('');
        alert('Medicine picked up!');
    };

    return (
        <div>
            <h2>Medicine Pickup</h2>
            <TextField label="Patient Name" value={patientName} onChange={e => setPatientName(e.target.value)} />
            <TextField label="Medicine" value={medicine} onChange={e => setMedicine(e.target.value)} />
            <PrimaryButton text="Pickup Medicine" onClick={handlePickup} />
        </div>
    );
};

export default MedicinePickup;
