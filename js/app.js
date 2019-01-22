$(function(){
    $('.next').click(function(){
        $('.wrap').animate({"margin-left" : parseInt($('.wrap').css("margin-left"))-400+"px"},600);
    });
    $('.start').click(function(){
        $('.wrap').animate({"margin-left" : parseInt($('.wrap').css("margin-left"))-400+"px"},600);
    });

    var timer;
    var sec = 0;
    $('.counter').html(sec);
    $('.start').click(function(){
        $('.ok').show();
        timer = setInterval(function(){
            $('.counter').html(sec);
            sec++;
        },1000);
    });

    $('.next').click(function(){
        sec = 0;
        $('.ok').show();
        $('.next').hide();
        $('.end').hide();
        timer = setInterval(function(){
            $('.counter').html(sec);
            sec++;
        },1000);
    });

    $('.ok').click(function(){
        clearInterval(timer);
        $('.ok').hide();
        $('.next').show();
        $('.end').show();
    });
});