function convertCustomBase() {
    let fromBase = parseInt(document.getElementById("from-base").value);
    let toBase = parseInt(document.getElementById("to-base").value);
    let fromNumber = document.getElementById("from-number").value.trim();
    let convertedNumberField = document.getElementById("converted-number");

    if (isNaN(fromBase) || isNaN(toBase) || fromBase < 2 || fromBase > 32 || toBase < 2 || toBase > 32) {
        alert("Please enter valid bases between 2 and 32.");
        return;
    }

    try {
        let decimalValue = parseInt(fromNumber, fromBase);
        if (isNaN(decimalValue)) throw "Invalid number for the selected base.";
        let convertedValue = decimalValue.toString(toBase).toUpperCase();
        convertedNumberField.value = convertedValue;
    } catch (error) {
        convertedNumberField.value = "Error";
    }
}
