import * as React from 'react';
import { Stack, PrimaryButton, TextField, MessageBar, MessageBarType, DetailsList, DetailsListLayoutMode, SelectionMode } from '@fluentui/react';

const PaymentPage = () => {
    const [patientName, setPatientName] = React.useState('');
    const [examinationType, setExaminationType] = React.useState('');
    const [examinationCost, setExaminationCost] = React.useState(0);
    const [medicineName, setMedicineName] = React.useState('');
    const [medicineDosage, setMedicineDosage] = React.useState('');
    const [medicineCost, setMedicineCost] = React.useState(0);
    const [examinations, setExaminations] = React.useState([]);
    const [prescriptions, setPrescriptions] = React.useState([]);
    const [totalExaminationFee, setTotalExaminationFee] = React.useState(0);
    const [totalPrescriptionFee, setTotalPrescriptionFee] = React.useState(0);
    const [totalPayment, setTotalPayment] = React.useState(0);
    const [paymentReceived, setPaymentReceived] = React.useState(0);
    const [changeAmount, setChangeAmount] = React.useState(0);
    const [errorMessage, setErrorMessage] = React.useState('');

    const examinationColumns = [
        { key: 'column1', name: 'No.', fieldName: 'id', minWidth: 50, maxWidth: 50, isResizable: true },
        { key: 'column2', name: 'Jenis Pemeriksaan', fieldName: 'examinationType', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column3', name: 'Biaya', fieldName: 'fee', minWidth: 100, maxWidth: 150, isResizable: true },
    ];

    const prescriptionColumns = [
        { key: 'column1', name: 'No.', fieldName: 'id', minWidth: 50, maxWidth: 50, isResizable: true },
        { key: 'column2', name: 'Nama Obat', fieldName: 'medicineName', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column3', name: 'Dosis', fieldName: 'dosage', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column4', name: 'Biaya', fieldName: 'fee', minWidth: 100, maxWidth: 150, isResizable: true },
    ];

    const handleAddExamination = () => {
        if (examinationType && examinationCost > 0) {
            const newExamination = {
                id: examinations.length + 1,
                examinationType: examinationType,
                fee: examinationCost,
            };
            setExaminations([...examinations, newExamination]);
            setExaminationType('');
            setExaminationCost(0);
        }
    };

    const handleAddPrescription = () => {
        if (medicineName && medicineDosage && medicineCost > 0) {
            const newPrescription = {
                id: prescriptions.length + 1,
                medicineName: medicineName,
                dosage: medicineDosage,
                fee: medicineCost,
            };
            setPrescriptions([...prescriptions, newPrescription]);
            setMedicineName('');
            setMedicineDosage('');
            setMedicineCost(0);
        }
    };

    const handleRemoveExamination = (item) => {
        const updatedExaminations = examinations.filter(exam => exam.id !== item.id);
        setExaminations(updatedExaminations);
    };

    const handleRemovePrescription = (item) => {
        const updatedPrescriptions = prescriptions.filter(presc => presc.id !== item.id);
        setPrescriptions(updatedPrescriptions);
    };

    const handleCalculateTotal = () => {
        let totalExamination = 0;
        examinations.forEach(exam => {
            totalExamination += exam.fee;
        });
        setTotalExaminationFee(totalExamination);

        let totalPrescription = 0;
        prescriptions.forEach(prescription => {
            totalPrescription += prescription.fee;
        });
        setTotalPrescriptionFee(totalPrescription);

        const total = totalExamination + totalPrescription;
        setTotalPayment(total);

        if (paymentReceived < total) {
            setErrorMessage('Jumlah pembayaran tidak mencukupi.');
        } else {
            setErrorMessage('');
            const change = paymentReceived - total;
            setChangeAmount(change);
        }
    };

    const handlePaymentReceivedChange = (event, newValue) => {
        const receivedAmount = parseFloat(newValue);
        setPaymentReceived(receivedAmount || 0);
    };

    return (
        <Stack tokens={{ childrenGap: 20 }} styles={{ root: { width: '100%', maxWidth: 800, margin: 'auto' } }}>
            <h1>Pembayaran Jasa Pemeriksaan dan Resep</h1>

            {errorMessage && (
                <MessageBar
                    messageBarType={MessageBarType.error}
                    isMultiline={false}
                    dismissButtonAriaLabel="Close"
                    onDismiss={() => setErrorMessage('')}
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

                <Stack tokens={{ childrenGap: 10 }} horizontal verticalAlign='end'>
                    <TextField
                        label="Jenis Pemeriksaan"
                        value={examinationType}
                        onChange={(event, newValue) => setExaminationType(newValue)}
                        required
                    />
                    <TextField
                        label="Biaya (IDR)"
                        type="number"
                        value={examinationCost}
                        onChange={(event, newValue) => setExaminationCost(parseFloat(newValue) || 0)}
                        required
                    />
                    <PrimaryButton
                        text="Tambah Pemeriksaan"
                        onClick={handleAddExamination}
                    />
                </Stack>

                <DetailsList
                    items={examinations}
                    columns={examinationColumns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    selectionMode={SelectionMode.none}
                    onItemInvoked={handleRemoveExamination}
                />

                <Stack tokens={{ childrenGap: 10 }} horizontal verticalAlign='end'>
                    <TextField
                        label="Nama Obat"
                        value={medicineName}
                        onChange={(event, newValue) => setMedicineName(newValue)}
                        required
                    />
                    <TextField
                        label="Dosis"
                        value={medicineDosage}
                        onChange={(event, newValue) => setMedicineDosage(newValue)}
                        required
                    />
                    <TextField
                        label="Biaya (IDR)"
                        type="number"
                        value={medicineCost}
                        onChange={(event, newValue) => setMedicineCost(parseFloat(newValue) || 0)}
                        required
                    />
                    <PrimaryButton
                        text="Tambah Resep"
                        onClick={handleAddPrescription}
                    />
                </Stack>

                <DetailsList
                    items={prescriptions}
                    columns={prescriptionColumns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    selectionMode={SelectionMode.none}
                    onItemInvoked={handleRemovePrescription}
                />

                <TextField
                    label="Total Biaya Pemeriksaan"
                    value={totalExaminationFee}
                    readOnly
                />

                <TextField
                    label="Total Biaya Resep"
                    value={totalPrescriptionFee}
                    readOnly
                />

                <TextField
                    label="Total Pembayaran"
                    value={totalPayment}
                    readOnly
                />

                <TextField
                    label="Jumlah Pembayaran yang Diterima"
                    value={paymentReceived}
                    onChange={handlePaymentReceivedChange}
                    required
                />

                <TextField
                    label="Kembalian"
                    value={changeAmount}
                    readOnly
                />
            </Stack>

            <PrimaryButton
                text="Hitung Total"
                onClick={handleCalculateTotal}
            />
        </Stack>
    );
};

export default PaymentPage;
