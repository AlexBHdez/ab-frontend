const navBar = $('.navbar');
const burgerIcon = $('.navbar-burger');
const navbarCollapse = $('.navbar-collapse');

burgerIcon.click(function() {
  navBar.toggleClass('bg-primary');
});
