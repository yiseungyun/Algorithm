function solution(progresses, speeds) {
    class queue {
        constructor() {
            this.q = {};
            this.front = -1;
            this.rear = -1;
        }
        size() {
            return this.rear-this.front;
        }
        push(item) {
            this.rear = this.rear+1;
            this.q[this.rear.toString()] = item;
        }
        pop() {
            if (this.front === this.rear) {
                return -1;
            }
            this.front++;
            var item = this.q[this.front.toString()];
            delete this.q[this.front.toString()];
            return item;
        }
    }
    var q = new queue();
    var result = [];
    for (let i = 0; i < speeds.length; i++) {
        q.push(progresses[i]);
    }
    
    while (q.size() !== 0) {
        for (let i = 0; i < speeds.length; i++) {
            if (q.q[i.toString()]) {
                q.q[i.toString()] += speeds[i];
            }
        }
        var count = 0;
        while (q.size() !== 0 && q.q[q.front+1] >= 100) {
            q.pop();
            count += 1;
        }
        if (count > 0) result.push(count);
    }
    return result;
}