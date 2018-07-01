// var mystring = "This is a holy grail album, I just really like records. 404 page not found. Trent Ross is today's teacher.";
//
// function checkstring(){
//     var pattern = /\w()/;
//     var result = mystring.match(pattern);
// }
//
// var result = mystring.match();


var mystring = document.getElementById("mywords").innerHTML;
var myexp = new RegExp();

function checkstring(thevalue){
    var re = new RegExp("\\b" + thevalue + "\\b");
    mystring = mystring.toString();
    var result = mystring.search(re);

    if(result !== -1){
        document.getElementById("resultspan").innerHTML = "Found at;" +result;
    }
    else{
        document.getElementById("resultspan").innerHTML = "not found";
    }

}