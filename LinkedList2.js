class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0; 
  }
  addNode(node){
    if(!this.head){
      this.head = node; 
      this.length ++; 
    } else {
      let curNode = this.head; 
      while(curNode.next){
        curNode = curNode.next;
      }
      curNode.next = node;
      this.length ++; 
    }
  }
  insertAt(index, newNode){
    let curNode = this.head;
    let nextIndex = 1; 
    while(curNode.next && nextIndex < index){
      curNode = curNode.next;
      nextIndex++; 
    }
    if(nextIndex == index){
      let nextNode = curNode.next; 
      curNode.next = newNode; 
      newNode.next = nextNode; 
      return true; 
    } else {
      return false; 
    }
  }
  removeFrom(index){
    let curNode = this.head;
    let prev = null;
    let curInd = 0; 
    if(curNode && index == 0){
      this.head == curNode.next;
//      delete curNode;
      return true;
    }
    while (curNode && curInd < index){
      prev = curNode; 
      curNode = curNode.next;
      curInd ++; 
    }
    if(!curNode){
      return false;
    }
    prev.next = curNode.next;
//    delete curNode;
    return true;
  }
  print(){
    let curNode = this.head;
    while(curNode){
      console.log(curNode.data, " -> ")
      curNode = curNode.next;
    }
    console.log("null")
  }
}

let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(15);
let node4 = new Node(12.5)

let theList = new LinkedList();
theList.addNode(node1);
theList.addNode(node2);
theList.addNode(node3);
theList.print()
theList.insertAt(2,node4);
theList.print()
console.log(theList.insertAt(5,node4), "should be false")
console.log(theList.removeFrom(10), "should be false")
theList.removeFrom(2)
theList.print()