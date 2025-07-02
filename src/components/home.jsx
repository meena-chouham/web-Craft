import React, { useState } from 'react';
import './home.css'
export const Home = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w) {
      setResult("Please enter valid height and weight.");
      return;
    }

    const bmi = w / (h * h);
    let category = '';

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    setResult(`Your BMI is ${bmi.toFixed(2)} (${category})`);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <label>
        Height (cm): 
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
<br />
      <label>
        Weight (kg): 
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>

      <button onClick={calculateBMI}>Calculate BMI</button>
      <div
  id="result"
  className={
    result.includes("Underweight") ? "result-underweight" :
    result.includes("Normal") ? "result-normal" :
    result.includes("Overweight") ? "result-overweight" :
    result.includes("Obese") ? "result-obese" : ""
  }
>
  {result}
</div>

    </div>
  );
};
