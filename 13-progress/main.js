$(function(){
  var $progress = $('progress');
  var timer = 0;//定时器对象
  var i = 0; //进度数值

  $('#start').click(function(){
    if(timer !== 0){return;}
    
    timer = window.setInterval(function(){
      $progress.attr('value',i++);
    },100);
  });

  $('#pause').click(function(){
    window.clearInterval(timer);
    timer = 0;
  });

  $('#reset').click(function(){
    $progress.attr('value',i = 0);
  });
});
