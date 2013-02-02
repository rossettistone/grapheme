if (Meteor.isServer) { // rev note: without this if, throws following error even though code is within the server folder: "Error {} Error: Can't make a blocking HTTP call from the client; callback required.""
	Meteor.methods({
	    longmanAPICall: function (word) {
	        this.unblock();
	        var url = "https://api.pearson.com/longman/dictionary/entry.json?q=" + word + "&apikey=2884334e050d5be2e5f001d00b4f1d28";
	        return Meteor.http.call("GET", url);
	    }
	});
}

// //conjunction gray #bbbbbb
// CC Coord Conjuncn           and,but,or

// //determiner light yellow #E6DB74
// DT Determiner               the,some

// //preposition purple #AE81FF
// IN Preposition              of,in,by
// TO ÒtoÓ                     to

// //adjective blue ##66D9EF
// JJ Adjective                big
// JJR Adj., comparative       bigger
// JJS Adj., superlative       biggest

// //nouns green #A6E22E
// NN Noun, sing. or mass      dog
// NNS Noun, plural            dogs
// CD Cardinal number          one,two
// POS Possessive ending       Õs

// //pronoun white #F8F8F0
// NNP Proper noun, sing.      Edinburgh
// NNPS Proper noun, plural    Smiths
// PP$ Possessive pronoun      my,oneÕs
// PRP Personal pronoun        I,you,she
// WDT Wh-determiner           which,that
// WP Wh pronoun               who,what
// WP$ Possessive-Wh           whose

// //predeterminer darker blue #0099bb
// PDT Predeterminer           all, both

// //adverb red/pink #F92672
// EX Existential there        there
// RB Adverb                   quickly
// RBR Adverb, comparative     faster
// RBS Adverb, superlative     fastest
// WRB Wh-adverb               how,where
// RP Particle                 up,off