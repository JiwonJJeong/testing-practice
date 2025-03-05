const capitalize = function(string){
    return string.slice(0,1).toUpperCase() + string.slice(1,string.length);
}

const reverseString = function(string){
    let charArray = string.split("");
    let reverseString = "";
    while (charArray.length >0){
        reverseString += charArray.pop();
    }
    return reverseString;
}

export {capitalize, reverseString};