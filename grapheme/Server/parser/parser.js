Meteor.startup(function () {
  LastPhrase.insert({phrase: "nothing"});
  // code to run on server at startup
});

Meteor.methods({
  parsePOS: function (prePOS) {
    var words = new Lexer().lex(prePOS);
    var taggedWords = new POSTagger().tag(words);
    LiveCode.update({phrase: /.+/}, {phrase: taggedWords});
  }
});
