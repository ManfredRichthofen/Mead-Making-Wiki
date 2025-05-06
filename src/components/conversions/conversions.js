import React, { useState, useEffect } from 'react';

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
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-center mb-4">Substance Conversions</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Select Substance:</span>
          </label>
          <select 
            className="select select-bordered w-full mb-4" 
            value={substance} 
            onChange={({ target }) => setSubstance(target.value)}
          >
            {Object.entries(conversions).map(([key]) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>

          <label className="label">
            <span className="label-text">Volume:</span>
          </label>
          <input 
            type="text" 
            className="input input-bordered w-full mb-4" 
            value={volume} 
            onChange={({ target }) => setVolume(target.value)} 
            placeholder="Enter volume"
          />

          <label className="label">
            <span className="label-text">Unit:</span>
          </label>
          <select 
            className="select select-bordered w-full mb-4" 
            value={unit} 
            onChange={({ target }) => setUnit(target.value)}
          >
            {defaultConversions && defaultConversions.map(({ unit }) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>

          <button 
            className="btn btn-primary w-full mb-4" 
            onClick={convert}
          >
            Convert
          </button>

          <div className="alert">
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversions;
