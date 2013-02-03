Meteor.call('dictionary', "word")

var wordExistsInUserDict = function(word){
  return UserDict.findOne({word:word});
};

Template.dictionary.word = function(){
  var returnWord = Session.get('currentWord')
  return returnWord;
};

Template.dictionary.getAudio = function () {
  return Session.get('audioURL');
};
