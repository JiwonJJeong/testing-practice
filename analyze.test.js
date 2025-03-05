import {analyzeArray} from "./analyze.js";

test("returns object", () => {
    expect(typeof(analyzeArray([1]))).toBe("object");
})

const obj1 = analyzeArray([1,8,3,4,2,6]);
const obj2 = analyzeArray([2,4,2,4]);

test("min property is 1 for obj1", () =>{
    expect(obj1.min).toBe(1);
})

test("min property is 2 for obj2", () =>{
    expect(obj2.min).toBe(2)
})

test("max property is 8 for obj1", () =>{
    expect(obj1.max).toBe(8);
})

test("max property is 4 for obj2", () =>{
    expect(obj2.max).toBe(4);
})

test("average property is 4 for obj1", () =>{
    expect(obj1.average).toBe(4);
})

test("average property is 3 for obj2", () =>{
    expect(obj2.average).toBe(3);
})

test("length property is 6 for obj2", () =>{
    expect(obj1.length).toBe(6);
})

test("length property is 4 for obj2", () =>{
    expect(obj2.length).toBe(4);
})