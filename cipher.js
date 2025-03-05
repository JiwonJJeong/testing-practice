const caesarCipher = function(string, shiftNum){
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for (const char of string){
        if (isUpperCase(char)){
            let newIndex = (ALPHABET.indexOf(char.toLowerCase())+shiftNum)%26;
            newString += ALPHABET.at(newIndex).toUpperCase();
        } else{
            let newIndex = (ALPHABET.indexOf(char)+shiftNum)%26;
            newString += ALPHABET.at(newIndex);
        }
    }
    return newString;
}

const isUpperCase = function(char){
    return char === char.toUpperCase();
}

export {caesarCipher};