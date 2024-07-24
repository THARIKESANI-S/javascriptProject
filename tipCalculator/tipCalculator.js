let errorMessage = document.getElementById("errorMessage");

function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let percentageTip = document.getElementById("percentageTip").value;
    if (billAmount === "" || percentageTip === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
        errorMessage.style.color = "red";
    } else {
        errorMessage.textContent = "";
        let tipCalculated = (parseInt(percentageTip) / 100) * parseInt(billAmount);
        let totalAmountCalculated = parseInt(billAmount) + parseInt(tipCalculated);
        document.getElementById("tipAmount").value = tipCalculated;
        document.getElementById("totalAmount").value = totalAmountCalculated;
    }
}