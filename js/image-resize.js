$(window).load(function(){
  $('img').each(function(){
    $(this).height((Math.floor($(this).height()/8)*8)+'px')
  });
});