
const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusInput = document.getElementById('celsius');

fahrenheitInput.addEventListener('input', updateBackground);
celsiusInput.addEventListener('input', updateBackground);


function updateBackground() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const celsiusValue = parseFloat(celsiusInput.value);

  if (!isNaN(fahrenheitValue)) {

    const celsius =Math.floor( (fahrenheitValue - 32) * 5 / 9);
    updateBackgroundColor(celsius);
    celsiusInput.value = celsius;
  } else if (!isNaN(celsiusValue)) {
    
    const fahrenheit = (celsiusValue * 9 / 5) + 32;
    updateBackgroundColor(celsiusValue);
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
}

function updateBackgroundColor(celsius) {
  const tempBGcolor = document.getElementById('tempBGcolor');

  if (celsius < -50) {
    tempBGcolor.style.backgroundColor = '#372a3d';
  } else if (celsius > -50 && celsius <= -10) {
    tempBGcolor.style.backgroundColor = '#562d58';
  } else if (celsius > -10 && celsius <= 0) {
    tempBGcolor.style.backgroundColor = '#313b7b';
  } else if (celsius > 0 && celsius <= 10) {
    tempBGcolor.style.backgroundColor = '#134b9e';
  } else if (celsius > 10 && celsius <= 20) {
    tempBGcolor.style.backgroundColor = '#305adb';
  } else if (celsius > 20 && celsius <= 30) {
    tempBGcolor.style.backgroundColor = '#0081d3';
  } else if (celsius > 30 && celsius <= 40) {
    tempBGcolor.style.backgroundColor = '#00a39a';
  } else if (celsius > 40 && celsius <= 50) {
    tempBGcolor.style.backgroundColor = '#00bb34';
  } else if (celsius > 50 && celsius <= 60) {
    tempBGcolor.style.backgroundColor = '#7ac600';
  } else if (celsius > 60 && celsius <= 70) {
    tempBGcolor.style.backgroundColor = '#d7c000';
  } else if (celsius > 70 && celsius <= 80) {
    tempBGcolor.style.backgroundColor = '#ef7600';
  } else if (celsius > 80 && celsius <= 90) {
    tempBGcolor.style.backgroundColor = '#cd3400';
  } else if (celsius > 90 && celsius <= 100) {
    tempBGcolor.style.backgroundColor = '#9f0d14';
  } else if (celsius > 100 && celsius <= 150) {
    tempBGcolor.style.backgroundColor = '#581100';
  } else if (celsius > 150) {
    // Handle the case when celsius > 150
    tempBGcolor.style.backgroundColor = '#581300';
  }
}
