Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});

var hasWord
	, word = "banana";

console.log(word)

if (UserDict.findOne({word: word}) === (null || undefined)) { 
	hasWord = false; 
} else {
	hasWord = true;
}

// var hasWord = Meteor.call("dbHasWord", word);
console.log(hasWord);


// Meteor.call("longmanAPICall", word, function(error, results) {
// 		longmanEntry = results.content;
//     console.log("longmanEntry = " + longmanEntry); 
// 		json = {word: word, entry: longmanEntry};
//     UserDict.insert(json)
//     return longmanEntry;
// });
