function getShortMessages(messages) {

  var errorMessage = 'Input is incorrect. It is supposed to be array of objects with message property';

  if (messages instanceof Array === false) {
    return errorMessage;
  }

  for (var i = 0; i < messages.length; i++) {
    if (!messages[i].hasOwnProperty('message')) {
      return errorMessage;
    }
  }

  var filteredMessages = messages.filter(function (element) {
    return element.message.length < 50;
  });

  var shortMessages = filteredMessages.map(function (element) {
    return element.message;
  });

  return shortMessages;
}

module.exports = getShortMessages