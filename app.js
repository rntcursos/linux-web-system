


function date(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    document.getElementById("data").innerHTML = h + ":" + m;
}

setInterval(date, 1000);
