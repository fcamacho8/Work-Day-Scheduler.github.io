var currentDay = moment().format('MMMM Do YYYY');
var currentTime = moment().format('h:mm a');
var hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


$("#currentDay").text(currentDay);
$("#currentTime").text(currentTime);



function renderPage() {
    $(".container").empty();
    for (var i = 0; i < hours.length; i++) {
        var hourBlock = $("<div>").attr("class", "time-block row");
        var time = $("<div>").attr("class", "hour col-sm-1").text(hours[i] + ":00");
        var text = $("<textarea>").addClass("text col-sm-10").attr("id", "inputText" + i);
        var save = $("<button>").addClass("saveBtn col-sm-1").attr("save", hours[i]).addClass("far fa-save");



        hourBlock.append(time, text, save)
        $(".container").append(hourBlock);

        if (hours[i] === currentTime) {
            hourBlock.addClass("present");

        } else if (hours[i] < currentTime) {
            hourBlock.addClass("past");
        } else {
            hourBlock.addClass("future");
        }
        $(".container").append(hourBlock);


    }

}
renderPage();

