import {analyzeArray} from "./analyze.js";

test("returns object", () => {
    expect(typeof(analyzeArray([1]))).toBe("object");
})
