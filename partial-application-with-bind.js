var slice = Array.prototype.slice;

function logger(namespace) {
    return console.log.bind(console, namespace);  
}

module.exports = logger;

/*return function modifiedLogger() {
        var argumentsArray = slice.call(arguments);
        var argumentsString = argumentsArray.join(' ');
        var newLogger = console.log.bind(null, namespace);
        newLogger(argumentsString);
    }*/