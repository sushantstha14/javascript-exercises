const reverseString = function(text) {
   /* const myArray = text.split("");
    let popResult = "";
    let result = "";
    
    for(i = 0;i < text.length;i++){
         popResult = myArray.pop();
         result += popResult;
        
    }
    return result;*/

    return text.split("").reverse().join("");
    
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
