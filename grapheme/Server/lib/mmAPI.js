var getMMAddr = function (target){
  //TODO: Lookup URL from dictionary API call result
  return "multimedia/us_hwd/banana.mp3";
}

Meteor.methods({
  getMultiMedia: function (target) {
    // var searchResult = MultiMedia.findOne({file: target});
    var searchResult = ''
    if (searchResult) {
      return searchResult;
    } else {
      // Production key: 2884334e050d5be2e5f001d00b4f1d28
      // Sandbox key: e8d52ef4a973002f8f8d9cee12a6c213
      Session.set('audioURL', "https://api.pearson.com/longman/dictionary/0.1/" + getMMAddr(target) + "?apikey=e8d52ef4a973002f8f8d9cee12a6c213");
    }
  }
});
