var slice = Array.prototype.slice;

function logger(namespace) {
    return function modifiedLogger() {
        var argumentsArray = slice.call(arguments);
        argumentsArray.unshift(namespace);
        console.log.apply(null,argumentsArray);
    }
}

module.exports = logger;