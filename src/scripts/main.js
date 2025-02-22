const display = document.querySelector('.display');
const botoes = document.querySelectorAll('.btn');
const clearButton = document.getElementById('limpar');
const botaoIgual = document.getElementById('igual');

let inputAtual = '';

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const value = botao.textContent;

    if (botao.id === 'limpar') {
      inputAtual = '';
      updateDisplay();
      return;
    }

    if (botao.id === 'igual') {
      try {
        const resultado = eval(inputAtual);
        if (!isFinite(resultado)) {
          throw new Error('Operação Inválida'); 
        }
        inputAtual = parseFloat(resultado.toFixed(10)).toString();
      } catch (error) {
        inputAtual = 'Erro';
      }
      updateDisplay();
      return;
    }

    if (inputAtual === 'Erro') {
      inputAtual = '';
    }

    inputAtual += value;
    updateDisplay();
  });
});

function updateDisplay() {
  display.value = inputAtual;
}