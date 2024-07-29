import * as React from 'react';
import { Stack, PrimaryButton, DetailsList, DetailsListLayoutMode, SelectionMode } from '@fluentui/react';

const ReportPage = ({ reports }) => {
    const reportColumns = [
        { key: 'column1', name: 'No.', fieldName: 'id', minWidth: 50, maxWidth: 50, isResizable: true },
        { key: 'column2', name: 'Nama Laporan', fieldName: 'name', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column3', name: 'Deskripsi', fieldName: 'description', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Tanggal', fieldName: 'date', minWidth: 100, maxWidth: 150, isResizable: true },
    ];

    return (
        <Stack tokens={{ childrenGap: 20 }} styles={{ root: { width: '100%', maxWidth: 800, margin: 'auto' } }}>
            <h1>Laporan</h1>

            <Stack tokens={{ childrenGap: 10 }}>
                <DetailsList
                    items={reports ?? [
                        { id: 1, name: 'Laporan Pasien Harian', description: 'Rekapitulasi kunjungan harian pasien', date: '2024-07-06' },
                        { id: 2, name: 'Laporan Obat Bulanan', description: 'Penggunaan obat bulan ini', date: '2024-06-30' },
                        { id: 3, name: 'Laporan Pendapatan Tahunan', description: 'Laporan keuangan tahun ini', date: '2023-12-31' },
                        { id: 4, name: 'Laporan Pemeriksaan Kesehatan', description: 'Analisis hasil pemeriksaan kesehatan', date: '2024-06-30' },
                        { id: 5, name: 'Laporan Rekam Medis Mingguan', description: 'Rekapitulasi rekam medis minggu ini', date: '2024-07-05' },
                    ]}
                    columns={reportColumns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    selectionMode={SelectionMode.none}
                />
            </Stack>
        </Stack>
    );
};

export default ReportPage;
