const sumAll = function(startInt, endInt) {
    if (startInt<0||endInt<0||typeof (startInt+endInt) != "number") {
        return 'ERROR';
    }
    if (startInt > endInt) {
        let temp = startInt;
        startInt = endInt;
        endInt = temp;
    }
    let sum = 0;
    for (let i = startInt; i <= endInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
