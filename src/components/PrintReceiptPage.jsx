import * as React from 'react';
import { Stack, PrimaryButton, MessageBar, MessageBarType } from '@fluentui/react';

const PrintReceiptPage = ({ paymentDetails }) => {
    const [errorMessage, setErrorMessage] = React.useState('');

    const handlePrint = () => {
        // Logic untuk mencetak bukti pembayaran
        if (!paymentDetails || !paymentDetails.patientName || !paymentDetails.totalPayment || !paymentDetails.paymentReceived) {
            setErrorMessage('Data pembayaran tidak lengkap.');
        } else {
            setErrorMessage('');
            // Logic untuk mencetak bukti pembayaran (biasanya menggunakan library atau API cetak)
            console.log('Cetak bukti pembayaran:', paymentDetails);
        }
    };

    return (
        <Stack tokens={{ childrenGap: 20 }} styles={{ root: { width: '100%', maxWidth: 600, margin: 'auto' } }}>
            <h1>Cetak Bukti Pembayaran</h1>

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
                <p>Terima kasih atas pembayaran yang telah Anda lakukan. Berikut adalah rincian pembayaran:</p>

                <p><strong>Nama Pasien:</strong> Rebekah</p>
                <p><strong>Total Pembayaran:</strong> IDR 430000</p>
                <p><strong>Pembayaran yang Diterima:</strong> IDR 500000</p>
                <p><strong>Kembalian:</strong> IDR 70000</p>
            </Stack>

            <PrimaryButton
                text="Cetak Bukti Pembayaran"
                onClick={handlePrint}
            />
        </Stack>
    );
};

export default PrintReceiptPage;
