var currentDay = moment().format('MMMM Do YYYY');
var currentTimeUnformat = moment();
var currentTime = moment().format('h:mm a');
var hours = ["7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];

$("#currentDay").text(currentDay);
$("#currentTime").text(currentTime);

function renderPage() {
    $(".container").empty();
    for (var i = 0; i < hours.length; i++) {
        var hourBlock = $("<div>").attr("class", "row time-block");
        var time = $("<div>").attr("class", "hour col-sm-1 ").text(hours[i]);
        var text = $("<textarea>").addClass("col-sm-10").addClass("text").attr("id", "inputText" + i);
        var save = $("<button>").attr("class", "col-sm-1").addClass("saveBtn").attr("data-input", "inputText" + i).attr("saveTime", hours[i]).addClass("far fa-save");
       
        hours[i] = moment(hours[i], 'h:mm a');
        hourBlock.append(time, text, save)
       
        $(".container").append(hourBlock);
       
        if (hours[i].isBefore(currentTimeUnformat)) {
            hourBlock.addClass("past");
        } else if (hours[i].isAfter(currentTimeUnformat)) {
            hourBlock.addClass("future");
        } else {
            hourBlock.addClass("present");
        }
       
        $(".saveBtn").on("click", function (event) {
            event.preventDefault();
            var storeTime = $(this).attr("saveTime")
            var x = $(this).attr("data-input");
            var textInput = "#" + x;
            var storeText = $(textInput).val();
            localStorage.setItem(storeTime, storeText);
        });
    }
}
renderPage();