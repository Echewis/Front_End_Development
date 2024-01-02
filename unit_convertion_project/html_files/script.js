function temperature(){
var c = document.getElementById("c").value;
var f = (c * 9/5) + 32
document.getElementById("f").value = f
}
function weight(){
    var kg = document.getElementById("kg").value;
    var pounds = kg * 2.2046
    document.getElementById("lbs").value = pounds
}
function distance(){
    var kilo = document.getElementById("k").value;
    var mile = kilo * 0.62137
    document.getElementById("m").value = mile
}