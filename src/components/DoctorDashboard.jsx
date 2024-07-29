import React from 'react';
import PatientExamination from './PatientExamination';
import { Stack, Text } from '@fluentui/react';

const DoctorDashboard = () => {
    return (
        <Stack tokens={{ childrenGap: 20 }}>
          
            <PatientExamination />
            {/* Tambahkan komponen lainnya sesuai kebutuhan */}
        </Stack>
    );
};

export default DoctorDashboard;
