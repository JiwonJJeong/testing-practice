const analyzeArray = function(array){
    const getGreater = function(num1,num2){
        return Math.max(num1,num2);
    }
    const getLesser = function(num1,num2){
        return Math.min(num1,num2);
    }

    return {
        max: array.reduce(getGreater),
        min: array.reduce(getLesser),
    };
}

export {analyzeArray};