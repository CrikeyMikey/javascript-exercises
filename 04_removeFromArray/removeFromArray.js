const removeFromArray = function(...args) {
    let toRemove = args.splice(1, args.length);
    let result = args[0].filter(num => !toRemove.includes(num));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
