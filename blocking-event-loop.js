function repeat(operation, maxNumberOfTimes) {
  if (maxNumberOfTimes <= 0) return
  
  operation();

  if (maxNumberOfTimes % 10 === 0) {
    setTimeout(function () {
      repeat(operation, --maxNumberOfTimes);
    });
  } else {
    return repeat(operation, --maxNumberOfTimes)
  }
}

module.exports = repeat