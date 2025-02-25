// Criando a classe Aluno
class Aluno {
    constructor(nome, idade) {
      // O constructor deve ser um método tradicional
      this.nome = nome;
      this.idade = idade;
    }
 
    estudar = () => console.log(`${this.nome} está estudando.`);
    feliz = () => console.log(`${this.nome} está feliz.`);
  }
 
  // Criando objetos (alunos)
  const pedro = new Aluno("Pedro", 15);
  const ana = new Aluno("Ana", 14);
 
  console.log(pedro.nome); // Pedro
  pedro.estudar(); // Pedro está estudando.

  console.log(ana.nome, ana.idade)

  console.log(ana.nome, ana.idade, ana.feliz)
  ana.feliz();
