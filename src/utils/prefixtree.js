import treeNode from './prefixtreenode'

class Trie {
  constructor(strings= null){
    //Create a new root node with the empty character
    this.root = new treeNode('')
    //Count the number of strings inserted into the tree
    this.size = 0
    //Insert each string, if any were given
    if (strings !== null) {
      strings.forEach(string => {
        this.insert(string)
      });
    }
  }

  /* Return True if this prefix tree is empty (contains no strings) */
  isEmpty() {
    return this.size === 0
  }

  /*Return True if this prefix tree contains the given string.*/
  contains(string) {
    //find node of string
    const [node, depth] = this.findNode(string)
    //if depth equals length of return true
    if (depth === string.length && node.isTerminal()){
      return true
    }
    return false
  }

  /* Insert the given string into this prefix tree. */
  insert(string) {
    let node = this.root;
    //convert string into array to loop over character
    [...string].forEach(ch => {
      if (node.hasChild(ch)) {
        node = node.getChild(ch)
      }
      else{
        //create a new ch node
        let newNode = new treeNode(ch)
        node.addChild(ch, newNode)
        //reassign node
        node = newNode
      }
    })
    //check if new str was inserted
    if (!node.is_terminal()){
      this.size += 1;
      node.terminal = true;
    }
  }

  /* Return a pair containing the deepest node in this prefix tree that
  matches the longest prefix of the given string and the node's depth.
  The depth returned is equal to the number of prefix characters matched.
  Search is done iteratively with a loop starting from the root node */
  findNode(string) {
    if(string.length === 0) {
      return [this.root, 0]
    }
    //start with the root node
    let depth = 0
    let node = this.root
    //loop through the string
    let string_arr = [...string]
    string_arr.forEach(ch => {
      if (node.hasChild(ch)){
        node = node.getChild(ch)
        depth += 1
      }
      else{
        return [null, depth]
      }
    })
    return [node, depth]
  }


  complete(prefix){

  }

  strings() {

  }

  traverse() {

  }

  

}