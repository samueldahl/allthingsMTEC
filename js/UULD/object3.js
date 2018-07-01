function PrettyDank(){
    var samuel = {age: 17, job:"amature zine writer", fullname:"Samuel Dahl", Phone:8017965130, email:"samjoedahl@gmail.com"};
    console.log(samuel.job);
    document.getElementById("fullname").innerHTML = samuel.fullname;
}


var Reflector = function(obj){

    this.getProperties = function(){
        var properties = [];
        for(var prop in obj){
            if (typeof obj [prop] !== "function"){
                properties.push(prop);
            }
        }
        return properties;
    };

    this.getMethods = function(){
        var methods = [];
        for(var method in obj){
            if(typeof obj [method] === "function"){
                methods.push(method);
            }
        }
        return methods;
    };
};

var Character = function(){
    this.name = "franky";

    this.jump = function(){
        console.log("he jumped");
    };
};

var trent = new Character();
var mirror = new Reflector(trent);
console.log(mirror.getProperties());
console.log(mirror.getMethods())


function fact(n) {
    if (n === 1){
        return 1;
    }
    return (n) * fact(n-1);
}
