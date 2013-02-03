Meteor.methods({
	getMMAddr: function (target){
		return "multimedia/us_hwd/banana.mp3";
	},

  getMultiMedia: function (target) {
  	var searchResult = MultiMedia.find({file: target});
  	if (searchResult) {
  		return searchResult;
  	} else {
	    var mmURL = "https://api.pearson.com/longman/dictionary/0.1/" + getMMAddr(target) + "?apikey=e8d52ef4a973002f8f8d9cee12a6c213" //2884334e050d5be2e5f001d00b4f1d28";
	    Meteor.http.get(mmURL, function (err, response){
	      MultiMedia.insert({file: response.content});
	      return response.content;
	    });
  	}
  }
});
