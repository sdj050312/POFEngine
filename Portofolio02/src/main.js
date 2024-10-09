$('.checked button').click(function(){
    window.location.href = "/html/pof2login.html";
})
$('.qna-box').click(function(){
   $(this).next().stop().slideToggle()
   $(this).siblings('.qna-box .qna-box-explain').slideUp()
})
$('.tab-a1').click(function(){
    $('.tab-radio').hide();
    $('.tab-audio').show();
});

$('.tab-a2').click(function(){
$('.tab-radio').show();
    $('.tab-audio').hide();
});