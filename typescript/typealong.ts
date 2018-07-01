function GetAllBooks(){

    let books = [
        { title: 'Stormbreaker', author:'Horrorwitz', available:true},
        { title: 'Words Of Radience', author:'Brandon Sanderson', available:false},
        { title: 'Advanced Meme Theory Volume XII: On The Usage Of Color Filters On Dead And Dying Memes', author:'Judson Dean Flamm Junior', available:true}
    ];

    return books;
}

enum Meme{Harambe, StarwarsKid, BadLuckBrian}; // 0, 1, 2
let favoriteMeme: Meme = Meme.Harambe;