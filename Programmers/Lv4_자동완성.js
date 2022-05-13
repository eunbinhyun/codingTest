class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
        this.hits = 1;
    }    
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(string) {
        let nodes = this.root.children;
        string.split("").forEach((ch, i) => {
            if (nodes.has(ch)) {
                nodes.get(ch).hits++;
                nodes = nodes.get(ch).children;                           
            }
            else {
                const newNode = new Node(string.slice(0, i + 1));
                nodes.set(ch, newNode);
                if (i === string.length-1) newNode.isLastChar = true;
                 nodes = newNode.children;  
            }
        });
    }
    
    find(string) {
        let cnt = 1;
        let nodes = this.root.children;
        for (const ch of string) {
            if (nodes && nodes.has(ch) && 
               (nodes.get(ch).value === string || nodes.get(ch).hits === 1)) {
                return cnt;
            }
            nodes = nodes.get(ch).children; 
            cnt++; 
        }    
        return cnt;
    }
}

function solution(words) {
    let answer = 0;
    const trie = new Trie();
    words.forEach(word => trie.insert(word));
    words.forEach(word => answer += trie.find(word));        
    return answer;
}
