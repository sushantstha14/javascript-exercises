const repeatString = function(text,times) {
    let result = "";
    for(i=0; i<times; i++){
      result += text;
    }
    return result;
    
    
};

repeatString("hello",10);

// Do not edit below this line
module.exports = repeatString;
