let todaysDay = moment().format('dddd MMM Do');

$('#currentDay').text(todaysDay)

let currentTime = moment().format('HH');



let eventText0 = " ";
let eventText1 = " ";
let eventText2 = " ";
let eventText3 = " ";
let eventText4 = " ";
let eventText5 = " ";
let eventText6 = " ";
let eventText7 = " ";
let eventText8 = " ";
let eventText9 = " ";

let timeList = ["#time8", "#time9", "#time10", "#time11", "#time12", "#time13", "#time14", "#time15", "#time16", "#time17"];

let i = 8;

let textBlock = {
  text8: eventText0,
  text9: eventText1,
  text10: eventText2,
  text11: eventText3,
  text12: eventText4,
  text13: eventText5,
  text14: eventText6,
  text15: eventText7,
  text16: eventText8,
  text117: eventText9
}
$(document).ready(function () {

  for (let i = 8; i < 24; i++) {
    if (currentTime < 8) {
      $(timeList[i - 8]).addClass('past');
    }
    else if (i > currentTime) {
      $(timeList[i - 8]).addClass('future');
      console.log(currentTime)
    }
    else if (i < currentTime) {
      $(timeList[i - 8]).addClass('past');
    }
    else {
      $(timeList[i - 8]).addClass('present');
    }
  }


  let returnText = JSON.parse(localStorage.getItem("textBlock"));
   if(returnText!==null){


  document.getElementById("time8").value = returnText.text8;

  document.getElementById("time9").value = returnText.text9;

  document.getElementById("time10").value = returnText.text10;
   

  document.getElementById("time11").value = returnText.text11;
  document.getElementById("time12").value = returnText.text12;
  document.getElementById("time13").value = returnText.text13;
  document.getElementById("time14").value = returnText.text14;
  document.getElementById("time15").value = returnText.text15;
  document.getElementById("time16").value = returnText.text16;
  document.getElementById("time17").value = returnText.text17;
   }


  $('.saveBtn').on('click', function () {
    event.preventDefault();
    eventText0 = document.querySelector("#time8").value;
    eventText1 = document.querySelector("#time9").value;
    eventText2 = document.querySelector("#time10").value;
    eventText3 = document.querySelector("#time11").value;
    eventText4 = document.querySelector("#time12").value;
    eventText5 = document.querySelector("#time13").value;
    eventText6 = document.querySelector("#time14").value;
    eventText7 = document.querySelector("#time15").value;
    eventText8 = document.querySelector("#time16").value;
    eventText9 = document.querySelector("#time17").value;

    
    textBlock = {
      text8: eventText0,
      text9: eventText1,
      text10: eventText2,
      text11: eventText3,
      text12: eventText4,
      text13: eventText5,
      text14: eventText6,
      text15: eventText7,
      text16: eventText8,
      text17: eventText9
    }

    localStorage.setItem("textBlock", JSON.stringify(textBlock));
    console.log(textBlock);
  })


})


