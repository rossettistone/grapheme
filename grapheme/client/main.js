Template.content.events({
  'click input.btn' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    Meteor.call('parsePOS', string);
  },
  'mouseenter span': function (event) {
    Session.set('currentPOS', event.target.classList[1])
  },
  'click span': function (event) {
    var word = event.target.innerHTML; // could be the P or a child element
    Session.set('currentWord', word)
    Meteor.call("checkDb", word);
  }
});

Template.content.parsedArray = function () {
  var parseRes = Session.get('parsedWords');
  if (parseRes) {
    return parseRes;
  }
};

Template.content.rendered = function () {
  $('[rel=tooltip]').tooltip();
};

Template.content.hasUserInput = function () {
  return Session.get('parsedWords');
};

Template.content.partOfSpeech = function(){
  var returnPOS = Session.get('currentPOS');
  returnPOS = posToWord(returnPOS);
  return returnPOS;
};
