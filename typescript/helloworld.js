var Helloworld = (function () {
    function Helloworld(msg) {
        this.msg = msg;
    }
    return Helloworld;
}());
var message = new Helloworld('Dank Memes');
console.log(message);
