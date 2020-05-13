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
      ch = ch.toLowerCase()
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
    if (!node.isTerminal()){
      this.size += 1;
      node.terminal = true;
    }
    console.log('insert')
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
    for (let ch = 0; ch < string_arr.length; ch++) {
      if (node.hasChild(string_arr[ch])){
        node = node.getChild(string_arr[ch])
        depth += 1
      }
      else{
        console.log('no child')
        return [null, depth]
      }
    }
    return [node, depth]
  }

  /* Return a list of all strings stored in this prefix tree that start
    with the given prefix string. */
  complete(prefix){
    let completions = []
    // find node of prefix
    let node = this.findNode(prefix)[0]
    // console.log(node)
    // check if node is found
    if (node === null) {
      return [] //empty arr
    }
    // check if node is terminal
    if (node.isTerminal()) {
      completions.push(prefix)
    }
    // for each ch 
    Object.keys(node.children).forEach(ch => {
      let childNode = node.getChild(ch)
      this.traverse(childNode, prefix+ch, completions)
    });
    return completions
  }

  /* Return a list of all strings stored in this prefix tree */
  strings() {
    let all_strings = []
    let node = this.root
    // for each ch 
    Object.keys(node.children).forEach(ch => {
      let childNode = node.getChild(ch)
      this.traverse(childNode, ch, all_strings)
    });
    return all_strings
  }

  /* Traverse this prefix tree with recursive depth-first traversal.
  Start at the given node with the given prefix representing its path in
  this prefix tree and visit each node with the given visit function. */
  traverse(node, prefix, list) {
    if (node.isTerminal()) {
      list.push(prefix) //append prefix

    }
    if (node.numChildren() > 0) {
      Object.keys(node.children).forEach(ch => {
        let childNode = node.getChild(ch)
        this.traverse(childNode, prefix + ch, list)
      });
    }
  }

}

export default Trie;