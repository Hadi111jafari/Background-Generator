function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let colorCode = '#';

  for (let i = 0; i < 6; i++) {
    colorCode += letters[Math.round(Math.random() * 16)];
  }
  return colorCode;
}

function updateColorDisplay(color) {
  document.getElementById('color-box').style.backgroundColor = color;
  document.getElementById('color-code').textContent = color;
}

document.getElementById('generate-btn').addEventListener('click', () => {
  let randomColor = generateRandomColor();
  updateColorDisplay(randomColor);
});

document.getElementById('set-custom-color').addEventListener('click', () => {
  const customColor = document.getElementById('custom-color').value;
  updateColorDisplay(customColor);
});

updateColorDisplay('#FFFFFFF');
