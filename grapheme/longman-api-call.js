if (Meteor.isServer) {
  Meteor.methods({longmanAPICall: function (userId) {
    this.unblock();
    var url = "https://api.pearson.com/longman/dictionary/entry.json?q=" + word + "&apikey=2884334e050d5be2e5f001d00b4f1d28";
    var result = Meteor.http.call("GET", url,
                                  {params: {user: userId}});
    if (result.statusCode === 200)
       return true
    return false;
  }});
}



// pearson key: 2884334e050d5be2e5f001d00b4f1d28

// pearson templates
// https://api.pearson.com/longman/dictionary/entry.{format}?q={search_pattern}&jsonp={jsonp_callback}
// https://api.pearson.com/longman/dictionary/entry.json?q=after&apikey=75618aa23698fd6374a562e15f312a9c



// pearson 
// https://api.pearson.com/longman/dictionary/entry.json?q=after&apikey=2884334e050d5be2e5f001d00b4f1d28

// longmanAPICall: function() {}


///


// if (Meteor.isServer) {
//     Meteor.methods({
//         checkTwitter: function () {
//             this.unblock();
//             return Meteor.http.call("GET", "http://search.twitter.com/search.json?q=perkytweets");
//         }
//     });
// }

// //invoke the server method
// if (Meteor.isClient) {
//     Meteor.call("checkTwitter", function(error, results) {
//         console.log(results.content); //results.data should be a JSON object
//     });
// }

//

// Meteor.methods({checkTwitter: function (userId) {
//   this.unblock();
//   var result = Meteor.http.call("GET", "http://api.twitter.com/xyz",
//                                 {params: {user: userId}});
//   if (result.statusCode === 200)
//      return true
//   return false;
// }});


// // Example asynchronous HTTP call:

// Meteor.http.call("POST", "http://api.twitter.com/xyz",
//  {data: {some: "json", stuff: 1}},
//  function (error, result) {
//    if (result.statusCode === 200) {
//      Session.set("twizzled", true);
//    }
//  });