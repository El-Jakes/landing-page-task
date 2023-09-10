// const navBar = document.getElementById("navbar");
const showMenuItems = document.getElementById("show-menu-items");
const closeMenuItems = document.getElementById("close-menu-items");
const navMenu = document.getElementById("nav-menu");

showMenuItems.addEventListener("click", () => {
  navMenu.classList.toggle('nav-menu');
  navMenu.style.listStyle = 'none'
  showMenuItems.style.display = 'none'
  closeMenuItems.style.display = 'inline-block'
});

closeMenuItems.addEventListener("click", () => {
    navMenu.classList.toggle('nav-menu');
    navMenu.style.listStyle = 'none'
    closeMenuItems.style.display = 'none'
    showMenuItems.style.display = 'inline-block'
});
