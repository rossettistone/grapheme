// TODO Modify getMMAddr to search the database when the database is ready.
var getMMAddr = function (target){
	return "multimedia/us_hwd/banana.mp3";
};

if (Meteor.isServer) {
	Meteor.methods({
		// Use this for returning the mp3.
	  getMultiMedia: function (target) {
	  	var searchResult = MultiMedia.find({name: target}).fetch();
	  	if (searchResult.length) {
	  		return searchResult[0].file;
	  	} else {
		    var mmURL = "https://api.pearson.com/longman/dictionary/0.1/" + getMMAddr(target) + "?apikey=e8d52ef4a973002f8f8d9cee12a6c213" //2884334e050d5be2e5f001d00b4f1d28";
		    Meteor.http.get(mmURL, function (err, response){
		      MultiMedia.insert({name: target, file: response.content});
		      return response.content;
		    });
	  	}
	  }

	  // Use this for no return.
	/*  getMultiMedia: function (target) {
	  	if (!MultiMedia.find({file: target}).fetch.length) {
		    var mmURL = "https://api.pearson.com/longman/dictionary/0.1/" + getMMAddr(target) + "?apikey=e8d52ef4a973002f8f8d9cee12a6c213" //2884334e050d5be2e5f001d00b4f1d28";
		    Meteor.http.get(mmURL, function (err, response){
		      MultiMedia.insert({name: target, file: response.content});
		    });
	  	}
	  }
	*/
	});
}