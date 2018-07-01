var date = {
    day: function () {
        return 'day';
    }
};

date.day();


let aDate = new Date();

document.getElementById("date").innerHTML = aDate.getDate();
document.getElementById("month").innerHTML = aDate.getMonth();
document.getElementById("year").innerHTML = aDate.getFullYear();

