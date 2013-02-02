Template.content.events({
  'click input.btn' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    Meteor.call('parsePOS', string);
    // var parsedString = Meteor.call('parsePOS', string);
    // Session.set('parseResults', parsedString);
  }
});

Template.content.parsedArray = function () {
  var parseRes = LastPhrase.findOne();
  if (parseRes) {
    // console.log(parseRes)
    console.log(parseRes.phrase);
    return parseRes.phrase;
    // return [['Apples', 'NN'],['bananas', 'NN'],['and', 'CC'],['pears', 'NN']]
  }
}