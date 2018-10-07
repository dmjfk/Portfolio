//Animate Smooth Scroll
$('#view-work').on('click',function(){
  const images = $('#images').position().top;

  $('html, body').animate({
    scrollTop: images
  }, 900
);
});


// navigation

let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});