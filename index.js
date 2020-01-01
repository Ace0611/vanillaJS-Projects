/* Trie Data Structure */

let Node = function(){
    this.keys = new Map();
    this.end = false;
    this.setEnd = function(){
        this.end = true;
    }
    this.isEnd = function(){
        return this.end;
    }
}

let Trie = function(){
    this.root = new Node();

    this.add = function(input, node=this.root){
        if(input.length == 0){
            node.setEnd();
            return;
        } else if(!node.keys.has(input[0])){
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    };

    this.isWord = function(word){
        let node = this.root;
        while(word.length>1){
            if(!node.keys.has(word[0])){
                return false;
            }else{
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }
}

let inputEl = document.getElementsByTagName('input');

function handleUpdate(e){
    console.log(e);
}

inputEl.addEventListener('change', handleUpdate)

// let myTrie = new Trie();

// myTrie.add('book');
// myTrie.add('dork');
// myTrie.add('bat');
// myTrie.add('ball');
// myTrie.add('batting');

// myTrie.isWord('huha');
// myTrie.isWord('dork');
