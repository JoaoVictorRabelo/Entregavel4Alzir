function contagem(N,listaNota){
    var N = N; 
    var Nota = listaNota;
    var Contador = 0;
    var i = 0;

    while (i < N) {
      if (Nota[i] >= 6) {
     Contador = Contador + 1;
       }

      i = i + 1;
     }
     return (Contador);
}
    module.exports = contagem