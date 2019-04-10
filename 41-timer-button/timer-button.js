/* exported $timerBtn */

//组件封装
//var n =6;
//$(function(){    //==window.onload=function ...})
//闭包，函数的立即执行表达式
//闭包，想让他什么时候用就什么时候用

var $timerBtn=(function(){
    var n=6;
      
    var init = function(){
        var $container=$('.main');
          //第一种方法
          //template string
          var DOM = '<input class="timer-button" type="button" value="同意(6s)" disabled>';
          $container.html(DOM);
          //第二种方法
          //var $timerBtn =$('<input type="button" value="同意（6s）" disabled>');
          //$timerBtn.appendTo($container);
       
          //第三种方法
          //var $timerBtn =$('<input type="button" value="同意（6s）" disabled>');
          //$container.append($timerBtn);
    
          //var $btnAgree=$('input[type="button"]');//获取对象
          var $btnAgree = $container.find('.timer-button');  //容器中找input

          var timer=window.setInterval(function(){
            n--;
            if(n===0){
              window.clearInterval(timer);
              $btnAgree.removeAttr('disabled'); //删掉disabled属性
              $btnAgree.val('同意');                                                                              }else{
              $btnAgree.val('同意('+n+'s)');                                                                    }                                         
          },1000);
          $btnAgree.click(function(){
             alert('SPA!01-timer-buttton task!');              
          });
    };
  
    var remove=function(){
        var $container = $('.main');
        var DOM = '';
        $container.html(DOM);
    };

    return {init:init,remove:remove};
  
}());
