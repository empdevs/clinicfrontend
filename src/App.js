import React from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import PatientRegistration from './components/PatientRegistration';
import PatientExamination from './components/PatientExamination';
import Prescription from './components/Prescription';
import Payment from './components/Payment';
import MedicinePickup from './components/MedicinePickup';
import Report from './components/Report';

initializeIcons();

function App() {
  return (
    <div>
      <h1>Clinic and Medical Records System</h1>
      <PatientRegistration />
      <PatientExamination />
      <Prescription />
      <Payment />
      <MedicinePickup />
      <Report />
    </div>
  );
}

export default App;
