Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});

var sentence;
var word = "hello";

Meteor.call("longmanAPICall", word, function(error, results) {
		var entry = results.content;
    console.log(entry); 
    return entry;
});

