import {caesarCipher} from "./cipher.js";

test("basic shift by 3", () => {
    expect(caesarCipher("abcd",3)).toBe("defg");
});

test("basic shift by 5", () => {
    expect(caesarCipher("npm",5)).toBe("sur");
})

test("shift wraps from z to a", () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
})