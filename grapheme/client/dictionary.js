Meteor.call('dictionary', "word")


var wordExistsInUserDict = function(word){

  return UserDict.findOne({word:word});
}

//TO DO: clicking a word makes a dictionary api call
Template.content.events({
  'click span': function (event) {
    var paragraph = event.currentTarget; // always a P
    console.log(event.srcElement.innerHTML)
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentWord', event.srcElement.innerHTML)
  }
})


Template.content.events({
  'mouseenter span': function (event) {
    var paragraph = event.currentTarget; // always a P
    console.log(event.target.classList[1])
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentPOS', event.srcElement.innerHTML)
  }
})


Template.dictionary.word = function(){
  var returnWord = Session.get('currentWord')
  return returnWord;
}
