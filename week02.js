// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x,y){
    return x+y
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = sum(5,5);

// Qual o valor atualizado dessa variável?
console.log(result);


// Declare uma nova variável, sem valor.
var noValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function value(number){
    noValue = number;
    return `O valor da variável agora é ${noValue}`
}