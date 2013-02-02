if (Meteor.isServer) {
	Meteor.methods({
	    longmanAPICall: function () {
	        this.unblock();
	        return Meteor.http.call("GET", "https://api.pearson.com/longman/dictionary/entry.json?q=after&apikey=2884334e050d5be2e5f001d00b4f1d28");
	    }
	});
}