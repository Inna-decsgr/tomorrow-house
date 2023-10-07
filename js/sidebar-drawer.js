const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function toggelDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function(button) {
  button.addEventListener('click',toggelDrawerMenu);
});