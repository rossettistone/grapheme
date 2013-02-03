Template.dictionary.events({
  'click input.audiobutton' : function (e) {
    var word = "banana"
    Meteor.call('getMultiMedia', word);
  }
});

var wordExistsInUserDict = function(word){
  return UserDict.findOne({word:word});
};

Template.dictionary.word = function(){
  var returnWord = Session.get('currentWord');
  return returnWord;
};

Template.dictionary.definition = function () {
  var word = Session.get('currentWord');
  var result = UserDictionary.findOne({word: word});
  if(result) {
    return result.entry;
  }
}

Template.dictionary.getAudio = function () {
  return Session.get('audioURL');
};
