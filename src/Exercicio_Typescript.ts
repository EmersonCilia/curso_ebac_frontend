const Multiplicacao = (num1: number, num2: number): number => num1 * num2 

function saudacao (nome: string): string {
    return `Olá ${nome}`
}

console.log(saudacao('João'));
console.log(Multiplicacao(2,3));