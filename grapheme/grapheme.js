if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to grapheme.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    parsePOS: function (prePOS) {
      var words = new Lexer().lex(prePOS);
      var taggedWords = new POSTagger().tag(words);
      LiveCode.update({phrase: /.+/}, {phrase: taggedWords});
      };
    },

    PearsonAPI: function (word, POS) {
      // TODO build dictionary call method.
      // for (i in taggedWords) {
      //   var taggedWord = taggedWords[i];
      //   var word = taggedWord[0];
      //   var tag = taggedWord[1];
      //   // TODO test if word in dictionary.
      //   // TODO figure out what to return to client.
      //   console.log(word + " /" + tag);
    }
  });

  Meteor.startup(function () {
    LastPhrase.insert({phrase: "nothing"});
    // code to run on server at startup
  });
}
