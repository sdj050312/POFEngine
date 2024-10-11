$('.section-06-content').click(function(){
    $(this).next().stop().slideToggle();
    $('arrow').toggleClass('active')
  


});

$('td').click(function(){
    $(this).toggleClass('reservation');
})


$('label[for = "tab1"]').click(function(){
    $('.card').css({
        'position': 'absolite',
        'right':'1020px',
        'transition':'0.5s'
    });

});
$('label[for = "tab2"]').click(function(){
    $('.card').css({
        'position': 'absolite',
        'right':'0px',
        'transition':'0.5s'
    });

});
