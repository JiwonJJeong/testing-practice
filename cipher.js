const caesarCipher = function(string, shiftNum){
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for (const char of string){
        newString += ALPHABET.at(ALPHABET.indexOf(char)+shiftNum);
    }
    return newString
}

export {caesarCipher};