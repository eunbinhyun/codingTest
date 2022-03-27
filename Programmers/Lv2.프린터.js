class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }
    
    peek() {
        return this.queue[this.front];
    }
    
    getSize() {
        return this.rear - this.front;
    }
}


function solution(priorities, location) {
    let answer = 1;
    
    const queue = new Queue();
    priorities.forEach((priority, i) => {
        queue.enqueue([priority, i]);
    });
    
    while (queue.getSize() > 0) {
        let maxNum = 0;
        queue.queue.forEach(v => {
            if (v[0] > maxNum) maxNum = v[0]; 
        });
        const [num, i] = queue.dequeue();
        if (maxNum > num) queue.enqueue([num, i]);
        else if (location === i) break;
        else answer++;
    }
    return answer;
}
