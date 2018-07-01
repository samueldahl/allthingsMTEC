console.log(resultingMatrix);

counter.gtCount();

function counter(){
    let count = 0;


    function increment(){
        count++;
    }
    function decrement(){
        count--;
    }
    this.getCount = function(){
        return count;
    }
}

function yourFunction(aFunction, aParameter){
    let result = aFunction();
    return result;
}

let resultFromYourFunction = yourFunction(function(a){return a + a;}, yum);


    function fib(n) {

        let fibbingNachi = [0,1];

        let answer = fibbingNachi[0] + fibbingNachi[1];

        let fibBoi = fibbingNachi[1];

        fibbingNachi.pop();
        fibbingNachi.pop();
        fibbingNachi.push(fibBoi);
        fibbingNachi.push(answer);
    }