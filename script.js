document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = document.getElementById('campoA').value;
    const num2 = document.getElementById('campoB').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.hidden = true;
    errorDiv.hidden = true;

    switch (true) {
        case num2 > num1:
            resultDiv.innerText = `O segundo número (${num2}) é maior que o primeiro número (${num1}).`;
            resultDiv.hidden = false;
            break;
        case num2 < num1:
            errorDiv.innerText = `O primeiro número (${num2}) é maior que o segundo número (${num1}), o primero número deve ser maior que o segundo.`;
            errorDiv.hidden = false;
            break;
        case num1 === num2:
            errorDiv.innerText = `Os dois números são iguais, o primero número deve ser maior que o segundo.`;
            errorDiv.hidden = false;
            break;
    }
});
