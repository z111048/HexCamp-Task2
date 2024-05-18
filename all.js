$('.hamburger .btn').click(function () {
  $('.header-sm-nav').toggleClass('open');
  $('.header-sm-content').toggleClass('open');
  $('.hamburger .btn').toggleClass('active').toggleClass('close');
});
