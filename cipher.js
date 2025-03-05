const caesarCipher = function(string, shiftNum){
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for (const char of string){
        let lowerChar;
        if (isUpperCase(char)){
            lowerChar = char.toLowerCase();
        } else{
            lowerChar = char;
        }
        let newCharIndex = ALPHABET.indexOf(lowerChar);
        // if not an alphabet char..
        let newChar;
        if (newCharIndex == -1){
            newChar = char;
        } else{
            newChar = ALPHABET.at((newCharIndex+shiftNum)%26);
        }
        if (isUpperCase(char)){
            newChar = newChar.toUpperCase();
        }
        newString += newChar;
    }
    return newString;
}

const isUpperCase = function(char){
    return char === char.toUpperCase();
}

export {caesarCipher};