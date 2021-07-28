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
const hashCode = function(str) {
    var hash = 0;
    if (str.length == 0) {
        return hash;
    }
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
    }
    return hash;
}

log(hashCode("Evan") % 25)
log(hashCode("dan") % 25)
log(hashCode("Dan") % 25)

function log(x){console.log(x)}

class HashTable {
  constructor(){
    this.items = []; 
    this.size = 25;
  }
  addEl(el){
    let hashCode = this.hashCode(el)
    let index = hashCode % this.size
    let ptr = this.items[index]
    if(ptr){
      while(ptr.next != null){
        ptr = ptr.next
      }
      let newNode = new Node(el)
      ptr.next = newNode;
    } else {
      this.items[index] = new LinkedList()
      this.items[index].data = el;
    }
  }
  print(){
    console.log(this.items)
  }
  hashCode (str) {
    var hash = 0;
    if (str.length == 0) {
        return hash;
    }
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
    }
    return hash;
  }
}

let hash = new HashTable()
hash.addEl("abc")
hash.addEl("fff")
hash.addEl("eee")
hash.addEl("cda")
hash.print()




