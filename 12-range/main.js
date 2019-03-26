$(function(){
  var $range = $('input[type="range"]');
  var $txtAge = $('#age');
  $txtAge.html($range.val());
  $range.change(function(){
    
    $txtAge.html($range.val());

  });
});
