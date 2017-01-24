function arrayMap(arrayToProcess, operationFunction) {

    var mapUsingReduce = arrayToProcess.reduce(function (accumalator, item) {
        accumalator.push(operationFunction(item));
        return accumalator;
    }, []);

    return mapUsingReduce;
}

module.exports = arrayMap;