function getShortMessages(messages) {
    var filteredMessages = messages.filter( function(element){
            return element.message.length < 50;
        });
    var shortMessages = filteredMessages.map(function(element){
            return element.message;
        });
    return shortMessages;       
}

module.exports = getShortMessages