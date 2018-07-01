function guessGame(){
    var x = Math.ceil((Math.random() * 10) + 1);
    console.log(x);
    var y = prompt("Make a guess between 1 and 10");
    if (x == y) {
        alert("well Done");
    }else{
        alert("U FAIL");
    }
}

function multiplication(){
    var a = document.getElementById("a").value ;
    var b = document.getElementById("b").value;
    var c = a * b;
    document.getElementById("answer").innerHTML = c ;
}

// function randomDate(){
//
//     document.getElementById(date).innerHTML = "m" + "d" + "year";
// }