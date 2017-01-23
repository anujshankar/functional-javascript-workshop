var slice = Array.prototype.slice;

function logger(namespace) {
    return modifiedLogger;

    function modifiedLogger() {
        var argumentsArray = slice.call(arguments);
        var argumentsString = argumentsArray.join(" ");
        var newLogger = console.log.bind(null, namespace);
        newLogger(argumentsString);
    }
}

module.exports = logger;

/*module.exports = function (namespace) {
    return console.log.bind(console, namespace)
}*/