const removeFromArray = function(array, ...elements) {
    // return array.filter((value) => {return !elements.includes(value)});
    let newarray = [];
    array.forEach((element) => {
        if (!elements.includes(element)) {
            newarray.push(element);
        }
    });
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
