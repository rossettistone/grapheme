Meteor.call('dictionary', "word")


var wordExistsInUserDict = function(word){

  return UserDict.findOne({word:word});
}

//TO DO: clicking a word makes a dictionary api call
Template.content.events({
  'click span': function (event) {
    var paragraph = event.currentTarget; // always a P
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentWord', event.srcElement.innerHTML)
  }
})

Template.content.partOfSpeech = function(){
  var returnPOS = Session.get('currentPOS');
  returnPOS = posToWord(returnPOS);
  return returnPOS;
}


Template.content.events({
  'mouseenter span': function (event) {
    var paragraph = event.currentTarget; // always a P
    console.log(event.target.classList[1])
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentPOS', event.target.classList[1])

  }
})


Template.dictionary.word = function(){
  var returnWord = Session.get('currentWord')
  return returnWord;
}
