
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toaString = toaString;
    this.empty = empty;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(element){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length-1];
}

function toaString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty(){
    if(this.dataStore.length === 0){
        return true;
    }
    else{
        return false;
    }
}

let q = new Queue();
q.enqueue("charles");
q.enqueue("darla");
console.log(q.toaString());

q.dequeue();
console.log(q.toaString());

//adding more people
q.enqueue("leo p");
q.enqueue("matt doe");
q.enqueue("king of sludge");
q.enqueue("trent ross");
console.log(q.toaString());

//printing first and last
console.log(q.front());
console.log(q.back());
