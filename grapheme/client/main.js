Template.content.events({
  'click input.btn' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    Meteor.call('parsePOS', string);
  },
  'mouseenter span': function (event) {
    var paragraph = event.currentTarget; // always a P
    console.log(event.target.classList[1])
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentPOS', event.target.classList[1])
  }
});

word = "table"; //currentWord returned from the clickhandler
Meteor.call("checkDb", word);

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

//TO DO: clicking a word makes a dictionary api call
Template.content.events({
  'click span': function (event) {
    var paragraph = event.currentTarget; // always a P
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentWord', event.srcElement.innerHTML)
  }
});

Template.content.partOfSpeech = function(){
  var returnPOS = Session.get('currentPOS');
  returnPOS = posToWord(returnPOS);
  return returnPOS;
};
