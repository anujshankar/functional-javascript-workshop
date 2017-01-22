function countWords(inputWords){
     var result = inputWords.reduce(function(allWords,word) {
         if( word in allWords ){
             allWords[word]++;
         }
         else {
             allWords[word] = 1;
         }
         return allWords;
     },{});
    return result;
}

module.exports = countWords;