// script.js

// ==== Section Elements ====
const page1 = document.getElementById('page1'); // landing heart
const page2 = document.getElementById('page2'); // open GIF page
const page3 = document.getElementById('page3'); // love letter page

// GIF link in page2
const gifLink = document.getElementById('gifLink');

// Back buttons
const backBtn2 = document.getElementById('backButton2');
const backBtn3 = document.getElementById('backButton3');

// Heart button in landing page
const btn = document.getElementById('playfulBtn');

// Typewriter
const textEl = document.getElementById("text");
let msg = "I Love You So Much ❤️";
let i = 0;

// ==== Functions ====

// Typewriter for page2
function typeWriter() {
  if (i < msg.length) {
    textEl.innerHTML += msg.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Page 1: Heart is fixed in center and clickable → go to page2
btn.addEventListener('click', () => {
  page1.style.display = 'none';
  page2.style.display = 'flex';
  typeWriter();
});

// Click GIF → go to love letter page
gifLink.addEventListener('click', (e) => {
  e.preventDefault();
  page2.style.display = 'none';
  page3.style.display = 'flex';
});

// Back button page2 → landing
backBtn2.addEventListener('click', () => {
  page2.style.display = 'none';
  page1.style.display = 'flex';
});

// Back button page3 → open page
backBtn3.addEventListener('click', () => {
  page3.style.display = 'none';
  page2.style.display = 'flex';
});

// Floating hearts on page3
page3.addEventListener('click', function(e) {
  if (e.target.closest('.content-box')) return; // skip clicks on text box

  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '🖤❤️';

  const size = 20 + Math.random() * 20;
  heart.style.fontSize = size + 'px';
  heart.style.left = e.clientX - size/2 + 'px';
  heart.style.top = e.clientY - size/2 + 'px';

  page3.appendChild(heart);

  setTimeout(() => heart.remove(), 2500);
});