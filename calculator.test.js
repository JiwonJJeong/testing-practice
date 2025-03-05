import {calculator} from "./calculator.js"

test("calculator add 2+3=5", () => {
    expect(calculator.add(2,3)).toBe(5);
})

test("calculator add 7+12=19", () => {
    expect(calculator.add(7,12)).toBe(19);
})

test("calculator subtract 6-2=4", () => {
    expect(calculator.subtract(6,2)).toBe(4);
})

test("calculator subtracts negative numbers", () => {
    expect(calculator.subtract(5,-5)).toBe(10);
})

test("calculator multiply 5*2=10", () => {
    expect(calculator.multiply(2,3)).toBe(5);
})

test("calculator multiply negative numbers", () => {
    expect(calculator.multiply(3,-3)).toBe(-9);
})

test("calculator divide integers", () => {
    expect(calculator.divide(12,4)).toBe(3);
})

test("calculator divide with remainder", () => {
    expect(calculator.divide(12,5)).toBe(2.4);
})