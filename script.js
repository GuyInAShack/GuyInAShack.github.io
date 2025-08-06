const menuBtn = document.getElementById('menu-btn');
const topmenu = document.getElementById('topmenu');

menuBtn.addEventListener('click', () => {
  const isOpen = topmenu.classList.toggle('active');

  if (isOpen) {
    menuBtn.textContent = '✕ Close';
  } else {
    menuBtn.textContent = 'Menu';
  }
});
