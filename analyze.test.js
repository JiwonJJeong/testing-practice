import {analyzeArray} from "./analyze.js";

test("returns object", () => {
    expect(typeof(analyzeArray([1]))).toBe("object");
})

const obj1 = analyzeArray([1,8,3,4,2,6]);
const obj2 = analyzeArray([2,4,2,4]);

test("min property is minimum for obj1", () =>{
    expect(obj1.min).toBe(1);
})

test("min property is minimum for obj2", () =>{
    expect(obj2.min).toBe(2)
})

test("max property is maximum for obj1", () =>{
    expect(obj1.max).toBe(8);
})

test("max property is maximum for obj2", () =>{
    expect(obj2.max).toBe(4);
})