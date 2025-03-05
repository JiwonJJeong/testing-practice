import {capitalize, reverseString} from "./index.js";

test("capitalizes lower case 1", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes lower case 2", () => {
    expect(capitalize("world")).toBe("World");
});

test("reverses hello world", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses hello", () => {
    expect(reverseString("hello")).toBe("olleh");
});
