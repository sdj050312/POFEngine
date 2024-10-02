$('.list-title').click(function(){
    console.log(this);

   $(this).addClass('active');
   $(this).siblings('.list-title').removeClass('active');
   $(this).siblings('.content').stop().slideUp();
   $(this).next().stop().slideDown();

})