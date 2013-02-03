Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});

word = "banana";


Meteor.call("longmanAPICall", word, function(error, results) {
		longmanEntry = results.content;
    console.log("longmanEntry = " + longmanEntry); 
    console.log("word = " + word);
		json = {word: word, entry: longmanEntry};
    UserDict.insert(json)
    return longmanEntry;
});
