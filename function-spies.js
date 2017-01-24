function Spy(target, method) {
    var spy = {
      count: 0
    }
    var originalMethod = target[method];
    
    target[method] = function() {
        var argumentsArray = Array.prototype.slice.call(arguments);
        spy.count++;
        //return originalMethod.apply(target,argumentsArray);
        return originalMethod(argumentsArray);
    }

    return spy;
}


module.exports = Spy