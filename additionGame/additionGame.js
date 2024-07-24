let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let firstNumberValue = Math.ceil(Math.random() * 100);
let secondNumberValue = Math.ceil(Math.random() * 100);
firstNumber.textContent = firstNumberValue;
secondNumber.textContent = secondNumberValue;

function check() {
    let total = firstNumberValue + secondNumberValue;
    let userInputValue = userInput.value;
    if (total === parseInt(userInputValue)) {
        gameResult.textContent = "Congratulation! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}

function restart() {
    gameResult.textContent = "";
    userInput.value = "";
    firstNumberValue = Math.ceil(Math.random() * 100);
    secondNumberValue = Math.ceil(Math.random() * 100);
    firstNumber.textContent = firstNumberValue;
    secondNumber.textContent = secondNumberValue;

}