$(function() {
    var $width   = $('#rectangle-width'),
        $height  = $('#rectangle-height'),
       // $calc    = $('#rectangle-calc'),
        $form   = $('.rectangle form');  

    //小数点后面保留第 n 位
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);         
    }

    //组织表单提交
    $form.submit(function(e) {
         e.preventDefault();

         var width  = Number($width.val()),
             height = Number($height.val()),
             p = roundFractional(width * 2 + height * 2, 2),
             a = roundFractional(width * height, 2);

        $('#rectangle-perimeter').val(p);
        $('#rectangle-area').val(a);
    });
});
