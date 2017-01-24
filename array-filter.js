function getShortMessages(messages) {
    if(messages instanceof Array === true){
        var filteredMessages = messages.filter( function(element){
                return element.message.length < 50;
            });
        var shortMessages = filteredMessages.map(function(element){
                return element.message;
            });
        return shortMessages;   
    } else {
       var error = 'Input is incorrect. It is supposed to be array of objects with message property';
        return error;
    }   
}

module.exports = getShortMessages