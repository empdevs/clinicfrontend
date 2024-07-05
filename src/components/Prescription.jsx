import React, { useState } from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';

const Prescription = () => {
    const [patientName, setPatientName] = useState('');
    const [prescription, setPrescription] = useState('');

    const handlePrescribe = () => {
        const prescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];
        const newPrescription = { patientName, prescription };
        localStorage.setItem('prescriptions', JSON.stringify([...prescriptions, newPrescription]));
        setPatientName('');
        setPrescription('');
        alert('Prescription saved!');
    };

    return (
        <div>
            <h2>Prescription</h2>
            <TextField label="Patient Name" value={patientName} onChange={e => setPatientName(e.target.value)} />
            <TextField label="Prescription" value={prescription} onChange={e => setPrescription(e.target.value)} />
            <PrimaryButton text="Save" onClick={handlePrescribe} />
        </div>
    );
};

export default Prescription;
