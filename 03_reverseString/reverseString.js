const reverseString = function(text) {
    const myArray = text.split("");
    let popResult = "";
    let result = "";
    
    for(i = 0;i < text.length;i++){
         popResult = myArray.pop();
         result += popResult;
        
    }
    return result;
    
};

reverseString(" ");

// Do not edit below this line
module.exports = reverseString;
