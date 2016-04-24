$( document ).ready(function() {
  $(document).foundation();

  // CLOSE MENU
  $('.insight-dropdown').on('click', function(e){
    e.preventDefault()
    if($('.insight-dropdown-open').hasClass('js-dropdown-active') === true)
     $('.insight-dropdown-open').removeClass('js-dropdown-active')
  })
});
