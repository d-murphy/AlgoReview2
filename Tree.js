const LEFT = 0; 
const RIGHT = 1;

class TreeNode {
  constructor(val){
    this.val = val;
    this.descendants = [];
  }
  setLeft(node){
    this.descendants[LEFT] = node;
  }
  setRight(node){
    this.descendants[RIGHT] = node;
  }
  getLeft(){
    return this.descendants[LEFT]
  }
  getRight(){
    return this.descendants[RIGHT]
  }
}

const inOrderTraversal = function(node){
  if(node != null){
    inOrderTraversal(node.getLeft())
    console.log(node.val)
    inOrderTraversal(node.getRight())
  }
}
const preOrderTraversal = function(node){
  if(node!=null){
    console.log(node.val)
    preOrderTraversal(node.getLeft())
    preOrderTraversal(node.getRight())
  }
}

const postOrderTraversal = function(node){
  if(node!=null){
    postOrderTraversal(node.getLeft())
    postOrderTraversal(node.getRight())
    console.log(node.val)
  }
}


const tn1 = new TreeNode(1);
const tn2 = new TreeNode(2);
const tn3 = new TreeNode(3);
const tn4 = new TreeNode(4);
const tn5 = new TreeNode(5);

tn1.setLeft(tn3);
tn1.setRight(tn2);
tn3.setLeft(tn4);
tn3.setRight(tn5);

console.log("in order")
inOrderTraversal(tn1)
console.log("pre order")
preOrderTraversal(tn1)
console.log("post order")
postOrderTraversal(tn1)