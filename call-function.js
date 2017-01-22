function duckCount() {
    var count = 0;
    var args = Array.from(arguments);
    for (var i = 0; i < args.length; i++) {
        var quackPresent = Object.prototype.hasOwnProperty.call(args[i],        'quack');
        if (quackPresent === true)
            count++;
    }
    return count;
}

module.exports = duckCount;

/*function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount*/