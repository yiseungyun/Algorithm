
var MinStack = function() {
    this.stack = [];
    this.min = 2**31;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min >= val) {
        this.stack.push(this.min);
        this.min = val;
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        const popNubmer = this.stack.pop();
        if (popNubmer === this.min) {
            this.min = this.stack.pop();
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};