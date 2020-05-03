class treeNode{
  constructor(character=null) {
    this.character = character
    this.children = {}
    this.terminal = false
  }

  isTerminal(){
    //Return True if this prefix tree node terminates a string
    return this.terminal
  }

  numChildren(){
    //Return the number of children nodes this prefix tree node has
    //Determine how many children this node has
    let size = Object.keys(this.children).length;
    return size
  }

  hasChild(character){
    ///Return True if this prefix tree node has a child node that
    ///represents the given character amongst its children."""
    ///Check if given character is amongst this node's children
    return character in this.children
  }

  getChild(character){
    //Return this prefix tree node's child node that represents the given
    //character if it is amongst its children
    if (this.hasChild(character)){
      //Find child node for given character in this node's children
      return this.children[character]
    } 
    throw ReferenceError
  }

  addChild(character, childNode){
  //Add the given character and child node as a child of this node, or
  //raise ValueError if given character is amongst this node's children
    if (!(this.hasChild(character))){
        //Add given character and child node to this node's children
        this.children[character] = childNode
    }else{
        // throw ValueError(f'Child exists for character {character!r}')
        throw ReferenceError
    }
  }
}

export default treeNode;