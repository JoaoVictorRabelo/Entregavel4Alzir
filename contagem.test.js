const contagem = require("./contagem");

test("contagem 5",() =>{
    expect(contagem(5,[6,9,4,2,7])).toBe(3);
})

test("contagem 2",() =>{
    expect(contagem(2,[6,2])).toBe(1);
})
