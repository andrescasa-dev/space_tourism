const btn_navToggle = document.getElementById('mobile-nav-toggle');
const div_nav = document.getElementById('primary-navigation');

btn_navToggle.addEventListener('click', (event) => {
  const isVisible = div_nav.getAttribute('data-isVisible');
  if (isVisible === "true") {
    div_nav.setAttribute('data-isVisible', false);
    btn_navToggle.setAttribute('aria-expanded', false);
  }
  else{
    div_nav.setAttribute('data-isVisible', true);
    btn_navToggle.setAttribute('aria-expanded', true);
  }
});