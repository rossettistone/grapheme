Meteor.methods({
  parsePOS: function (prePOS) {
    var words = new Lexer().lex(prePOS);
    var taggedWords = new POSTagger().tag(words);
    Session.set('parsedWords', taggedWords)
  }
});
