var Pessoa = /** @class */ (function () {
    function Pessoa(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    Pessoa.prototype.imprimir = function () {
        console.log("Nome: ".concat(this.nome, " - Email: ").concat(this.email));
    };
    return Pessoa;
}());
var cliente = new Pessoa("Abner", "abner@teste.com");
cliente.imprimir();
