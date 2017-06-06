
function show(ele){
    ele.style.display = "block";
}

function hide(ele){
    ele.style.display = "none";
}

function client(){
    if(window.innerWidth !== undefined){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }else if(document.compatMode === "CSS1Compat"){
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }else{
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
}
function scroll(){
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top:  window.pageYOffset || document.documentElement.scrollTop
    }
}
