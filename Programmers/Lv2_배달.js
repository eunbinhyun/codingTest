class MinHeap {
    constructor() {
        this.heap = [null];
    }
    
    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parentIdx = Math.floor(curIdx / 2);
        while (parentIdx > 0 && value.cost < this.heap[parentIdx].cost) {
            this._swap(parentIdx, curIdx);
            curIdx = parentIdx;
            parentIdx = Math.floor(curIdx / 2);
        }
    }
    
    pop() {
        if (this.isEmpty()) return;
        if (this.heap.length === 2) return this.heap.pop();
        const returnVal = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let curIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
     
            
        while ((this.heap[leftIdx] && this.heap[curIdx].cost > this.heap[leftIdx].cost) ||
              (this.heap[rightIdx] && this.heap[curIdx].cost > this.heap[rightIdx].cost)) {
            if (this.heap[leftIdx] === undefined) {
                this._swap(rightIdx, curIdx);
            }
            else if (this.heap[rightIdx] === undefined) {
                this._swap(leftIdx, curIdx);
            }
            else if (this.heap[rightIdx].cost >= this.heap[leftIdx].cost) {
                this._swap(curIdx, leftIdx);
            }
            else if (this.heap[rightIdx].cost < this.heap[leftIdx].cost){
                this._swap(curIdx, rightIdx);
            }
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return returnVal;

    }
    
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    isEmpty() {
        return this.heap.length === 1;
    }

}

function dijkstra(road, N) {
    const heap = new MinHeap();
    heap.push({node: 1, cost: 0});
    const dist = Array.from({length: N + 1}, () => Infinity);
    dist[1] = 0;
    
    while (!heap.isEmpty()) {
        const {node: current, cost: currentCost} = heap.pop();
        for (const [src, des, cost] of road) {
           
            const nextCost = currentCost + cost;
            if (src === current && nextCost < dist[des]) {
                dist[des] = nextCost;
                heap.push({node: des, cost: nextCost});
            } 
            else if (des === current && nextCost < dist[src]) {
                dist[src] = nextCost;
                heap.push({node: src, cost: nextCost});
            }
            
        }
        
    }
    return dist;
}

function solution(N, road, K) {
    return dijkstra(road, N).filter(v => v <= K).length;
}
