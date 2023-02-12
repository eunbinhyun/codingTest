class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(item) {
        this.queue[this.rear++] = item;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }
    getSize() {
        return this.rear - this.front;
    }
}

function pushNewNum(cnt, num, q, visited, target) {
    if (num > target) return;
    if (!visited.has(num)) {
        q.enqueue([num, cnt]);
        visited.add(num);
    }
}

function solution(x, y, n) {
    const visited = new Set();
    const queue = new Queue();
    queue.enqueue([x, 0]);
   while (queue.getSize()) {
        const [num, cnt] = queue.dequeue();
        if (num === y) {
            return cnt;
        }          
        pushNewNum(cnt + 1, num + n, queue, visited, y);        
        pushNewNum(cnt + 1, num * 2, queue, visited, y);        
        pushNewNum(cnt + 1, num * 3, queue, visited, y);       
    }
    return -1;
}
