function doubleAll(numberArray){
    var doubledNumberArray = numberArray.map( function(element){
        return element * 2;
    });
    return doubledNumberArray;
}

module.exports = doubleAll;
