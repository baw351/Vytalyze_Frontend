$('.fa-heart').click(function() {
    var parent = $(this).parent('.likes');
    var countText = parent.find('span');
    var count = parseInt(countText.text());
    $(this).toggleClass('red');
    if( $(this).hasClass('red') ) {
      count += 1;
      countText.text(' ' + count);
    } else {
      count -= 1;
      countText.text(' ' + count);
    }
  });