class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val);
    if(this.root ===null){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode){
    if(newNode.val < node.val){
      if(node.left === null){
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  remove(val){
    this.root = this.removeNode(this.root, val)
  }
  removeNode(node, key){
    if(node === null){
      return null;
    } else if (key < node.val){
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.val){
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null){
        node = null; 
        return node; 
      } else if( node.left === null){
        node = node.right; 
        return node;
      } else if(node.right === null){
        node = node.left; 
        return node;
      } else {
        let aux = this.findMinNode(node.right);
        node.val = aux.val;
        node.right = this.removeNode(node.right, aux.val)
        return node
      }
    }
  }
  inorder(node){
    if(node!=null){
      this.inorder(node.left);
      console.log(node.val);
      this.inorder(node.right);
    }
  }
  findMinNode(node){
    if(node.left === null){
      return node; 
    } else {
      return this.findMinNode(node.left);
    }
  }
  search(node, val){
    if(node===null){
      return null;
    } else if(val < node.val){
      return this.search(node.left, val);
    } else if(val > node.val){
      return this.search(node.right, val);
    } else {
      return node;
    }
  }
}

let BST = new BinarySearchTree()

BST.insert(5)
BST.insert(1)
BST.insert(4)
BST.insert(7)
BST.insert(9)
BST.insert(-1)
BST.inorder(BST.root)
console.log(BST.findMinNode(BST.root))
console.log(BST.search(BST.root, 9))
BST.remove(4)
BST.inorder(BST.root)
console.log(BST.root)
BST.remove(5)
console.log(BST.root)
