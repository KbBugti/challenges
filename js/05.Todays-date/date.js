// Time

let d = new Date();

function printTime() {
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let day = d.getDay();
    let month = d.getMonth();
    let currentYear = d.getFullYear();




    // The days of the week
    switch (day) {
        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thurday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
    } {
        switch (month) {
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;

            case 3:
                month = "may";
                break;

        }
    }
    document.body.innerHTML = "Today is: " + day + " " + month + ". " + currentYear + " " + hours + ":" + mins + ":" + secs;
}

setInterval(printTime(), 1000);



// We can also use: console.log("Today is :", day); Or show("Today is :", day);