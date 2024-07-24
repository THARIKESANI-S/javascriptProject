let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainer = document.getElementById("bgContainer");
let count = 0;

function changeColor() {
    if (count === bgColorsArray.length) {
        count = 0;
    } else {

        let color = bgColorsArray[count];
        bgContainer.style.backgroundColor = color;
        count += 1;
    }
}