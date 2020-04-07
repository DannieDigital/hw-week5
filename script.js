// fuction to excute current day that displays at the top of the calendar for user
$(window).on("load", function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#currentDay").append(currentDate);
    currentTime = moment().format("H");

})
// set global variables 
var scheduleInput = document.querySelector("#textarea");
var saveButton = document.querySelector("#saveText");
var scheduleForm = document.querySelector("schedule-form");

var savedSchedule = [];
// function to retain input from local storage when page is refresh
$(document).ready(function(){
    var scheduleInput = document.querySelector("#textarea");
    var id = $(this).parent().attr('id');
    localStorage.getItem(id, scheduleInput);
    $('input[type="text"]').val(localStorage.getItem("textarea"));
     
});

  
// fuction to store input to local storage 

$('.saveBtn').on('click' , function(){
    event.preventDefault();
    $('input[type="text"]').each(function(){
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
       return textarea;
       
});
});




//    add footer to html with my icon like porfifio 

// fuction to excute timeblock color coded to indicate whether it is in the past, present, or future

