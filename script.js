document.addEventListener("DOMContentLoaded", () => {
    const binaryInput = document.getElementById("binary");
    const octalInput = document.getElementById("octal");
    const decimalInput = document.getElementById("decimal");
    const hexInput = document.getElementById("hexadecimal");

    const inputs = { binary: binaryInput, octal: octalInput, decimal: decimalInput, hex: hexInput };

    Object.values(inputs).forEach(input => {
        input.addEventListener("input", (e) => convertNumber(e.target.id));
    });

    document.getElementById("toggle-theme").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

function convertNumber(inputType) {
    const binaryInput = document.getElementById("binary");
    const octalInput = document.getElementById("octal");
    const decimalInput = document.getElementById("decimal");
    const hexInput = document.getElementById("hexadecimal");

    const binaryError = document.getElementById("binary-error");
    const octalError = document.getElementById("octal-error");
    const decimalError = document.getElementById("decimal-error");
    const hexError = document.getElementById("hexadecimal-error");

    let value = document.getElementById(inputType).value.trim();

    if (!value) {
        binaryInput.value = octalInput.value = decimalInput.value = hexInput.value = "";
        return;
    }

    let decimalValue;

    try {
        switch (inputType) {
            case "binary":
                if (!/^[01]+$/.test(value)) throw "Invalid Binary!";
                decimalValue = parseInt(value, 2);
                break;
            case "octal":
                if (!/^[0-7]+$/.test(value)) throw "Invalid Octal!";
                decimalValue = parseInt(value, 8);
                break;
            case "decimal":
                if (!/^\d+$/.test(value)) throw "Invalid Decimal!";
                decimalValue = parseInt(value, 10);
                break;
            case "hexadecimal":
                if (!/^[0-9a-fA-F]+$/.test(value)) throw "Invalid Hex!";
                decimalValue = parseInt(value, 16);
                break;
        }

        binaryInput.value = decimalValue.toString(2);
        octalInput.value = decimalValue.toString(8);
        decimalInput.value = decimalValue.toString(10);
        hexInput.value = decimalValue.toString(16).toUpperCase();

        binaryError.textContent = octalError.textContent = decimalError.textContent = hexError.textContent = "";
    } catch (err) {
        document.getElementById(`${inputType}-error`).textContent = err;
    }
}

function copyText(id) {
    const input = document.getElementById(id);
    input.select();
    document.execCommand("copy");
}
