const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const success = document.querySelector('.success');
    if (success) success.style.display = 'block';
  });
}
