const sumAll = function(start, end) {

   
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0) return "ERROR";
    if(start%2 != 0 || end % 2 != 0) return "ERROR";
    if(start > end){
        let temp = start;
        start = end;
        end = temp;  
    }
    let sum = 0;

    for(i=start;i<=end;i++){
        sum = sum + i;
    }
    return sum;
};

sumAll(10,"90");

// Do not edit below this line
module.exports = sumAll;
