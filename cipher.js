const caesarCipher = function(string, shiftNum){
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for (const char of string){
        let newIndex = (ALPHABET.indexOf(char)+shiftNum)%26;
        newString += ALPHABET.at(newIndex);
    }
    return newString;
}

export {caesarCipher};