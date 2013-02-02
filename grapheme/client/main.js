Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});


var sentence = "The quick brown";
sentence = sentence.toLowerCase();
var sentenceArray = sentence.split(" ");
// TO IMPLEMENT
// function checkSpelling() {
// 	// check that a word is a valid word with valid spelling via a local spellchecker which will save on api calls
// }
// checkspelling() // either within a seperate for loop, or more likely inserted into the loop below

for (var i = 0; i <= sentenceArray.length; i++) {
	Meteor.call("longmanAPICall", sentenceArray[i], function(error, results) {
			var entry = results.content;
	    // console.log(entry); 
	    return entry;
	});
}

// var word = "after";


