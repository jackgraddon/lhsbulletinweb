var time = "";
var month;
var monthStr = "";
var year;
var yearShort = "";
var date;
var prevDate;
var day;
var timeStr = "";

function updateTime() {
    var currentTime = new Date();
    date = currentTime.getDate();
    prevDate = [date - 1, date - 2, date - 3, date - 4];
    day = currentTime.getDay();
    switch (day) {
        case 0:
            date = date + 1;
            prevDate = [date - 3, date - 4, date - 5, date - 6, date - 7];
            break;
        case 1:
            prevDate = [date - 3, date - 4, date - 5, date - 6, date - 7];
            break;
        case 2:
            prevDate[1] = date - 4;
            prevDate[2] = date - 5;
            prevDate[3] = date - 6;
            prevDate[4] = date - 7;
            break;
        case 3:
            prevDate[2] = date - 5;
            prevDate[3] = date - 6;
            prevDate[4] = date - 7;
            break;
        case 4:
            prevDate[3] = date - 6;
            prevDate[4] = date - 7;
            break;
        case 5:
            prevDate[4] = date - 7;
            break;
        case 6:
            date = date - 1;
            prevDate = [date - 1, date - 2, date - 3, date - 4];
            break;
    }
    var i = 0;
    console.log(date); // Accurate Current Date
    while (i < 4) {
        console.log(prevDate[i]);
        i++;
    }
    month = currentTime.getMonth() + 1;
    switch (month) {
        case 1:
            monthStr = "January";
            break;
        case 2:
            monthStr = "February ";
            break;
        case 3:
            monthStr = "March ";
            break;
        case 4:
            monthStr = "April ";
            break;
        case 5:
            monthStr = "May ";
            break;
        case 6:
            monthStr = "June ";
            break;
        case 7:
            monthStr = "July ";
            break;
        case 8:
            monthStr = "August ";
            break;
        case 9:
            monthStr = "September ";
            break;
        case 10:
            monthStr = "October ";
            break;
        case 11:
            monthStr = "November ";
            break;
        case 12:
            monthStr = "December ";
            break;
    }
    year = currentTime.getFullYear();
    yearShort = year.toString().slice(2);
    time = month + "_" + date + "_" + yearShort;
    timeStr = monthStr + " " + date + ", " + year;
}
updateTime();

var todayVid = "videos/" + time + "u.mp4";
console.log("File link for " + timeStr + " is " + todayVid);

// Creating Links for previous dates
var i = 0;
var lastVid = [];

while (i < 4) {
    lastVid[i] = "videos/" + month + "_" + prevDate[i] + "_" + yearShort + "u.mp4";
    console.log(lastVid[i]);
    i++;
}


    
    

// Updating links on html to match the date.
function updateFile() {
    $('#today').attr("href", todayVid);
    $('#today').html(monthStr + " " + date + ", " + year);
    $('#last1').attr("href", lastVid[0]);
    $('#last1').html(monthStr + " " + prevDate[0] + ", " + year);
    $('#last2').attr("href", lastVid[1]);
    $('#last2').html(monthStr + " " + prevDate[1] + ", " + year);
    $('#last3').attr("href", lastVid[2]);
    $('#last3').html(monthStr + " " + prevDate[2] + ", " + year);
    $('#last4').attr("href", lastVid[3]);
    $('#last4').html(monthStr + " " + prevDate[3] + ", " + year);
}

updateFile();