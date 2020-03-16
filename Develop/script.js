var currentDay = moment().format('MMMM Do YYYY');
var currentTime = moment().format('h:mm a');
var hours = ["7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];


$("#currentDay").text(currentDay);
$("#currentTime").text(currentTime);



function renderPage() {
    $(".container").empty();
    for (var i = 0; i < hours.length; i++) {
        var hourBlock = $("<div>").attr("class", "row time-block");
        var time = $("<div>").attr("class", "hour col-sm-1 ").text(hours[i] + ":00");
        var text = $("<textarea>").addClass("col-sm-10").addClass("text").attr("id", "inputText" + i);
        var save = $("<button>").attr("class", "col-sm-1").addClass("saveBtn").attr("data-input", "inputText" + i).attr("saveTime", hours[i]).addClass("far fa-save");



        hourBlock.append(time, text, save)
        $(".container").append(hourBlock);

        if (hours[i] === currentTime) {
            hourBlock.addClass("present");

        } else if (hours[i] < currentTime) {
            hourBlock.addClass("past");
        } else {
            hourBlock.addClass("future");
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

