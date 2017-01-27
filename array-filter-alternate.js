function getShortMessages(messages) {
  var isValid = true;

  if (messages instanceof Array === true) {
    isValid = messages.every(function isMessageObject(object) {
      return Object.prototype.hasOwnProperty.call(object, 'message');
    });
  }
  else {
    isValid = false;
  }

  if (isValid) {
    var filteredMessages = messages.filter(function (element) {
      return element.message.length < 50;
    });
    var shortMessages = filteredMessages.map(function (element) {
      return element.message;
    });
    return shortMessages;
  }
  else {
    var errorMessage = 'Input is incorrect. It is supposed to be array of objects with message property';
    return errorMessage;
  }
}

module.exports = getShortMessages