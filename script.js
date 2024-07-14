const degreeField = document.getElementById('degree');
const tempField = document.getElementById('temp-field');
const convertBtn = document.getElementById('convert-btn');
const celsiusValue = document.getElementById('celsius');

convertBtn.addEventListener('click', () => {
  const degreeValue = parseFloat(degreeField.value);
  const tempType = tempField.value;

  if (tempType === 'Fahrenheit') {
    const celsius = (degreeValue - 32) * 5/9;
    celsiusValue.textContent = celsius.toFixed(2) + '°C';
  } else if (tempType === 'Kelvin') {
    const celsius = degreeValue - 273.15;
    celsiusValue.textContent = celsius.toFixed(2) + '°C';
  }
});