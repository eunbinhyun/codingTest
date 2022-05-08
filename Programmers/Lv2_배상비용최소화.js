class MaxHeap {
  constructor() {
    this.heap = [null];
  }  
    
  push(work) {
    this.heap.push(work);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex > 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
    
  pop() {
    if (this.heap.length === 2) return this.heap.pop();
        
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[currentIndex] < this.heap[leftIndex] ||
           this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[currentIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[currentIndex]];                
        currentIndex = rightIndex;
      }
      else {
        [this.heap[currentIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[currentIndex]];
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;      
    }               
    return returnValue;
  }
}

function solution(no, works) {
  const heap = new MaxHeap();
  works.forEach(work => heap.push(work));
  let i = 0;
  while (i < no && heap.heap.length > 1) {
    const val = heap.pop();
    if (val > 1) heap.push(val - 1);              
    i++;
  }
  return heap.heap.reduce((a, b) => a + b ** 2, 0);
}
