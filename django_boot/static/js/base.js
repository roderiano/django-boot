$(document).ready(function () {
  // navbar code

  function restoreSidebarState() {
    const isCollapsed = localStorage.getItem('isCollapsed') === 'true';
    if (isCollapsed) {
      $('#sidebar').addClass('collapsed');
      $('.content').addClass('collapsed');
      $('#sidebar > ul > li').addClass('disabled');
      $('#sidebarCollapse > i').toggleClass('fa-chevron-left fa-chevron-right');
    } else {
      $('#sidebar').removeClass('collapsed');
      $('.content').removeClass('collapsed');
      $('#sidebar > ul > li').removeClass('disabled');
    }
  }
  restoreSidebarState();

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('collapsed');
    $('.content').toggleClass('collapsed');
    $('.navbar').toggleClass('collapsed');
    $('#sidebar > ul > li').toggleClass('disabled');
    $('#sidebarCollapse > i').toggleClass('fa-chevron-left fa-chevron-right');
    

    const isCollapsed = $('#sidebar').hasClass('collapsed');
    console.log(isCollapsed);
    localStorage.setItem('isCollapsed', isCollapsed);
  });

  $('.nav-link').on('click', function () {
    $('.collapse.show').not($(this).next('.collapse')).collapse('hide');
    $(this).find('.fas').toggleClass('fa-chevron-down fa-chevron-up');
  });

  // Spinner code
  setTimeout(function () {
    $('.overlay').hide();
  }, 100);
});
