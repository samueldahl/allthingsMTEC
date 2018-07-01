// JavaScript Document
var currentstring = '';

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");
    currentstring = currentstring.concat(theletter); // We need to concatenate the strings together.
    checkmyAnswer(currentstring);
    outputcontdiv.innerHTML = currentstring; // I want you to make it print to the page in lower case.

}

function checkmyAnswer(instring) {
    var otheranswer = substr(2,6);  // Lets pull another word out of the word we want them to spell.
    if(instring === "STRING"){
        alert("you win! String also contains the word " + otheranswer);
    }
}