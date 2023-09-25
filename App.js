 import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';
import DiagnosisResult from './components/DiagnosisResult';

function App() {
  const [diagnosisResult, setDiagnosisResult] = useState(null);

  const handleDiagnosis = (imageData) => {
    setDiagnosisResult('Dermatological condition: Eczema');
  };

  return (
    <div className="App">
      <h1>Dermatology AI Tool</h1>
      <ImageUploader onDiagnose={handleDiagnosis} />
      {diagnosisResult && <DiagnosisResult result={diagnosisResult} />}
    </div>
  );
}

export default App;


