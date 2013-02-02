Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});

var sentence = "The quick brown";
var sentenceArray = sentence.split(" ");

for (var i = 0; i <= sentenceArray.length; i++) {
	Meteor.call("longmanAPICall", sentenceArray[i], function(error, results) {
			var entry = results.content;
	    console.log(entry); 
	    return entry;
	});
}
// var word = "after";


