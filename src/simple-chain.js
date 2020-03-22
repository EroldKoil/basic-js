const chainMaker = {
  arr:[],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position)){
      if(position < 1 || position > this.arr.length){
        this.arr = [];
        throw new Error();
        return;
      }
      else{
        this.arr.splice(position - 1, 1);
      }
    }
    else{
      let removeIndex = this.arr.indexOf(position);
      if(removeIndex == -1){
        console.log('dont found position = ' + position);
        this.arr = [];
        throw new Error();
        return;
      }
      else{
       this.arr.splice(removeIndex, 1);
      }
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
   return this;
  },
  finishChain() {
    let str = '';
    for(let i = 0; i < this.arr.length-1; i++){
      str += `( ${this.arr[i]} )~~`;
    }
    str += `( ${this.arr[this.arr.length-1]} )`;
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;
