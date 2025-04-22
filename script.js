const logo = document.getElementById('logo');
const filters = {
  orange: 'hue-rotate(30deg)',
  red: 'hue-rotate(0deg)',
  purple: 'hue-rotate(280deg)'
};

const colors = ['orange', 'red', 'purple'];
let current = 0;

setInterval(() => {
  const color = colors[current];
  logo.style.filter = filters[color];
  current = (current + 1) % colors.length;
}, 1000);