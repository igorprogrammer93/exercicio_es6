// Array de objetos representando os alunos e suas notas
const alunos = [
    { nome: 'Ana', nota: 7.5 },
    { nome: 'João', nota: 5.3 },
    { nome: 'Mariana', nota: 8.0 },
    { nome: 'Carlos', nota: 4.8 },
    { nome: 'Paula', nota: 6.0 },
  ];
  
  // Função para filtrar alunos com nota maior ou igual a 6
  const filtrarAprovados = (listaAlunos) => listaAlunos.filter(aluno => aluno.nota >= 6);
  
  // Chamando a função e armazenando o resultado
  const aprovados = filtrarAprovados(alunos);
  
  // Exibindo os alunos aprovados no console
  console.log('Alunos aprovados:', aprovados);
  