



function Dictionary (){
    this.datastore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value){
    this.datastore[key] = value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

function showAll() {
    for (var key in this.datastore) {
        console.log(key + " -> " +this.datastore[key]);
    }
}

var pbook = new Dictionary();
pbook.add("Trent","455");
pbook.add("Mike","123");
pbook.add("Evander Holyfeild","221");
pbook.showAll();
pbook.remove("Evander Holyfeild");
pbook.showAll();
pbook.add("Mike Tyson", "668");