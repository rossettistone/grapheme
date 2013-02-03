// if (Meteor.isServer) {
// 	Meteor.methods({
// 		dbHasWord: function (word) {
// 			this.unblock();
// 			if (UserDict.findOne({word: word}) === null) { 
// 				return false; 
// 			} else {
// 				return true;
// 			}
// 		}		
// 	})
// }


if (Meteor.isServer) {
	Meteor.methods({
    longmanAPICall: function (word) {
      this.unblock();
      var url = "https://api.pearson.com/longman/dictionary/entry.json?q=" + word + "&apikey=2884334e050d5be2e5f001d00b4f1d28";
      return Meteor.http.call("GET", url);
    }
	});
}


// if (UserDict.findOne({word: "rocket"}) === null) {
// 		      } else {
//  	return UserDict.findOne({word: "rocket"});
//  }

