$(function(){
  var $pwd = $('#pwd'),
      $pwdText = $('.pwd-text'),
      $eye = $('#eye');
  $pwd.on('input',function(){
    $pwdText.val($pwd.val());
  });
  $eye.mousemove(function(){
    $pwdText.css('z-index','10');
  });
  $eye.mouseout(function(){
    $pwdText.css('z-index','-10');
  });
});
