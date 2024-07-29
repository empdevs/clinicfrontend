import * as React from 'react';
import { Stack, PrimaryButton, TextField, Dropdown, DetailsList, DetailsListLayoutMode, SelectionMode, MessageBar, MessageBarType } from '@fluentui/react';

const CreatePrescriptionPage = () => {
    const [patientName, setPatientName] = React.useState('');
    const [doctorName, setDoctorName] = React.useState('');
    const [medicineName, setMedicineName] = React.useState('');
    const [dosage, setDosage] = React.useState('');
    const [prescriptionList, setPrescriptionList] = React.useState([
        { medicineName: 'Paracetamol', dosage: '500 mg' },
        { medicineName: 'Ibuprofen', dosage: '400 mg' },
        { medicineName: 'Amoxicillin', dosage: '250 mg' },
        { medicineName: 'Cetirizine', dosage: '10 mg' },
        { medicineName: 'Loratadine', dosage: '5 mg' },
        { medicineName: 'Omeprazole', dosage: '20 mg' },
        { medicineName: 'Aspirin', dosage: '81 mg' },
        { medicineName: 'Simvastatin', dosage: '20 mg' },
        { medicineName: 'Metformin', dosage: '500 mg' },
        { medicineName: 'Prednisone', dosage: '5 mg' }
    ]);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [showConfirmation, setShowConfirmation] = React.useState(false);

    const handleAddMedicine = () => {
        // Validasi form sebelum menambahkan obat
        if (!medicineName.trim() || !dosage.trim()) {
            setErrorMessage('Nama obat dan dosis harus diisi.');
            return;
        }

        // Tambahkan obat ke daftar resep
        const newMedicine = {
            medicineName: medicineName,
            dosage: dosage
        };
        setPrescriptionList([...prescriptionList, newMedicine]);

        // Bersihkan form setelah ditambahkan
        setMedicineName('');
        setDosage('');
    };

    const handleDismissError = () => {
        setErrorMessage('');
    };

    const handleSavePrescription = () => {
        // Simulasi proses menyimpan data
        // Di sini bisa dilakukan POST request ke backend untuk menyimpan data resep
        // Misalnya:
        // fetch('api/prescriptions', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         patientName: patientName,
        //         doctorName: doctorName,
        //         prescriptionList: prescriptionList
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Prescription saved successfully:', data);
        //     setShowConfirmation(true);
        // })
        // .catch(error => console.error('Error saving prescription:', error));

        // Simulasi berhasil disimpan
        setShowConfirmation(true);
        setPatientName('');
        setDoctorName('');
        setPrescriptionList([]);
    };

    const columns = [
        { key: 'column1', name: 'Nama Obat', fieldName: 'medicineName', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Dosis', fieldName: 'dosage', minWidth: 100, maxWidth: 200, isResizable: true }
    ];

    return (
        <Stack tokens={{ childrenGap: 20 }}>
            <div>
                <h1>Membuat Resep</h1>
            </div>

            {errorMessage && (
                <MessageBar
                    messageBarType={MessageBarType.error}
                    isMultiline={false}
                    onDismiss={handleDismissError}
                    dismissButtonAriaLabel="Close"
                >
                    {errorMessage}
                </MessageBar>
            )}

            <Stack tokens={{ childrenGap: 10 }}>
                <TextField
                    label="Nama Pasien"
                    value={patientName}
                    onChange={(event, newValue) => setPatientName(newValue)}
                    required
                />
                <TextField
                    label="Nama Dokter"
                    value={doctorName}
                    onChange={(event, newValue) => setDoctorName(newValue)}
                    required
                />
            </Stack>

            <Stack horizontal tokens={{ childrenGap: 10 }} verticalAlign="end">
                <Dropdown
                    placeholder="Pilih Obat"
                    label="Nama Obat"
                    selectedKey={medicineName}
                    onChange={(event, option) => setMedicineName(option.key)}
                    options={[
                        { key: 'Paracetamol', text: 'Paracetamol' },
                        { key: 'Amoxicillin', text: 'Amoxicillin' },
                        { key: 'Omeprazole', text: 'Omeprazole' }
                    ]}
                    required
                />
                <TextField
                    label="Dosis"
                    value={dosage}
                    onChange={(event, newValue) => setDosage(newValue)}
                    required
                />
                <PrimaryButton text="Tambah Obat" onClick={handleAddMedicine} />
            </Stack>

            <DetailsList
                items={prescriptionList}
                columns={columns}
                selectionMode={SelectionMode.none}
                layoutMode={DetailsListLayoutMode.fixedColumns}
            />

            <PrimaryButton
                text="Simpan Resep"
                onClick={handleSavePrescription}
                disabled={!patientName || !doctorName || prescriptionList.length === 0}
            />

            {showConfirmation && (
                <MessageBar
                    messageBarType={MessageBarType.success}
                    isMultiline={false}
                    onDismiss={() => setShowConfirmation(false)}
                    dismissButtonAriaLabel="Close"
                >
                    Resep untuk {patientName} berhasil disimpan.
                </MessageBar>
            )}
        </Stack>
    );
};

export default CreatePrescriptionPage;
