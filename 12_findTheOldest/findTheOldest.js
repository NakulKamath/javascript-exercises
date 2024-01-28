const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    let oldestAge = 0;
    let oldest;
    for (let i = 0; i < array.length; i++) {
        let yearOfDeath = array[i].yearOfDeath || currentYear;
        let age = yearOfDeath - array[i].yearOfBirth;

        if (age > oldestAge) {
            oldestAge = age;
            oldest = array[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
