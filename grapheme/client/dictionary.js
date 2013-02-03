Meteor.call('dictionary', "word")


var wordExistsInUserDict = function(word){

  return UserDict.findOne({word:word});
}


Template.content.events({
  'click span': function (event) {
    var paragraph = event.currentTarget; // always a P
    console.log(event.srcElement.innerHTML)
    var clickedElement = event.target; // could be the P or a child element
    Session.set('currentWord', event.srcElement.innerHTML)
  }
})



Template.dictionary.word = function(){
  var returnWord = Session.get('currentWord')
  return returnWord
  // if(returnWord.entry.Entries.Entry[0].Head.HWD["#text"] != undefined){
    // return returnWord.entry.Entries.Entry[0].Head.HWD["#text"];
    // } 
}

//   Template.dictionary.partOfSpeech = function(){
//   return ;
// }

//   Template.dictionary.definition = function(){
//   return after.Entries.Entry[0].Sense[0].DEF["#text"];
// }