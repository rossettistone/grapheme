if (Meteor.isServer) {
	Meteor.methods({
		checkDb: function (word) {
			// console.log("word = " + word);
			// this.unblock();
			if (UserDictionary.findOne({word: word}) === undefined) { 
				console.log(word + ": query returned undefined");
				longmanAPICall(word) //, function(error, results) {
					// 	longmanEntry = results.content;
				 //    console.log("longmanEntry = " + longmanEntry); 
					// 	json = {word: word, entry: longmanEntry};
				 //    UserDictionary.insert(json)
		   //  		return longmanEntry;	});
		  } else {
				console.log(word + ": query returned an object");
				console.log(UserDictionary.findOne({word: word}));
				return UserDictionary.findOne({word: word});
			}
		}		
	})
}

// if (Meteor.isServer) {
	function longmanAPICall(word) {
		console.log("in longmanAPICall, word = " + word);
	  // this.unblock();
	  var url = "https://api.pearson.com/longman/dictionary/entry.json?q=" + word + "&apikey=2884334e050d5be2e5f001d00b4f1d28";
	  console.log("url = " + url);
	  // return Meteor.http.call("GET", url);

	  results = Meteor.http.call("GET", url);
		longmanEntry = results.content;
    console.log("longmanEntry = " + longmanEntry); 
		json = {word: word, entry: longmanEntry};
    UserDictionary.insert(json)
		return longmanEntry;
	}
// }
