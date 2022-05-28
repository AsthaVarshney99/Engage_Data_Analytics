// var price = window.location.href.split('/').pop()

var params = new URLSearchParams(window.location.search),
    first = params.get("first");

document.getElementById("result").innerHTML = "Rs. " + first;