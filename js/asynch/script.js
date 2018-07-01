
let array = ['a','b','c','d','e'];

document.getElementById('array').innerText = array.concat();

window.setInterval(
    function() {
        array.reverse();
        document.getEmementById("array").innetText = array.concat();

    }, Math.random() * 2000 + 1000);