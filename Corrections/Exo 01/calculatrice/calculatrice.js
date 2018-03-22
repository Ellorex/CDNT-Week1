var cal = $("#cal_field");

$('.number').click(function(){
    cal.val(cal.val()+$(this).text());
});

$("#result").click(function(){
    cal.val(eval(cal.val()))
});