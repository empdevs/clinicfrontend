import React from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import DoctorDashboard from './components/DoctorDashboard';
import PatientRegistration from './components/PatientRegistration';
import CreateExamResultPage from './components/CreateExamResultPage';
import CreatePrescriptionPage from './components/CreatePrescriptionPage';
import PaymentPage from './components/PaymentPage';
import PrintReceiptPage from './components/PrintReceiptPage';
import ReportPage from './components/ReportPage';

initializeIcons();

const App = () => {
  return (<div>
    <PatientRegistration />
    <DoctorDashboard />
    <CreateExamResultPage />
    <CreatePrescriptionPage />
    <PaymentPage />
    <PrintReceiptPage
      patientName={"Rebekah"}
      totalPayment={"430000"}
      paymentReceived={"500000"}
      changeAmount={"70000"}
    />
    <ReportPage />
  </div>);
};

export default App;
