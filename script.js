$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        //create to variables that captures the id of the input for the decription 
        //the other variable should grab the id for the parent attritubte. 
    var scheduleDescription = $(this).siblings(".description").val();
    var scheduleTime = $(this).parent().attr("id");
    localStorage.setItem(scheduleDescription, scheduleTime);
    
    });
    
    function updateTime() {
        var currentTime = moment().hours();
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    
            if (timeBlock < currentTime){
                $(this).addClass("past");
           
            }
            else if (timeBlock === currentTime){
                 $(this).removeClass("past");
                // $(this).removeClass("future");
                 $(this).addClass("present");
    
            }
             else {
               $(this).removeClass("'past");
               $(this).removeClass("present");
               $(this).addClass("future");
             }
        });
    
    }
    updateTime();
    
    // var timeIntervals = setInterval(updateTime, 15000);
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    
    $("#currentDay").text(moment().format("dddd, MMM Do YYYY, h:mm a"))
