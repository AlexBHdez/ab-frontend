$(window).ready(function() {
  const navBar = $('.navbar');
  const burgerIcon = $('.navbar-burger');
  const navbarCollapse = $('.navbar-collapse');
  const links = $('app-header a');
  const hero = $('app-hero');

  burgerIcon.click(function() {
    navBar.toggleClass('bg-primary');
  });

  links.click(function() {
    navbarCollapse.removeClass('show');
    navBar.toggleClass('bg-primary');
  });

  
  $(window).scroll(function() {
    let heroHeight = hero.height();
    
    if($(window).scrollTop() > (heroHeight - 200)) {
      navBar.addClass('navbar-bg');
    } else {
      navBar.removeClass('navbar-bg');
    }
  });
});


