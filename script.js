const currentDayPlaceholder = $("#currentDay");
const timeInTimeBlocks = $(".input-group-text");
const timeBlockInput = $(".form-control");

currentDayPlaceholder.append(moment().format('dddd, MMMM Do'));

function timeBlocksColorDeterminator() {

    for (let i = 0; i < timeInTimeBlocks.length; i++) {
        if (moment().format("h A") === $(timeInTimeBlocks[i]).text()) {
            $(timeBlockInput[i]).addClass("present");
        } else {
            if (parseInt(moment().format("h A")) > parseInt($(timeInTimeBlocks[i]).text())) {
                $(timeBlockInput[i]).addClass("past");
            } else {
                $(timeBlockInput[i]).addClass("future");
            }

        }
    }
}

timeBlocksColorDeterminator();