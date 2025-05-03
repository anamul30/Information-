
// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');
});

// Typing Effect
const typingText = document.getElementById('typing-text');
const textArray = ['Welcome to my portfolio!', 'Explore my projects and skills!', 'Contact me for more information!'];
let textIndex = 0;
let charIndex = 0;
let currentText = '';

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    currentText += textArray[textIndex].charAt(charIndex);
    typingText.textContent = currentText;
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(removeText, 1000);
  }
}

function removeText() {
  if (charIndex > 0) {
    currentText = currentText.substring(0, currentText.length - 1);
    typingText.textContent = currentText;
    charIndex--;
    setTimeout(removeText, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

typeText();

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent!');
  event.target.reset();
});
