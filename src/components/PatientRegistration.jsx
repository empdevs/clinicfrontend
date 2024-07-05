import React, { useState } from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';

const PatientRegistration = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleRegister = () => {
        const patients = JSON.parse(localStorage.getItem('patients')) || [];
        const newPatient = { name, age };
        localStorage.setItem('patients', JSON.stringify([...patients, newPatient]));
        setName('');
        setAge('');
        alert('Patient registered successfully!');
    };

    return (
        <div>
            <h2>Patient Registration</h2>
            <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
            <TextField label="Age" value={age} onChange={e => setAge(e.target.value)} />
            <PrimaryButton text="Register" onClick={handleRegister} />
        </div>
    );
};

export default PatientRegistration;
