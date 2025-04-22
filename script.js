// Logo Animation 
const logo = document.getElementById('logo');

// Set filters to apply
const filters = {
  orange: 'hue-rotate(30deg)',
  red: 'hue-rotate(0deg)',
  purple: 'hue-rotate(280deg)'
};

const logoColors = ['orange', 'red', 'purple'];
// Keep track of current color index
let logoIndex = 0;

setInterval(() => {
  const color = logoColors[logoIndex]; // Get current color
  logo.style.filter = filters[color];
  logoIndex = (logoIndex + 1) % logoColors.length;
}, 1000);


// ==== Footer Runner + Thunderbolt Animation ====
const frames = [
  `    ⚡
      🏃‍♂️`,
  `  ⚡
     🏃‍♂️ `,
  ` ⚡
    🏃‍♂️  `,
  `⚡
  🏃‍♂️   `,
];

let runnerIndex = 0;
const runner = document.getElementById('runner-animation');

function animateRunner() {
  runner.textContent = frames[runnerIndex];
  runnerIndex = (runnerIndex + 1) % frames.length;
}

setInterval(animateRunner, 300); // Run every 300ms
