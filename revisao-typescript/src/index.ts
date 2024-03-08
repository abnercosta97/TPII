
class Pessoa{
    nome: string;
    email: string;
    nasc: string;
    
    constructor(nome: string, email: string, nasc:string){
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    
    imprimir(): void{
        console.log(`Nome: ${this.nome} - Email: ${this.email} - Nascimento: ${this.nasc}`)
    }

    idade(nasc:any): number{
        const hoje = new Date();
        const nascimento = new Date(nasc);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if(mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
            idade--;
        }
        return idade;
    }
}

const cliente = new Pessoa("Abner", "abner@teste.com", "06/04/1997");

cliente.imprimir();

