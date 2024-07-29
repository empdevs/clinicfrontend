import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack, Text, ThemeProvider, initializeIcons } from '@fluentui/react';
import { getTheme, mergeStyleSets } from '@fluentui/react/lib/Styling';

initializeIcons();

const theme = getTheme();
const styles = mergeStyleSets({
    container: {
        maxWidth: 400,
        margin: '0 auto',
        padding: 20,
        boxShadow: theme.effects.elevation16,
        backgroundColor: theme.palette.white,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    form: {
        width: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: theme.palette.themePrimary,
        color: theme.palette.white,
        selectors: {
            ':hover': {
                backgroundColor: theme.palette.themeDarkAlt,
            },
        },
    },
});

const PatientRegistration = () => {
    const [patientData, setPatientData] = useState({
        name: '',
        age: '',
        address: '',
    });

    const handleChange = (e, newValue) => {
        const { name } = e.target;
        setPatientData({
            ...patientData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logika pengiriman data ke backend
    };

    return (
        <ThemeProvider>
            <div className={styles.container}>
                <Text variant="xxLarge" className={styles.header}>
                    Pendaftaran Pasien
                </Text>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Stack tokens={{ childrenGap: 15 }}>
                        <TextField
                            label="Nama Pasien"
                            name="name"
                            value={patientData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Usia Pasien"
                            name="age"
                            value={patientData.age}
                            onChange={handleChange}
                            type="number"
                            required
                        />
                        <TextField
                            label="Alamat Pasien"
                            name="address"
                            value={patientData.address}
                            onChange={handleChange}
                            multiline
                            required
                        />
                        <PrimaryButton type="submit" className={styles.button}>
                            Daftar
                        </PrimaryButton>
                    </Stack>
                </form>
            </div>
        </ThemeProvider>
    );
};

export default PatientRegistration;
