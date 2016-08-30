// $('.masonry').masonry({
//   itemSelector: '.masonry-item',
//   columnWidth: 200
// });



function showThis() {
        $("span.first").typed({
            strings: ['Creator.','Photographer.','Maker.','Crafter.','Filmmaker.','Coder.'],
            backDelay: 1500,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    }
    showThis()

$(document).ready(function() {

  // Vertically center text on homepage rows
  function hpCenter() {
    var hpRow = $('#hobbies .row');
    $(hpRow).each(function() {
      var height = $(this).height();
      var textHeight = $(this).find('.text-col').height();
      height = (height - textHeight) / 2;
      $(this).find('.text-col').css('margin-top',(height - 29) + 'px');
      // Subtracted 29px extra to make up for the heading text
    });
  }
  if (window.innerWidth > 768) {
    hpCenter();
    $(window).resize(function() {
      hpCenter();
    });
  }
});
