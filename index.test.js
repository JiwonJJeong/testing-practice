import {capitalize} from "./index.js";

test("capitalizes lower case 1", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes lower case 2", () => {
    expect(capitalize("world")).toBe("World");
});

