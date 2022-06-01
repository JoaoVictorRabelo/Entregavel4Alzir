function Fibonacci(n){
    var n = n
    
    var valorA = 0;
    var valorB = 1;
    var valorC = 1;
    var resultados = (valorA + " " + valorB);
    
    for (i = 2; i <= n; i++)
    {
        valorC = valorA + valorB;
        resultados += (" " + valorC);
        valorA = valorB;
        valorB = valorC;
    }
    return (resultados);
}
module.exports = Fibonacci