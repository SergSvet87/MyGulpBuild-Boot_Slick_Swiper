/*--------------------------------- 
Menu Mobile 
-----------------------------*/
const mobileMenu = () => {
  const menuButton = document.querySelector('.header__menu-mobile');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', (e) => {
    toggleMenu();
  });
  console.log(menuButton);
  function toggleMenu() {
    menuButton.classList.toggle('mobile-menu_active');

    if (menuButton.classList.contains('mobile-menu_active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }
}

export default mobileMenu;