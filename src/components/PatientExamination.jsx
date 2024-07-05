import React, { useState } from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';

const PatientExamination = () => {
    const [patientName, setPatientName] = useState('');
    const [examinationResult, setExaminationResult] = useState('');

    const handleExamine = () => {
        const examinations = JSON.parse(localStorage.getItem('examinations')) || [];
        const newExamination = { patientName, examinationResult };
        localStorage.setItem('examinations', JSON.stringify([...examinations, newExamination]));
        setPatientName('');
        setExaminationResult('');
        alert('Examination result saved!');
    };

    return (
        <div>
            <h2>Patient Examination</h2>
            <TextField label="Patient Name" value={patientName} onChange={e => setPatientName(e.target.value)} />
            <TextField label="Examination Result" value={examinationResult} onChange={e => setExaminationResult(e.target.value)} />
            <PrimaryButton text="Save" onClick={handleExamine} />
        </div>
    );
};

export default PatientExamination;
