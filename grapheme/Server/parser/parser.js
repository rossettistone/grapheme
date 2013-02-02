Meteor.startup(function () {
  LastPhrase.remove({});
  LastPhrase.insert({phrase: "nothing"});
});

Meteor.methods({
  parsePOS: function (prePOS) {
    var words = new Lexer().lex(prePOS);
    var taggedWords = new POSTagger().tag(words);
    LastPhrase.update({phrase: /.+/}, {phrase: taggedWords});
  }
});
