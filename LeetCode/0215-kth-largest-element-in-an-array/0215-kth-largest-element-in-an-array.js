/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    class maxHeap {
        constructor() {
            this.heap = [0];
            this.heap_length = 1;
        }
        insert = function(item) {
            this.heap.push(item);
            var location = this.heap_length;
            this.heap_length += 1;
            while (location > 1) {
                if (this.heap[location] > this.heap[Math.floor(location/2)]) {
                    var temp = this.heap[Math.floor(location/2)];
                    this.heap[Math.floor(location/2)] = this.heap[location];
                    this.heap[location] = temp;
                    location = Math.floor(location/2);
                } else {
                    break;
                }
            }
        }
        delete = function() {
            var item = this.heap[1];
            this.heap[1] = this.heap[this.heap_length-1];
            var location = 1;
            this.heap_length -= 1;
            while (2*location < this.heap_length && (this.heap[2*location] > this.heap[location] || this.heap[2*location+1] > this.heap[location])) {
                if (this.heap[2*location] > this.heap[2*location+1]) {
                    var temp = this.heap[location];
                    this.heap[location] = this.heap[2*location];
                    this.heap[2*location] = temp;
                    location = 2*location;
                } else {
                    var temp = this.heap[location];
                    this.heap[location] = this.heap[2*location+1];
                    this.heap[2*location+1] = temp;
                    location = 2*location+1;
                }
            }
            return item;
        }
    }
    var heap = new maxHeap();
    for (let i = 0; i < nums.length; i++) heap.insert(nums[i]);
    for (let i = 0; i < k-1; i++) heap.delete();
    return heap.delete();
};