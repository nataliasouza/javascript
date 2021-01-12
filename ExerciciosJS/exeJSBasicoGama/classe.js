class matematica {
    soma (valorA, valorB) {
        return valorA + valorB;
    }
    subtracao (valorA, valorB) {
        return valorA - valorB;
    }
}

var instaciaMatematica = new matematica();
var resultado = instaciaMatematica.soma(3,10);
var resultadoSub = instaciaMatematica.subtracao(10,7);

console.log(resultado);
console.log(resultadoSub);
