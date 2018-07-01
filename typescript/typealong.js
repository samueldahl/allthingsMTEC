function GetAllBooks() {
    var books = [
        { title: 'Stormbreaker', author: 'Horrorwitz', available: true },
        { title: 'Words Of Radience', author: 'Brandon Sanderson', available: false },
        { title: 'Advanced Meme Theory Volume XII: On The Usage Of Color Filters On Dead And Dying Memes', author: 'Judson Dean Flamm Junior', available: true }
    ];
    return books;
}
var Meme;
(function (Meme) {
    Meme[Meme["Harambe"] = 0] = "Harambe";
    Meme[Meme["StarwarsKid"] = 1] = "StarwarsKid";
    Meme[Meme["BadLuckBrian"] = 2] = "BadLuckBrian";
})(Meme || (Meme = {}));
; // 0, 1, 2
var favoriteMeme = Meme.Harambe;
