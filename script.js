//Objeto
let pessoa = {nome:"Mario",idade:44};

//Cópia do objeto original

let pessoaCopia = Object.assign({},pessoa);

pessoaCopia.idade = 13;

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoaCopia.nome);
console.log(pessoaCopia.idade);