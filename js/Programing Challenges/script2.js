let ROW ="rock on world!";
function stringRotation(){
    var x = ROW.charAt(13);
    ROW = ROW.slice(0,13);
    ROW = x + ROW;
    document.getElementById("text").innerHTML = ROW;
}

window.setInterval(stringRotation,500);
