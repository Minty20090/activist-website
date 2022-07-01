var a = 0;
var num = document.getElementById('num');
x = setInterval(function () {num.innerHTML = a +"+"; a+=25; if (a>=16020){clearInterval(x)}}, .1);
