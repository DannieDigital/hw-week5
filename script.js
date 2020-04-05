// fuction to excute current day that displays at the top of the calendar for user
$(window).on("load", function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#currentDay").append(currentDate);
    currentTime = moment().format("H");

})

// fuction to excute timeblock color coded to indicate whether it is in the past, present, or future

