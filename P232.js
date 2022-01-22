var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
  return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length) this.stack2.push(this.stack1.pop());
  let poppedEle = this.stack2.pop();
  while (this.stack2.length) this.stack1.push(this.stack2.pop());
  return poppedEle;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack1.length) this.stack2.push(this.stack1.pop());
  let peekedEle = this.stack2.pop();
  this.stack2.push(peekedEle);
  while (this.stack2.length) this.stack1.push(this.stack2.pop());
  return peekedEle;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length ? false : true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
