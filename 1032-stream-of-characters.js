/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.trie = new Trie();
  this.charStr = '';

  for (let word of words) {
    this.trie.build(word)
  }

};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  for (let i = 0; i < letter.length; i++) {
    this.charStr += letter[i];
    return this.trie.search(this.charStr)
  }
};



class Trie {
  constructor() {
    this.root = {}
  }

  search(charStr) {
    let node = this.root;

    for (let i = charStr.length - 1; i >= 0; i--) {
      let letter = charStr[i];

      if (node[letter]) {
        if (node[letter]['stop']) {
          return true;
        }
        node = node[letter];
      } else {
        return false
      }
    }
    return false

  }

  build(word) {
    let node = this.root;
    for (let i = word.length - 1; i >= 0; i--) {

      if (!node[word[i]]) {
        node[word[i]] = {}
      }
      node = node[word[i]]
    }
    node['stop'] = true;
  }


}


let streamChecker = new StreamChecker(["cd", "f", "kl"]);
console.log(streamChecker.query("a")); // return False
console.log(streamChecker.query("b")); // return False
console.log(streamChecker.query("c")); // return False
console.log(streamChecker.query("d")); // return True, because 'cd' is in the wordlist
console.log(streamChecker.query("e")); // return False
console.log(streamChecker.query("f")); // return True, because 'f' is in the wordlist
console.log(streamChecker.query("g")); // return False
console.log(streamChecker.query("h")); // return False
console.log(streamChecker.query("i")); // return False
console.log(streamChecker.query("j")); // return False
console.log(streamChecker.query("k")); // return False
console.log(streamChecker.query("l")); // return True, because 'kl' is in the wordlist