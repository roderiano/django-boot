$(document).ready(function () {
  // navbar code
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('collapsed');
    $('.content').toggleClass('collapsed');
    $('.navbar').toggleClass('collapsed');
    $('#sidebar > ul > li').toggleClass('disabled');
    $(this).find('i').toggleClass('fa-chevron-left fa-chevron-right');
  });

  $('.nav-link').on('click', function () {
    $('.collapse.show').not($(this).next('.collapse')).collapse('hide');
    $(this).find('.fas').toggleClass('fa-chevron-down fa-chevron-up');
  });
});