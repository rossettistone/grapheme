Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});

var word = "apple";

Meteor.call("longmanAPICall", word, function(error, results) {
		longmanEntry = results.content;
    console.log(longmanEntry); 
    UserDict.insert({word: "beatles", entry: longmanEntry})
    return longmanEntry;
});
