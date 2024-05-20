$('.hamburger .btn').click(function () {
  $('.header-nav').toggleClass('open');
  $('.header-content').toggleClass('open');
  $('.hamburger .btn').toggleClass('active').toggleClass('close');
});
