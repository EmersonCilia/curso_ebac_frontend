const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 7 },
  { nome: "Diego", nota: 4 },
  { nome: "José", nota: 9 }
];

const igualOuMaiorQueSeis = alunos.filter(aluno => aluno.nota >= 6);

console.log(igualOuMaiorQueSeis);
