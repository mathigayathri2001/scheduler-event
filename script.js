let todaysDay = moment().format('dddd MMM Do');

$('#currentDay').text(todaysDay)

let currentTime = moment().format('HH');
console.log(currentTime);



let timeList = ["#time8", "#time9", "#time10", "#time11", "#time12", "#time13", "#time14", "#time15", "#time16", "#time17"];

let i = 8;
let eventText ="";
let getEventText = "";
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


getEventText=localStorage.getItem("eventitem");
console.log(getEventText)
document.getElementById("time8").value = getEventText;
 
$('.saveBtn').on('click', function () {
  event.preventDefault();

   eventText = document.querySelector("#time8").value;
   console.log(eventText)
   localStorage.setItem("eventitem", eventText )
})

})



    



