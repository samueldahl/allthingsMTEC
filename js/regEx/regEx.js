var mystring = "There once was a flowering botanist, with a nose like a charging rhinoceros, her BO was bad, her ear-lobes were sad, while from behind she grew like a hippopotamus! 880";

//search string for digits using metacharacter
var patternone = /\d/g;

//search string for a whitespace character (global)
var patterntwo = /\s/g;

//search string for a word character (global)
var patternthree = /\w/g;

//search string for at least one n using a quantifier (global)
var patternfour = /n+/g;

var resultone = mystring.match(patternfour);
console.log(resultone);