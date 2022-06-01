function Mdc(ValorDeA,ValorDeB){
    var ValorDeA = ValorDeA
    var ValorDeB = ValorDeB

    for(let i = ValorDeA; i>0; i--){
       if (ValorDeA % i == 0 && ValorDeB % i == 0){
        return (i);
       }
    }
}
module.exports = Mdc