UserDict = new Meteor.Collection("UserDictionary");

console.log(UserDict.find({word:"apple"}));

// LastPhrase = new Meteor.Collection("lastPhrase");

 // UserDict.insert({word:"apple", entry:{"Entries":{"Entry":{"@id":"6e2b450a_114ee8912f5_41fc","Ref":{"@resource":"etymologies","@topic":"00994"},"Head":{"HWD":{"#text":"apple"},"HYPHENATION":{"#text":"ap‧ple"},"FREQ":[{"#text":"S2"},{"#text":"W3"}],"PronCodes":{"PRON":{"#text":"ˈæp<i>ə<\/i>l"}},"POS":{"#text":"noun"}},"Sense":[{"@id":"6e2b450a_114ee8912f5_4205","GRAM":{"#text":"uncountable and countable"},"DEF":{"#text":"a hard round fruit that has red, light green, or yellow skin and is white inside"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_4209","#text":"apple pie","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000944636.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000944636.mp3"}},{"@id":"6e2b450a_114ee8912f5_420a","#text":"an apple tree","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001671984.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001671984.mp3"}},{"@id":"6e2b450a_114ee8912f5_420b","#text":"roast pork and apple sauce ","GLOSS":{"#text":"a thick sauce made from cooked apples"},"multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001671985.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001671985.mp3"}}],"Crossref":{"Crossrefto":[{"@href":"6e2b450a.1150373ac67.5bf1","REFHWD":{"#text":"cooking apple"}},{"@href":"6e2b450a.115037ec1b8.-7985","REFHWD":{"#text":"eating apple"}}]}},{"@id":"6e2b450a_114ee8912f5_4212","LEXUNIT":{"#text":"be the apple of sb’s eye"},"DEF":{"#text":"to be loved very much by someone"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_4216","#text":"Ben was always the apple of his father’s eye.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000944643.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000944643.mp3"}}},{"@id":"6e2b450a_114ee8912f5_4217","LEXUNIT":{"#text":"bob\/dunk\/dip for apples"},"DEF":{"#text":"to play a game in which you must use your teeth to pick up apples floating in water"}},{"@id":"6e2b450a_114ee8912f5_421b","LEXUNIT":{"#text":"be as American as apple pie"},"DEF":{"#text":"used to describe something that is typically American"}},{"@id":"6e2b450a_114ee8912f5_421e","LEXUNIT":{"#text":"the apple doesn’t fall far from the tree"},"GEO":{"#text":"American English"},"DEF":{"#text":"used to say that children are usually similar to their parents, especially in a bad way"}}],"Tail":{"Crossref":{"Crossrefto":[{"@href":"6e2b450a.11504595e24.1e0f","REFLEX":{"#text":"upset the apple cart"},"REFHWD":{"#text":"upset"},"REFHOMNUM":{"#text":"1"},"REFSENSENUM":{"#text":"4"}},{"@href":"6e2b450a.115043d5839.4185","REFLEX":{"#text":"a rotten apple"},"REFHWD":{"#text":"rotten"},"REFHOMNUM":{"#text":"1"},"REFSENSENUM":{"#text":"7"}},{"@href":"6e2b450a.114ee8912f5.-10b2","REFHWD":{"#text":"Adam’s apple"}},{"@href":"262cc60a.1180416d392.6317","REFHWD":{"#text":"Big Apple"}}]},"ColloBox":{"@class":"DVD","Section":[{"SECHEADING":{"#text":"adjectives"},"Collocate":[{"COLLOC":{"#text":"juicy"},"COLLEXA":{"#text":"a juicy green apple"}},{"COLLOC":{"#text":"sweet"},"COLLEXA":{"#text":"This apple’s really sweet and delicious."}},{"COLLOC":{"#text":"sour\/tart"},"COLLGLOSS":{"#text":"not at all sweet"},"COLLEXA":{"@class":"DVD","#text":"Some people prefer a slightly sour apple."}},{"COLLOC":{"#text":"rotten"},"COLLGLOSS":{"#text":"bad, so that the skin goes brown"},"COLLEXA":{"@class":"DVD","#text":"There were a few rotten apples lying on the ground."}},{"COLLOC":{"#text":"an eating\/dessert apple"},"COLLGLOSS":{"#text":"one which is sweet enough to eat"},"COLLEXA":{"@class":"DVD","#text":"Use dessert apples for this recipe."}},{"COLLOC":{"#text":"a cooking apple"}},{"COLLOC":{"#text":"a baked apple"},"COLLGLOSS":{"#text":"one that has been cooked in the oven"}}]},{"SECHEADING":{"#text":"verbs"},"Collocate":[{"COLLOC":{"#text":"eat an apple"},"COLLEXA":{"#text":"Some people say that you should eat an apple every day."}},{"COLLOC":{"#text":"bite into an apple"},"COLLEXA":{"#text":"Sue bit into her apple with a loud crunch."}},{"COLLOC":{"#text":"munch on an apple"},"COLLGLOSS":{"#text":"eat it"},"COLLEXA":{"#text":"He was munching on an apple."}},{"COLLOC":{"#text":"peel an apple"},"COLLGLOSS":{"#text":"remove the skin"},"COLLEXA":{"@class":"DVD","#text":"Peel the apples and slice them finely."}},{"COLLOC":{"#text":"core an apple"},"COLLGLOSS":{"#text":"remove the middle part containing the seeds"},"COLLEXA":{"#text":"Core the apples and cut into quarters."}}]}]}},"multimedia":[{"@href":"\/multimedia\/us_hwd\/apple1.mp3","@type":"US_PRON","#text":"\/multimedia\/us_hwd\/apple1.mp3"},{"@href":"\/multimedia\/gb_hwd\/brelasdeapple.mp3","@type":"GB_PRON","#text":"\/multimedia\/gb_hwd\/brelasdeapple.mp3"},{"@href":"\/multimedia\/dvd_pics\/apple.jpg","@type":"DVD_PICTURES","#text":"\/multimedia\/dvd_pics\/apple.jpg"}]}}}
 //  })


// UserDictionary
/*
user clicks the parse button after filling in a sentence

run pos-js parse analysis

// CHANGED: add sentence to minimongo (LastPhrase?) with pos-js info - array with a 2 element array at each index ([0] = word, [1] = pos)

if/when user clicks a word, query userDictionary for the value (word). show "getting def" beach ball. 
	each word in the colored line will have a meteor mouseclick event handler (meteor.event.getelement(e)). this will hopefully return the value/word itself

if this word is in the UserDictionary, return the json. If not in userDictionary, then make api call and add the json object to the UserDictionary. 

query UserDictionary with the js-pos term, match to the correct entry. use the switch statement to determine what the associated pearson pos search term to return will be.

return the 1st definition within the correct entry.

draw to the screen.
*/


/*

*/


