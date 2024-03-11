// Click Easter Egg
const oddElement = document.querySelector('.odd-element');
oddElement.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Keyboard Easter Egg
let inputBuffer = '';
const secretCode = '1337';

window.addEventListener('keyup', (e) => {
  inputBuffer += e.key;
  if (inputBuffer.includes(secretCode)) {
    showModal();
    inputBuffer = '';
  }
});

// Generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Modal functions
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];

function showModal() {
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
