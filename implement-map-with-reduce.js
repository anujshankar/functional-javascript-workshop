function arrayMap(arrayToProcess, fn) {

    var mapUsingReduce = arrayToProcess.reduce(function (accumalator, item, index, arr) {
        accumalator.push(fn(item, index, arr));
        return accumalator;
    }, []);

    return mapUsingReduce;
}

module.exports = arrayMap;