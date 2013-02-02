Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // var parsedString = Meteor.call('parsePOS', string);
    // Session.set('parseResults', parsedString);
  }
});

Template.content.parsedArray = function () {
  // var parseRes = Session.get('parseResults');
  // return parseRes
  return [['Apples', 'NN'],['bananas', 'NN'],['and', 'CC'],['pears', 'NN']]
}