console.log("** Soma de dois numeros**");

let primeiroNumero = prompt("Digite o primeiro numero"); //prompt sempre ira retornar string
let segundoNumero = prompt("Digite o segundo numero");

let soma = parseInt(primeiroNumero) + parseInt (segundoNumero); //parseint converte para numero

console.log("soma: ", soma); 
console.log("\n");
console.log("Tipo da variavel 'soma': " );

//usar sempre o let(variavel) no javascript, o let respeita o escopo da função, aceita reatribuir um novo valor.
//constante usa o const, nao pode ser retribuido.nao pode reatribuir uma variavel.que tambem respeita o escopo.

/* tipo de variavel

    string
    number
    bolean
*/