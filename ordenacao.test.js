const Ordenacao = require("./Ordenacao");
test("Ordenacao 8",() =>{
    expect(Ordenacao([23,45,16,37,3,99,22])).toStrictEqual([ 3, 16, 22, 23, 37, 45, 99]);
})
