Meteor.call('dictionary', "word")


var wordExistsInUserDict = function(word){

  return UserDict.findOne({word:word});
}




// Template.dictionary.word = function(){
//   return after.Entries.Entry[0].Head.HWD["#text"];
// }

//   Template.dictionary.partOfSpeech = function(){
//   return ;
// }

//   Template.dictionary.definition = function(){
//   return after.Entries.Entry[0].Sense[0].DEF["#text"];
// }