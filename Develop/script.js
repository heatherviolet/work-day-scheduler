    // moment.js    
    $("#currentDay").text(moment().format("MMM Do YY"));    
    
    // event listener for saveBtn
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 
        //stores values in local storage
        localStorage.setItem(time, text);
    })
    
// retrieves from local storage
$("#8AM .description").val(localStorage.getItem("8AM"));
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

function currentHour() {
    //get current hour
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
       

        //checks time and colorcodes based of current time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
currentHour(); 
