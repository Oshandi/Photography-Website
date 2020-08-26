$(document).ready(function() {
//menu toggle
$('.menutoggle').click(function() {
  $('menu').toggleClass('active');
  $(this).toggleClass('active');
});

//gallery layout
var $lightbox = $('#lightbox');

$('[data-target="#lightbox"]').on('click', function(event) {
  var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt');

  $lightbox.find('img').attr('src', src);
  $lightbox.find('img').attr('alt', alt);
});

//


});
