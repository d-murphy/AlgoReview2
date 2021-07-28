class ListNode {
  constructor(data){
    this.next = null;
    this.data = data; 
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; 
  }
  add(data){
    let node = new ListNode(data);
    let current;
    if(this.head == null){
      this.head = node;
    } else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(index,data){
    if(index<0 || index > this.size){
      return console.log("invalid index")
    } else {
      let node = new ListNode(data);
      let curr, prev; 
      curr = this.head;
      if(index ==0){
        node.next = this.head;
        this.head = node; 
      } else {
        curr = this.head;
        let it = 0; 
        while(it < index){
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size ++; 
    }
  }
  removeFrom(index){
    if(index<0 || index > this.size){
      return console.log("invalid index")
    } else {
      let curr, prev, it=0;
      curr = this.head;
      prev = curr;
      if(index==0){
        this.head = curr.next;
      } else {
        while (it < index){
          it++;
          prev = curr; 
          curr = curr.next;
        }
        prev.next = curr.next
      }
      this.size--;
      return curr.data;
    }
  }
  indexOf(data){
    let count = 0
    let curr = this.head;
    while(curr){
      if(curr.data == data){
        return count;
      }
      count ++;
      curr = curr.next;
    }
    return -1;
  }
  print(){
    let node = this.head;
    let nodeIndex = 0;
    while(node){
      console.log("Node Index: ", nodeIndex, " Node Data: ", node.data)
      nodeIndex +=1;
      node = node.next;
    }
  }

}

let newLL = new LinkedList();
console.log(newLL);
newLL.add(5)
newLL.add(70)
newLL.add(56)
newLL.insertAt(3, 560)
newLL.add(55)
newLL.print()
newLL.removeFrom(0)
newLL.print()
console.log("index of 560", newLL.indexOf(560))
console.log("index of 1000", newLL.indexOf(1000))
