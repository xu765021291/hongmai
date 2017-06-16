$(function(){
	



    var img = document.getElementById('return');
    var mubiao = 0;
    var now = 0;
    var timer = null;

    window.onscroll = function () {

        if (pageYOffset > 500) {
            show(img);
        } else {
            hide(img);
        }
        now = scroll().top;
    }
    img.onclick = function () {
        console.log(1);
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (mubiao - now) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            now = now + step;
            window.scrollTo(0, now);

            if (now === mubiao) {
                clearInterval(timer);
            }
        }, 30);

    }
    



    var boxx = document.getElementsByClassName("box")[0];
    var aArr = boxx.getElementsByClassName("box-w");
    var liArr = boxx.getElementsByClassName("l");
    var spanArr = boxx.getElementsByClassName("sple");

        
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].index=i;
        liArr[i].onclick = function () {
            count = this.index;
            fn();

        }
    }

    var count = 0;
    spanArr[1].onclick = fn1;


    spanArr[0].onclick = function () {
        count--;

        if (count === -1) {
            count = 2;
        }
        fn();
    }
    var timee = setInterval(fn1, 1000);


    boxx.onmouseover = function () {
        clearInterval(timee);
    }
    boxx.onmouseout = function () {
        timee = setInterval(fn1, 1000);
    }




    function fn() {

        for (var j = 0; j < liArr.length; j++) {
            liArr[j].className = "l";
            aArr[j].className = "box-w";
        }
        liArr[count].className = "l current";
        aArr[count].className = "box-w show";
    }


    function fn1() {
        count++;
        if (count === 3) {
            count = 0;
        }
        fn();
    }









    var boxb = document.getElementsByClassName("boxb")[0];
    var aAr = boxb.getElementsByClassName("boxb-w");
    var liAr = boxb.getElementsByClassName("l");
    var spanAr = boxb.getElementsByClassName("sple");


    for (var i = 0; i < liAr.length; i++) {
        liAr[i].index=i;
        liAr[i].onclick = function () {
            coun = this.index;
            fn2();

        }
    }

    var coun = 0;
    spanAr[1].onclick = fn3;


    spanAr[0].onclick = function () {
        coun--;

        if (coun === -1) {
            coun = 3;
        }
        fn2();
    }
    var timer = setInterval(fn3, 5000);


    boxb.onmouseover = function () {
        clearInterval(timer);
    }
    boxb.onmouseout = function () {
        timer = setInterval(fn3, 5000);
    }




    function fn2() {

        for (var j = 0; j < liAr.length; j++) {
            liAr[j].className = "l";
            aAr[j].className = "boxb-w";
        }
        liAr[coun].className = "l current";
        aAr[coun].className = "boxb-w showw";
    }


    function fn3() {
        coun++;
        if (coun === 4) {
            coun = 0;
        }
        fn2();

    }



});
