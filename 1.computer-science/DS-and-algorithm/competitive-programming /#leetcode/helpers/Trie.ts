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

    isEmpty(node: TrieNode = this.root) {
        for (let i = 0; i < ALPHABET_SIZE; i++) {
            if (node.next[i]) return false
        }
        return true;
    }

    remove(word: string) {
        this.remove_recursion(this.root, word, 0);
    }

    remove_recursion(current: TrieNode | null, word: string, depth: number) {
        if (!current) return null;
        if (word.length === depth) {
            current.isWord = false;
            if (this.isEmpty(current)) current = null
            return current;
        }
        let index = word[depth].charCodeAt(0) - "a".charCodeAt(0);
        current.next[index] = this.remove_recursion(current.next[index], word, depth + 1);
        if (this.isEmpty(current) && !current.isWord) current = null
        return current;
    }
}

const trie = new Trie();
trie.insertArray(["shakil", "hasan", "nabil", "ahmad", "book", "booked",])
console.log(trie.root);
console.log(trie.search("nabil"));
trie.remove("book")
console.log(trie.search("book"));
