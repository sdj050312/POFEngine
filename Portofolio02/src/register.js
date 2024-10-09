$('#agree_all').click(function() {
    var allChk = $('#agree_all').is(":checked");
    
    if (allChk) {
        $('.all').addClass('active');
        $('.checkControl').prop("checked", true).addClass('active');
        $('button').prop('disabled', false);
    } else {
        $('.all').removeClass('active');
        $('.checkControl').prop("checked", false).removeClass('active');
        $('button').prop('disabled', true);
    }
});

$('.checkControl').click(function() {
    $(this).toggleClass('active');
    
    var a = $('#agree_1').is(":checked");
    var b = $('#agree_2').is(":checked");

    if (a || b) {
        $('button').prop("disabled", false);
    } else {
        $('button').prop("disabled", true);
    }
})