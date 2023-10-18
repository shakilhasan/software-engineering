const ALPHABET_SIZE = 26;

class TrieNode {
    constructor(public isWord: boolean = false, public next: any[] = new Array(ALPHABET_SIZE)) {
        this.next.fill(null);
    }
}

class Trie {
    constructor(public root: TrieNode = new TrieNode()) {
    }

    insertArray(arr: string[]) {
        arr.forEach((item) => {
            this.insert(item)
        })
    }

    insert(word: string) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if (current.next[index] === null) current.next[index] = new TrieNode();
            current = current.next[index];
        }
        current.isWord = true;
    }

    search(word: string) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if (current.next[index] === null) return false;
            current = current.next[index];
        }
        return current.isWord;
    }
}

const trie = new Trie();
trie.insertArray(["shakil", "hasan", "nabil", "ahmad", "book", "booked",])
console.log(trie.root);
console.log(trie.search("nabil"));
