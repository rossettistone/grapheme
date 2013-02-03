Meteor.startup(function () {
  console.log("startup block")
  LastPhrase.remove({});
  LastPhrase.insert({phrase: [["nothing", "NN"]]});
});

Meteor.methods({
  parsePOS: function (prePOS) {
    var words = new Lexer().lex(prePOS);
    var taggedWords = new POSTagger().tag(words);
    LastPhrase.update({}, {phrase: taggedWords});
  }
});
