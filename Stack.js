class Stack {
  constructor(){
    this.items = [];
  }
  push(element){
    this.items.push(element)
  }
  pop(){
    if(this.items.length==0){
      return console.log("underflow")
    }
    return this.items.pop()
  }
  peek(){
    return this.items[this.items.length-1]
  }
  print(){
    this.items.forEach((el,index)=> {
      console.log("index: ", index, " - data: ", el)
    })
  }
}

let newStack = new Stack()
newStack.push(7);
newStack.push(88);
newStack.push(1);
newStack.push(4);
newStack.pop();
console.log(newStack.peek())
newStack.print()