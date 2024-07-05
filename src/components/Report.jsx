import React from 'react';
import { PrimaryButton } from '@fluentui/react';

const Report = () => {
    const handleViewReport = () => {
        const patients = JSON.parse(localStorage.getItem('patients')) || [];
        const examinations = JSON.parse(localStorage.getItem('examinations')) || [];
        const prescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];
        const payments = JSON.parse(localStorage.getItem('payments')) || [];
        const pickups = JSON.parse(localStorage.getItem('pickups')) || [];

        console.log('Patients:', patients);
        console.log('Examinations:', examinations);
        console.log('Prescriptions:', prescriptions);
        console.log('Payments:', payments);
        console.log('Pickups:', pickups);

        alert('Reports logged to console!');
    };

    return (
        <div>
            <h2>Report</h2>
            <PrimaryButton text="View Report" onClick={handleViewReport} />
        </div>
    );
};

export default Report;
