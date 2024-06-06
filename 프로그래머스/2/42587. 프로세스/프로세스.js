function solution(priorities, location) {
    class Queue {
        constructor() {
            this.queue = {};
            this.length = priorities.length;
            this.front = -1;
            this.rear = -1;
        }
        size() {
            return Object.keys(this.queue).length;
        }
        push(item) {
            this.rear = (this.rear+1)%this.length;
            this.queue[this.rear] = item;
        }
        pop() {
            this.front = (this.front+1)%this.length;
            var item = this.queue[this.front];
            delete this.queue[this.front]
            return item;
        }
    }
    var queue = new Queue();
    var priority = {};
    var copy = priorities.slice().sort((a, b) => a-b);
    for (let i = 0; i < priorities.length; i++) {
        queue.push(i);
    }
    var count = 0;
    while (queue.size() !== 0) {
        var process = queue.pop();
        if (priorities[process] >= copy[copy.length-1]) {
            copy.pop();
            count++;
            if (process === location) return count;
        } else {
            queue.push(process);
        }
    }
}