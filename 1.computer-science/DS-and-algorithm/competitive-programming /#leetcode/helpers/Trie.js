"use strict";
const ALPHABET_SIZE = 26;
class TrieNode {
    isWord;
    next;
    constructor(isWord = false, next = new Array(ALPHABET_SIZE)) {
        this.isWord = isWord;
        this.next = next;
        this.next.fill(null);
    }
}
class Trie {
    root;
    constructor(root = new TrieNode()) {
        this.root = root;
    }
    insertArray(arr) {
        arr.forEach((item) => {
            this.insert(item);
        });
    }
    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if (current.next[index] === null)
                current.next[index] = new TrieNode();
            current = current.next[index];
        }
        current.isWord = true;
    }
    search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if (current.next[index] === null)
                return false;
            current = current.next[index];
        }
        return current.isWord;
    }
}
const trie = new Trie();
trie.insertArray(["shakil", "hasan", "nabil", "ahmad", "book", "booked",]);
console.log(trie.root);
console.log(trie.search("nabil"));
