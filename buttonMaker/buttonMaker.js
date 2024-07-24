let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function applyChange() {
    let bgColorInputValue = bgColorInput.value;
    customButton.style.backgroundColor = bgColorInputValue;
    let fontWeightInputValue = fontWeightInput.value;
    customButton.style.fontWeight = fontWeightInputValue;
    let fontSizeInputValue = fontSizeInput.value;
    customButton.style.fontSize = fontSizeInputValue;
    let fontColorInputValue = fontColorInput.value;
    customButton.style.color = fontColorInputValue;
    let paddingInputValue = paddingInput.value;
    customButton.style.padding = paddingInputValue;
    let borderRadiusInputValue = borderRadiusInput.value;
    customButton.style.borderRadius = borderRadiusInputValue;
}