grapheme 
========
| ˈgrafēm |

A grammar, dictionary, and pronunciation tool for English learners. Instant part-of-speech parsing, dictionary definitions, and clear audio pronunciations at your fingertips.

Leveraging the power of Meteor (with Meteorite), pos-js, and the Longman Dictionary API from Pearson, grapheme is an easy-to-use homework helper for students of the English language. Words and sentences input by the user are instantly parsed into parts of speech (e.g. 'noun', 'adjective', 'adverb') and highlighted in different colors for easy reference.

The user can click on individual words to get dictionary definitions (from Pearson's Longman Dictionary), and listen to pronunciation samples for difficult words.


### Installation

To simply try it out live, visit [graphe.me](http://graphe.me/)

If you're looking to fork and hack on this repo, read on...

Dependencies:
* [Meteor](http://meteor.com/)
* [Meteorite](http://oortcloud.github.com/meteorite/)
* [Pos-js](https://github.com/fortnightlabs/pos-js)
* [Wordnik API](http://developer.wordnik.com/)

1) [Install Meteor](https://github.com/meteor/meteor)

2) [Install Meteorite](https://github.com/oortcloud/meteorite)

3) Clone this repo into a local directory, then `cd` into that directory

4) Type `mrt` to start up the server, then navigate to localhost:3000 in your browser
