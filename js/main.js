$(document).ready(function() {
//Menu toggle
$('.menutoggle').click(function() {
  $('menu').toggleClass('active');
  $(this).toggleClass('active');
});

//Gallery layout
var $lightbox = $('#lightbox');

$('[data-target="#lightbox"]').on('click', function(event) {
  var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt');

  $lightbox.find('img').attr('src', src);
  $lightbox.find('img').attr('alt', alt);
});

//Filter gallery images
  var $imgs = $('#gallery img');
  var $category = $('#category');
  var tagged = {};

  $imgs.each(function() {
    var img = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(',').forEach(function(tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(img);
      })
    }
  })

  $('<li/>', {
    text: 'All',
    class: 'active',
    click: function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
      $imgs.show();
    }
  }).appendTo($category);

  $.each(tagged, function(tagName) {
    $('<li/>', {
      text: tagName,
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $imgs
          .hide()
          .filter(tagged[tagName])
          .show();
      }
    }).appendTo($category);
  });


});
