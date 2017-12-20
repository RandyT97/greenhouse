//This uses alphavantage API
//Get your own here: https://www.alphavantage.co/support/#api-key
const baseURL = "https://www.alphavantage.co/query?";

const key = "";
var timeBase = "function=TIME_SERIES_";
var sym = "&symbol=";
var timeInt = "&interval=";
var size = "&outputsize=compact";


var dailyList;
//TODO: Make a text box to enter your apikey
//TODO: Be able to tell whether a file exists, using callbacks?
//Currently, is async, need to use callbacks to finish the original first run
//then fetch it from a dailyList object.

dailyRequest("MSFT", "2017-12-18");
dailyRequest("MSFT", "2017-12-18");
dailyRequest("MSFT", "2017-12-18");
dailyRequest("MSFT", "2017-12-18");



//THis is a bit redundant since alphavantage returns
//is only accurate up to the 2nd dec
//but a handy way to round in javascript
//Found at: http://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function setKey(userKey) {
    key = userKey;
}
//Check if a daily list already exists.
function dailyRequest(tickerSym, date) {
    //Request has not been made yet
    if (dailyList == null) {
        console.log("Requesting new");
        getDailySummary(tickerSym, date);
    }
    else {
        console.log("Exists");
        getDailyData(tickerSym, date);
    }
}
//TODO: modularize request of json and retrieval of day wanted
//Returns opening and closing value in form of dictionary
function getDailySummary(tickerSym, date) {
    // timeBase += "DAILY";
    // sym += tickerSym;
    //Warning: Using Compact will only return the latest 100 data points! 
    // size += "compact";

    var completeURL = baseURL + timeBase + "DAILY" + sym + tickerSym + size + key;
    console.log(completeURL);

    $.ajax({
        url: completeURL,
        success: function (results) {
            console.log('Found results');
            dailyList = results["Time Series (Daily)"];
            console.log(dailyList);
        }
    })
}

function getDailyData(tickerSym, date) {
    console.log(dailyList);
    var day = {
        date: date,
        open: dailyList[date]["1. open"],
        close: dailyList[date]["4. close"]
    };
    console.log(day.close);
    console.log(day.open);
    day.open = round(day.open, 2);
    day.close = round(day.close, 2);
    console.log(day.open);
    console.log(day.close);
    return day;
}