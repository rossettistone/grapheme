var getMMAddr = function (target){
  //TODO: Lookup URL from dictionary API call result
  return "multimedia/us_hwd/banana.mp3";
}

Meteor.methods({
  getMultiMedia: function (target) {
    // Production key: 2884334e050d5be2e5f001d00b4f1d28
    // Sandbox key: e8d52ef4a973002f8f8d9cee12a6c213
    Meteor.http.get('https://api.pearson.com/longman/dictionary/entry.json?q=' + target + '&apikey=2884334e050d5be2e5f001d00b4f1d28', function (error, result) {
      console.log(result.data.Entries.Entry[0].multimedia[0]['@href'])
      var urlFragment = result.data.Entries.Entry[0].multimedia[0]['@href'];
      Session.set('audioURL', "https://api.pearson.com/longman/dictionary/0.1/" + urlFragment + "?apikey=2884334e050d5be2e5f001d00b4f1d28");
    });
  }
});
