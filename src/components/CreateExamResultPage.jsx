import * as React from 'react';
import { Stack, PrimaryButton, TextField, MessageBar, MessageBarType } from '@fluentui/react';

const CreateExamResultPage = () => {
    const [patientName, setPatientName] = React.useState('');
    const [examResult, setExamResult] = React.useState('');
    const [isSaving, setIsSaving] = React.useState(false);
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleSubmit = () => {
        // Validasi form sebelum menyimpan
        if (!patientName.trim() || !examResult.trim()) {
            setErrorMessage('Nama pasien dan hasil pemeriksaan harus diisi.');
            return;
        }

        // Simulasi proses menyimpan data
        setIsSaving(true);
        setTimeout(() => {
            // Setelah beberapa detik, simulasi berhasil disimpan
            setIsSaving(false);
            setShowConfirmation(true);
            setPatientName('');
            setExamResult('');
        }, 2000);
    };

    const handleDismissError = () => {
        setErrorMessage('');
    };

    return (
        <Stack tokens={{ childrenGap: 20 }} styles={{ root: { width: '100%', maxWidth: 600, margin: 'auto' } }}>
            <h1>Buat Hasil Pemeriksaan</h1>

            {errorMessage && (
                <MessageBar
                    messageBarType={MessageBarType.error}
                    isMultiline={false}
                    onDismiss={handleDismissError}
                    dismissButtonAriaLabel="Close"
                    styles={{ root: { marginBottom: 10, width: '100%' } }}
                >
                    {errorMessage}
                </MessageBar>
            )}

            <TextField
                label="Nama Pasien"
                value={patientName}
                onChange={(event, newValue) => setPatientName(newValue)}
                required
                styles={{ root: { width: '100%', } }}
            />

            <TextField
                label="Hasil Pemeriksaan"
                multiline
                rows={4}
                value={examResult}
                onChange={(event, newValue) => setExamResult(newValue)}
                required
                styles={{ root: { width: '100%', } }}
            />

            <PrimaryButton
                text={isSaving ? 'Menyimpan...' : 'Simpan Hasil Pemeriksaan'}
                onClick={handleSubmit}
                styles={{ root: { width: '100%', alignSelf: 'center' } }}
            />

            {showConfirmation && (
                <MessageBar
                    messageBarType={MessageBarType.success}
                    isMultiline={false}
                    onDismiss={() => setShowConfirmation(false)}
                    dismissButtonAriaLabel="Close"
                    styles={{ root: { marginTop: 15, width: '100%' } }}
                >
                    Hasil pemeriksaan untuk {patientName} berhasil disimpan.
                </MessageBar>
            )}
        </Stack>
    );
};

export default CreateExamResultPage;
