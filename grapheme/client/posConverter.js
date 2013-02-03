var check = function(pos){
  var partOfSpeech = ""
  switch (pos) {
   case "CC":
     partOfSpeech = "conjunction";
      break;
   case "DT":
     partOfSpeech = "determiner";
      break;
   case "IN": case "TO":
     partOfSpeech = "preposition";
      break;
   case "JJ": case "JJR": case "JJS":
     partOfSpeech = "adjective";
      break;
   case "NN": case "NNS": case "CD": case "POS":
     partOfSpeech = "noun";
      break;
   case "NNP": case "NNPS": case "PPS": case "PRP": case "WDT": case "WP": case "WPS":
     partOfSpeech = "pronoun";
      break;
   case "PDT":
     partOfSpeech = "predeterminer";
      break;
   case "EX": case "RB": case "RBR": case "RBS": case "WRB": case "RP":
     partOfSpeech = "adverb";
      break;
   case "UH":
     partOfSpeech = "interjection";
      break;
   case "VB": case "VBD": case "VBG": case "VBN": case "VBP": case "VBZ": case "MD":
     partOfSpeech = "verb";
      break;
   case "URL": case "LS": case "FW":
     partOfSpeech = "punctuation";
      break;
   default:
     partOfSpeech = "punctuation";
  }
  return partOfSpeech;
}