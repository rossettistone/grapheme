Template.content.events({
  'click input.btn' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    Meteor.call('parsePOS', string);
  }
});

Template.content.parsedArray = function () {
  // var parseRes = LastPhrase.findOne();
  var parseRes = Session.get('parsedWords');
  if (parseRes) {
    console.log(parseRes)
    return parseRes;
  }
}