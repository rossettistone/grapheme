Template.content.events({
  'click input.btn' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    Meteor.call('parsePOS', string);
  },
  'click input.audiobutton' : function (e) {
    var word = "banana"
    Meteor.call('getMultiMedia', word);
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

Template.content.getAudio = function () {
  return Session.get('audioURL');
};
