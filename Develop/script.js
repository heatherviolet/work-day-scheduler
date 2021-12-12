var saveBtn = $("saveBtn");

// current day at top
var currentDay = moment().format("MMM Do YY");
$("#currentDay").append(currentDay);



//save button click
   saveBtn.on("click", function () {
    //console.log(this);
    
    var text = $(this).siblings(".hour").val();
    var time = $(this).parent().attr("id"); 

    //set items in local storage.
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