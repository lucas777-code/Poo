class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    apresentar = () => console.log(`Olá eu sou ${this.nome}`)
}
class Aluno extends Pessoa{
    apresentar = () => console.log(`${this.nome} está estudando.`)
}

class Professor extends Pessoa{
    apresentar = () => console.log(`${this.nome} está dando aula.`)
}
const Lucas = new Aluno("Lucas")
const raul = new Professor("Raul")

Lucas.apresentar();
raul.apresentar();