const currentDayPlaceholder = $("#currentDay");
const timeInTimeBlocks = $(".input-group-text");
const timeBlockInput = $(".form-control");
const saveButton = $(".saveBtn");
let numericCurrentTime = parseInt(moment().format("H A"));
let notes = [];

currentDayPlaceholder.append(moment().format('dddd, MMMM Do'));

function timeBlocksColorDeterminator() {

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

function appStart() {

    if (localStorage.length !== 0) {
        notes = JSON.parse(localStorage.getItem("timeBlockNotes"));

        for (let i = 0; i < notes.length; i++) {

            timeBlockInput[parseInt(notes[i].id)].value = notes[i].value;

        }
        timeBlocksColorDeterminator();
    } else {
        timeBlocksColorDeterminator();
    }


}

saveButton.on("click", function () {
    console.log("click");
    notes.push({
        value: timeBlockInput[this.id].value,
        id: this.id
    })
    localStorage.setItem("timeBlockNotes", JSON.stringify(notes));
})

appStart();