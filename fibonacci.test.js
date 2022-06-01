const Fibonacci = require("./Fibonacci");

test("Fibonacci ",() =>{
    expect(Fibonacci(4)).toBe("0 1 1 2 3");
})

test("Fibonacci ",() =>{
    expect(Fibonacci(2)).toBe("0 1 1");
})
