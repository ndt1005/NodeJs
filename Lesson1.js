console.log("Hello world.");

var time = 0;

var timer = setInterval(function () {
    time += 2;
    console.log(time + " loop");
    if (time > 7) {
        clearInterval(timer);
    }
}, 2000);