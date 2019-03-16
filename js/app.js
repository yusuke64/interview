$(function(){

    // ---------------------------------------質問描写---------------------------------------
    let wrap = $('.wrap');

    // 質問作成
    for(let i = 0; i < questions.length; i++){
        wrap.append(`
            <div class="questions-box">
            <ul class="questions-area">
            <div class="q-wrap">
                <li class="question">${questions[i]}</li>
                </div>
            </ul>
            <div class="counter"></div>
            <p class="btn ok">OK!</p>
            <p class="btn next">次へ</p>
            </div>
            `);
    }
    wrap.append(`
    <div class="questions-box">
        <p class="result"></p>
        <p class="btn"><a href="index.html">トップへ</a></p>
        <p class="btn restart">もう一回！</p>
    </div>
    `);

    // 最終質問の描写
    $('.questions-box')[questions.length].children[3].className = 'btn end';
    $('.end').text('終了');

    // 質問範囲のwidth
    wrap.css('width', questions.length * 400 + 800);


    // ---------------------------------------画面動作処理---------------------------------------
    let timer,
        sec = 0,
        start = $('.start'),
        ok = $('.ok'),
        next = $('.next'),
        end = $('.end'),
        counter = $('.counter'),
        result = $('.result'),
        restart = $('.restart'),
        results = [];

    function slide() {
        wrap.animate({"margin-left" : parseInt($('.wrap').css("margin-left"))-400+"px"},600);
    }

    restart.on('click', function(){
        results = [];
        sec = 0;
        counter.html(sec);
        ok.show();
        next.hide();
        end.hide();
        wrap.animate({"margin-left" : "0px"},600);
        $('.result-num').remove();
    });

    start.click(function(){
        slide();
        counter.html(sec);
            ok.show();
            timer = setInterval(function(){
                sec++;
                counter.html(sec);
            },1000);
        });

    ok.on('click', function(){
        results.push(sec);
        console.log(results);
        clearInterval(timer);
        ok.hide();
        next.show();
        end.show();
    });

    next.on('click', function(){
        sec = 0;
        slide();
        counter.html(sec);
        ok.show();
        next.hide();
        end.hide();
        timer = setInterval(function(){
            sec++;
            counter.html(sec);
        },1000);
    });

    end.on('click', function(){
        slide();
        for(let i = 0; i < results.length; i++){
        result.append(`<span class="result-num">質問${i+1}: ${results[i]}秒</span>`);
        }
    });

});