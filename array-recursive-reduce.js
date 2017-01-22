var index = 0;
function reduce(arr, countWords, initialObject) {  
    if(index === arr.length) {
        return initialObject;
    }
    countWords(initialObject,arr[index],index,arr);
    index++;
    reduce(arr,countWords,initialObject);
    return initialObject;
}

module.exports = reduce;

/*
    function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }

    module.exports = reduce 
*/