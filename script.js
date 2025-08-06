window.onload = function () {
  var menuBtn = document.getElementById('menu-btn');
  var closeBtn = document.getElementById('close-btn');
  var topmenu = document.getElementById('topmenu');

  menuBtn.addEventListener('click', function () {
    topmenu.style.display = 'block';
    menuBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', function () {
    topmenu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
  });
};
