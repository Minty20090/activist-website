// Variables
var a = 0;
var num = document.getElementById('num');

setInterval(counter(), 1000);
x = setInterval(function () {num.innerHTML = a +"+"; a+=5; if (a==16005){clearInterval(x)}}, .01);
