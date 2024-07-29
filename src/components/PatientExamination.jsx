import React, { useState } from 'react';
import { Stack, PrimaryButton, TextField, DetailsList, DetailsListLayoutMode, SelectionMode } from '@fluentui/react';


const PatientExamination = () => {

    const fakeData = [
        { id: 3, name: 'Michael Brown', medicalRecordNumber: 'MRN003', age: 42, diagnosis: 'Allergy' },
        { id: 4, name: 'Emily Johnson', medicalRecordNumber: 'MRN004', age: 50, diagnosis: 'Back Pain' },
        { id: 5, name: 'David Lee', medicalRecordNumber: 'MRN005', age: 30, diagnosis: 'Stomachache' },
        { id: 6, name: 'Sarah Williams', medicalRecordNumber: 'MRN006', age: 25, diagnosis: 'Sprained Ankle' },
        { id: 7, name: 'Robert Taylor', medicalRecordNumber: 'MRN007', age: 38, diagnosis: 'High Blood Pressure' },
        { id: 8, name: 'Jessica Martinez', medicalRecordNumber: 'MRN008', age: 45, diagnosis: 'Diabetes' },
        { id: 9, name: 'Christopher Garcia', medicalRecordNumber: 'MRN009', age: 33, diagnosis: 'Influenza' },
        { id: 10, name: 'Amanda Moore', medicalRecordNumber: 'MRN010', age: 29, diagnosis: 'Migraine' }
    ];
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState(fakeData);
    const [selectedPatient, setSelectedPatient] = React.useState(null);

    const handleSearch = () => {
        // Contoh implementasi pencarian data pasien
        // Disini kamu bisa menggunakan fetch ke backend atau data lokal
        // Misalnya:
        // fetch(`api/patients?query=${searchQuery}`)
        //   .then(response => response.json())
        //   .then(data => setSearchResults(data))
        //   .catch(error => console.error('Error searching patients:', error));
        // const mockData = [
        //     { id: 1, name: 'John Doe', medicalRecordNumber: 'MRN001', age: 35, diagnosis: 'Fever' },
        //     { id: 2, name: 'Jane Smith', medicalRecordNumber: 'MRN002', age: 28, diagnosis: 'Headache' }
        // ];
        const filteredResults = fakeData.filter(patient =>
            patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            patient.medicalRecordNumber.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    const columns = [
        { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Medical Record Number', fieldName: 'medicalRecordNumber', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Age', fieldName: 'age', minWidth: 50, maxWidth: 100, isResizable: true },
        { key: 'column4', name: 'Diagnosis', fieldName: 'diagnosis', minWidth: 100, maxWidth: 300, isResizable: true }
    ];



    return (
        <Stack tokens={{ childrenGap: 20 }}>
            <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
                <div>
                    <h1>Dashboard Dokter</h1>
                    <h1>Cek Data Pasien dan Rekam Medis</h1>
                </div>
                <Stack horizontal tokens={{ childrenGap: 10 }}>
                    <TextField
                        placeholder="Nama atau Nomor Rekam Medis"
                        value={searchQuery}
                        onChange={(event, newValue) => setSearchQuery(newValue)}
                    />
                    <PrimaryButton text="Cari" onClick={handleSearch} />
                </Stack>
            </Stack>

            <Stack tokens={{ childrenGap: 10 }}>
                <DetailsList
                    items={searchResults}
                    columns={columns}
                    selectionMode={SelectionMode.single}
                    onActiveItemChanged={(item) => setSelectedPatient(item)}
                />
            </Stack>

            {selectedPatient && (
                <Stack>
                    <h2>Detail Pasien</h2>
                    <div>
                        <p><strong>Nama:</strong> {selectedPatient.name}</p>
                        <p><strong>Nomor Rekam Medis:</strong> {selectedPatient.medicalRecordNumber}</p>
                        <p><strong>Umur:</strong> {selectedPatient.age}</p>
                        <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
                        {/* Tambahkan informasi detail lainnya jika diperlukan */}
                    </div>
                </Stack>
            )}
        </Stack>
    );
};

export default PatientExamination;
