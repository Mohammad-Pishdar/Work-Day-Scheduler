const currentDayPlaceholder = $("#currentDay");
const timeInTimeBlocks = $(".input-group-text");
const timeBlockInput = $(".form-control");
const saveButton = $(".saveBtn");
let numericCurrentTime = parseInt(moment().format("h A"));


currentDayPlaceholder.append(moment().format('dddd, MMMM Do'));

function timeBlocksColorDeterminator() {
    for (let i = 0; i < timeInTimeBlocks.length; i++) {

        let numericTimeinTimeBlock = parseInt($(timeInTimeBlocks[i]).text());

        if (moment().format("h A") === $(timeInTimeBlocks[i]).text()) {
            $(timeBlockInput[i]).addClass("present");
        }
        if (numericCurrentTime > numericTimeinTimeBlock && $(timeInTimeBlocks[i]).hasClass("pm")) {
            $(timeBlockInput[i]).addClass("future");
        }
        if (parseInt(moment().format("h A")) > numericTimeinTimeBlock) {
            $(timeBlockInput[i]).addClass("past");
        }
        if (parseInt(moment().format("h A")) < numericTimeinTimeBlock) {
            $(timeBlockInput[i]).addClass("future");
        }

    }
}

saveButton.on("click", function () {
    console.log("click");
    localStorage.setItem("timeBlockNotes", timeBlockInput[this.id].value);
})

timeBlocksColorDeterminator();