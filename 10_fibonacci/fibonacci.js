const fibonacci = function(target) {
    target = +target;
    if (target==0) {
        return 0;
    } else if (target<0) {
        return "OOPS";
    }

    let arr = [0, 1];
    for (let i = 2; i <= target; i++) {
        arr[i] = arr[i-2]+arr[i-1];
    }
    return arr[target];
};

// Do not edit below this line
module.exports = fibonacci;
