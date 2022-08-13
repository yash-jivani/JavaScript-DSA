class MyStack {
  constructor() {
    this.mini;
    this.stack = [];
  }

  push(x) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.mini = x;
    } else {
      if (x < this.mini) {
        let calcX = 2 * x - this.mini;
        this.stack.push(calcX);
        this.mini = x;
      } else {
        this.stack.push(x);
      }
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return -1;
    } else {
      let curr = this.stack.pop();
      if (curr > this.mini) {
        return curr;
      } else {
        let prevMin = this.mini;
        let val = 2 * this.mini - curr;
        this.mini = val;
        return prevMin;
      }
    }
  }

  getMin() {
    if (this.stack.length === 0) {
      return -1;
    } else {
      return this.mini;
    }
  }
}
