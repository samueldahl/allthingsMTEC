var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", true);
xhttp.send();

