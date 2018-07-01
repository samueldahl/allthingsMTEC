function addHouse(){
    $('.map').append("<div class='housedrag'></div>");
    $(".housedrag").draggable({
        stop: function(){
            console.log("drag Stopped");
            localStorage.setItem("lastname", "Smith");
        }
    });
}
