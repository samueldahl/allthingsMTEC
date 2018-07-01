var mass = 81;
var earthGrav = 1;
var moonGrav = .1633;
var jupiterGrav = 2.5306;

function earth (mass, earthGrav) {
    return mass * earthGrav
}
function moon (mass, moonGrav){
    return mass * moonGrav
}
function jupiter (mass, jupiterGrav){
    return mass * jupiterGrav
}

// Mass * 9.8 Earth Weightea
// Mass * 1.622 Moon Weight
// Mass * 24.79 Jupiter Wevart