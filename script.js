const currentDayPlaceholder = $("#currentDay");
const timeInTimeBlocks = $(".input-group-text");
const timeBlockInput = $(".form-control");
const saveButton = $(".saveBtn");
let numericCurrentTime = parseInt(moment().format("H A"));


currentDayPlaceholder.append(moment().format('dddd, MMMM Do'));

function timeBlocksColorDeterminator() {

    localStorage.getItem("timeBlockNotes");

    for (let i = 0; i < timeInTimeBlocks.length; i++) {

        let numericTimeinTimeBlock = parseInt($(timeInTimeBlocks[i]).text());
        if ($(timeInTimeBlocks[i]).hasClass('pm')) {
            numericTimeinTimeBlock += 12;
        }
        if (numericCurrentTime === numericTimeinTimeBlock) {
            $(timeBlockInput[i]).addClass("present");
        } else if (numericCurrentTime > numericTimeinTimeBlock) {
            $(timeBlockInput[i]).addClass("past");
        } else {
            $(timeBlockInput[i]).addClass("future");
        }

    }
}

saveButton.on("click", function () {
    console.log("click");
    localStorage.setItem("timeBlockNotes", timeBlockInput[this.id].value);
})

timeBlocksColorDeterminator();