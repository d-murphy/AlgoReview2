class Queue {
  constructor(){
    this.items = []; 
  }
  enqueue(element){
    this.items.push(element)
  }
  dequeue(){
    if(this.items.length == 0){
      return console.log("underflow")
    } else {
      return this.items.shift()
    }
  }
  print(){
    let items = ""
    this.items.forEach(el => {
      items += el + " - "
    })
    console.log(items)
  }
}


// let newQ = new Queue();
// newQ.enqueue(3);
// newQ.enqueue(19);
// newQ.enqueue(50);
// newQ.enqueue(40);
// newQ.enqueue(15);
// newQ.print()
// console.log(newQ.dequeue())
// console.log(newQ.dequeue())
// newQ.print()