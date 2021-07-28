class ArrayList {
  constructor() {
    this.length = 0; 
    this.data = {};
  }
  push(value){
    this.data[this.length] = value;
    this.length ++;
  }
  pop() {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }
  get(index) { 
    return this.data[index];
  }
  _collapseTo(index){
    for(let i=index; i<this.length; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  delete(index){
    const ans = this.data[index];
    this._collapseTo(index)
    return ans;
  }
}

let newArrL = new ArrayList()
newArrL.push(4)
newArrL.push(1)
newArrL.push(3)
newArrL.push(70)
newArrL.push(60)
newArrL.push(10)
console.log(newArrL)
console.log(newArrL.get(2))
console.log(newArrL.pop())
console.log(newArrL.length)
console.log(newArrL.delete(0))
console.log(newArrL)
