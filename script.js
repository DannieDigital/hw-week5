// fuction to excute current day that displays at the top of the calendar for user
$(window).on("load", function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#currentDay").append(currentDate);
    currentTime = moment().format("H");

})
// set global variables 
var scheduleInput = document.querySelector("#textarea");
var saveButton = document.querySelector("#saveText")


// fuction to store input to local storage 

$('#saveTextBtn').on('click' , function(){
    event.preventDefault();
    $('input[type="text"]').each(function(){
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
       return textarea;
       
});
});


// Retain Data in form when browser is refreshed 
// function renderTextArea (){
// var dataSaved = localStorage.getItem("#textarea")
// if (dataSaved){
//     return;
// } 
// }
   

// fuction to excute timeblock color coded to indicate whether it is in the past, present, or future

