$(function(){

/* Hover
---------------------------------------- */
$('img.hoverImg, .hoverImg img').hover(function(){
  $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function(){
       $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
});

/*    グローバルナビ固定
---------------------------------------- */
var nav    = $('#gNavi'),
    offset = nav.offset();
var pagetop =$('#pageTop01');
pagetop.hide();

$(window).scroll(function () {
  if($(window).scrollTop() > offset.top) {
    nav.addClass('fixed');
    pagetop.fadeIn();
  } else {
    nav.removeClass('fixed');
    pagetop.fadeOut();
  }
});

/*    ページ内リンクスクロール速度
---------------------------------------- */
var headerHight = 70;
$('a[href^="#"]').on('click', function(){
  var speed = 400;
  var href= $(this).attr('href');
  var target = $(href == '#' || href == '' ? 'html' : href);
  var position = target.offset().top-headerHight;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

});