let deckID;
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let responseObject = JSON.parse(xhttp.responseText);
        deckId = responseObject.deck_id;
        console.log(deck_id)
    }
};
xhttp.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/", true);
xhttp.send();

xhttp.open("GET", "https://deckofcardsapi.com/api/deck/" + /*ID goes here*/ + "/draw/?count=2", true);
