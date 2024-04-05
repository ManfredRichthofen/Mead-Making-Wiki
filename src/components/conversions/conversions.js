import React, { useState, useEffect } from 'react';
import './conversions.css'; // Import CSS file

const conversions = {
  honey: {
    conversions: [
      { unit: 'gallon', weightPerUnit: 12 },
      { unit: 'cups', weightPerUnit: 0.75 },
    ]
  },
  fermaidO: {
    conversions: [{ unit: 'tsp', weightPerUnit: 2.48 }]
  },
  fermaidK: {
    conversions: [{ unit: 'tsp', weightPerUnit: 3.63 }]
  },
  goFerm: {
    conversions: [{ unit: 'tsp', weightPerUnit: 2.02 }]
  },
  dap: {
    conversions: [{ unit: 'tsp', weightPerUnit: 3.9 }]
  },
  potassiumSorbate: {
    conversions: [{ unit: 'tsp', weightPerUnit: 1.95 }]
  }
};

function Conversions() {
  const [substance, setSubstance] = useState('honey');
  const [volume, setVolume] = useState('');
  const [unit, setUnit] = useState('');
  const [result, setResult] = useState('');
  const defaultConversions = conversions[substance]?.conversions;

  useEffect(() => {
    const defaultUnit = defaultConversions ? defaultConversions[0].unit : '';
    setUnit(defaultUnit);
  }, [substance]);

  const convert = () => {
    const parsedVolume = parseFloat(volume);
    if (isNaN(parsedVolume)) {
      setResult("Please enter a valid volume.");
      return;
    }

    const selectedConversion = defaultConversions.find(conv => conv.unit === unit);
    if (!selectedConversion) {
      setResult("Please select a valid volume unit.");
      return;
    }

    const weight = parsedVolume * selectedConversion.weightPerUnit;
    setResult(`Weight: ${weight.toFixed(2)} ${substance === 'honey' ? 'pounds' : 'grams'}`);
  };

  return (
    <div className="conversions-container">
      <h1>Substance Conversions</h1>
      <div className="form">
        <label htmlFor="substance">Select Substance:</label>
        <select id="substance" value={substance} onChange={({ target }) => setSubstance(target.value)}>
          {Object.entries(conversions).map(([key]) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <label htmlFor="volume">Volume:</label>
        <input type="text" id="volume" value={volume} onChange={({ target }) => setVolume(target.value)} placeholder="Enter volume"/>
        <label htmlFor="unit">Unit:</label>
        <select id="unit" value={unit} onChange={({ target }) => setUnit(target.value)}>
          {defaultConversions && defaultConversions.map(({ unit }) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <button onClick={convert}>Convert</button>
      </div>
      <div id="result">{result}</div>
    </div>
  );
}

export default Conversions;
