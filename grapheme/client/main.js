Template.content.events({
  'keyup input' : function (event) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    Meteor.call('parsePOS', string);
  },
  'mouseenter span': function (event) {
    Session.set('currentPOS', event.target.classList[1])
  },
  'click span': function (event) {
    var word = event.target.innerHTML; // could be the P or a child element
    Session.set('currentWord', word)
    Meteor.call("checkDb", word);
  }
});

Template.content.highlight = function () {
  if(Session.get('currentWord') === this[0]) {
    return "highlight";
  }
}

Template.content.parsedArray = function () {
  var parseRes = Session.get('parsedWords');
  if (parseRes) {
    return parseRes;
  }
};

Template.content.rendered = function () {
  $('[rel=tooltip]').tooltip();
};

Template.content.hasUserInput = function () {
  return Session.get('parsedWords');
};

Template.content.partOfSpeech = function () {
  var returnPOS = Session.get('currentPOS');
  returnPOS = posToWord(returnPOS);
  return returnPOS;
};

Template.analytics.rendered = function () {
  window._gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-38251628-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
};