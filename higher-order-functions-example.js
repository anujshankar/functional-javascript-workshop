function repeat(operation, limit) {
    
    for (var i = 0; i < limit; i++) {
        operation();
    }
}

module.exports = repeat