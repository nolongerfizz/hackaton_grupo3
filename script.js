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


// Andrea
const images1 = [
    "./assets/shoes/New Balance Fresh FoamX 1080 v13/New Balance Fresh FoamX 1080 v13.png",
    "./assets/shoes/New Balance Fresh FoamX 1080 v13/New Balance Fresh FoamX 1080 v13-2.png",
    "./assets/shoes/New Balance Fresh FoamX 1080 v13/New Balance Fresh FoamX 1080 v13-3.png"
  ];
  let currentIndex1 = 0;
 
 
  function changeImage(imgId) {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    document.getElementById(imgId).src = images1[currentIndex1];
  }
 
 
 
 
  const images2= [
    "./assets/shoes/Nike Pegasus 40/Nike Pegasus 40-1.png",
    "./assets/shoes/Nike Pegasus 40/Nike Pegasus 40-2.png",
    "./assets/shoes/Nike Pegasus 40/Nike Pegasus 40-3.png",
    "./assets/shoes/Nike Pegasus 40/Nike Pegasus 40-4.png",
  ];
  let currentIndex2 = 0;
 
 
  function changeImage2(imgId2) {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    document.getElementById(imgId2).src = images2[currentIndex2];
  }
 
 
 
 
  const images3 = [
    "./assets/shoes/Nike ZoomX Invincible Run Flyknit/Nike ZoomX Invincible Run Flyknit-1.png",
    "./assets/shoes/Nike ZoomX Invincible Run Flyknit/Nike ZoomX Invincible Run Flyknit-2.png",
    "./assets/shoes/Nike ZoomX Invincible Run Flyknit/Nike ZoomX Invincible Run Flyknit-3.png",
    "./assets/shoes/Nike ZoomX Invincible Run Flyknit/Nike ZoomX Invincible Run Flyknit.png",
   
  ];
 
 
  let currentIndex3 = 0;
 
 
  function changeImage3(imgId3) {
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    document.getElementById(imgId3).src = images3[currentIndex3];
  }
 
 
  const images4 = [
    "./assets/shoes/Adidas Ultraboost 22/Adidas Ultraboost 22-1.png",
    "./assets/shoes/Adidas Ultraboost 22/Adidas Ultraboost 22-2.png",
    "./assets/shoes/Adidas Ultraboost 22/Adidas Ultraboost 22-3.png",
    "./assets/shoes/Adidas Ultraboost 22/Adidas Ultraboost 22.png",
   
  ];
 
 
  let currentIndex4 = 0;
 
 
  function changeImage4(imgId4) {
    currentIndex4 = (currentIndex4 + 1) % images4.length;
    document.getElementById(imgId4).src = images4[currentIndex4];
  }
 
 
  const images5 = [
    "./assets/shoes/Saucony Endorphin Speed 3/Saucony Endorphin Speed 3.png",
    "./assets/shoes/Saucony Endorphin Speed 3/Saucony Endorphin Speed 3-1.png",
    "./assets/shoes/Saucony Endorphin Speed 3/Saucony Endorphin Speed 3-2.png",
    "./assets/shoes/Saucony Endorphin Speed 3/Saucony Endorphin Speed 3-3.png",
   
  ];
 
 
  let currentIndex5 = 0;
 
 
  function changeImage5(imgId5) {
    currentIndex5 = (currentIndex5 + 1) % images5.length;
    document.getElementById(imgId5).src = images5[currentIndex5];
  }
 
 
  const images6 = [
    "./assets/shoes/Asics Gel-Kayano 29/Asics Gel-Kayano 29.png",
    "./assets/shoes/Asics Gel-Kayano 29/Asics Gel-Kayano 29-1.png",
    "./assets/shoes/Asics Gel-Kayano 29/Asics Gel-Kayano 29-2.png",
    "./assets/shoes/Asics Gel-Kayano 29/Asics Gel-Kayano 29-3.png",
    "./assets/shoes/Asics Gel-Kayano 29/Asics Gel-Kayano 29-4.png",
   
  ];
 
 
  let currentIndex6 = 0;
 
 
  function changeImage6(imgId6) {
    currentIndex6 = (currentIndex6 + 1) % images6.length;
    document.getElementById(imgId6).src = images6[currentIndex6];
  }
 
 
  const images7 = [
    "./assets/shoes/Nike Air Force 1/Nike Air Force 1-1.png",
    "./assets/shoes/Nike Air Force 1/Nike Air Force 1-2.png",
    "./assets/shoes/Nike Air Force 1/Nike Air Force 1-3.png",
    "./assets/shoes/Nike Air Force 1/Nike Air Force 1.png"
   
  ];
 
 
  let currentIndex7 = 0;
 
 
  function changeImage7(imgId7) {
    currentIndex7 = (currentIndex7 + 1) % images7.length;
    document.getElementById(imgId7).src = images7[currentIndex7];
  }
 
 
  const images8 = [
    "./assets/shoes/Adidas Samba OG/Adidas Samba OG.png",
    "./assets/shoes/Adidas Samba OG/Adidas Samba OG-1.png",
    "./assets/shoes/Adidas Samba OG/Adidas Samba OG-2.png",
    "./assets/shoes/Adidas Samba OG/Adidas Samba OG-3.png"
   
  ];
 
 
  let currentIndex8= 0;
 
 
  function changeImage8(imgId8) {
    currentIndex7 = (currentIndex8 + 1) % images8.length;
    document.getElementById(imgId8).src = images8[currentIndex8];
  }
 
 
  const images9 = [
    "./assets/shoes/Puma Suede Classic/Puma Suede Classic-1.png",
    "./assets/shoes/Puma Suede Classic/Puma Suede Classic-2.png",
    "./assets/shoes/Puma Suede Classic/Puma Suede Classic-3.png",
    "./assets/shoes/Puma Suede Classic/Puma Suede Classic-4.png",
  ];
 
 
  let currentIndex9= 0;
 
 
  function changeImage9(imgId9) {
    currentIndex9 = (currentIndex9 + 1) % images9.length;
    document.getElementById(imgId9).src = images9[currentIndex9];
  }
  const images10 = [
    "./assets/shoes/New Balance 990v5 /New Balance 990v5 .png",
    "./assets/shoes/New Balance 990v5 /New Balance 990v5-1.png",
    "./assets/shoes/New Balance 990v5 /New Balance 990v5-2.png",
    "./assets/shoes/New Balance 990v5 /New Balance 990v5-3.png",
  ];
 
 
  let currentIndex10= 0;
 
 
  function changeImage10(imgId10) {
    currentIndex10 = (currentIndex10 + 1) % images10.length;
    document.getElementById(imgId10).src = images10[currentIndex10];
  }
 
 
  const images11 = [
    "./assets/shoes/Nike Dri-FIT T-Shirt/Nike Dri-FIT T-Shirt-1.png",
    "./assets/shoes/Nike Dri-FIT T-Shirt/Nike Dri-FIT T-Shirt-2.png",
    "./assets/shoes/Nike Dri-FIT T-Shirt/Nike Dri-FIT T-Shirt-3.png",
    "./assets/shoes/Nike Dri-FIT T-Shirt/Nike Dri-FIT T-Shirt.png",
   
  ];
 
 
  let currentIndex11= 0;
 
 
  function changeImage11(imgId11) {
    currentIndex11 = (currentIndex11 + 1) % images11.length;
    document.getElementById(imgId11).src = images11[currentIndex11];
  }
 
 
  const images12 = [
    "./assets/shoes/Nike Windrunner Jacket/Nike Windrunner Jacket-1.png",
    "./assets/shoes/Nike Windrunner Jacket/Nike Windrunner Jacket-2.png",
    "./assets/shoes/Nike Windrunner Jacket/Nike Windrunner Jacket-3.png",
  ];
 
 
  let currentIndex12= 0;
 
 
  function changeImage12(imgId12) {
    currentIndex12 = (currentIndex12 + 1) % images12.length;
    document.getElementById(imgId12).src = images12[currentIndex12];
  }
 
 
  const images13 = [
    "./assets/shoes/Adidas Predator Gloves/Adidas Predator Gloves-1.png",
    "./assets/shoes/Adidas Predator Gloves/Adidas Predator Gloves.png",
    "./assets/shoes/Adidas Predator Gloves/Adidas Predator Gloves-2.png",
    "./assets/shoes/Adidas Predator Gloves/Adidas Predator Gloves-3.png",
  
  ];
 
 
  let currentIndex13= 0;
 
 
  function changeImage13(imgId13) {
    currentIndex13 = (currentIndex13 + 1) % images13.length;
    document.getElementById(imgId13).src = images13[currentIndex13];
  }
 