function scrleft(){
    var a = document.getElementById("scroll");
    var b = event.deltaY;
    if(b > 0){
        a.scrollLeft +=250;
        a.scrollTop += 0;
    }
    else{
        a.scrollLeft -=250;
        a.scrollTop += 0;
    }
}
