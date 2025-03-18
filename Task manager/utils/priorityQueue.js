class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(task) {
    this.heap.push(task);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const elem = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (this.compare(elem, parent) >= 0) break;
      this.heap[parentIdx] = elem;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  compare(a, b) {
    const priorityMap = { low: 3, medium: 2, high: 1 };
    if (priorityMap[a.priority] !== priorityMap[b.priority])
      return priorityMap[a.priority] - priorityMap[b.priority];
    return new Date(a.createdAt) - new Date(b.createdAt);
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const elem = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && this.compare(this.heap[leftIdx], elem) < 0) {
        swap = leftIdx;
      }

      if (rightIdx < length && this.compare(this.heap[rightIdx], swap ? this.heap[leftIdx] : elem) < 0) {
        swap = rightIdx;
      }

      if (!swap) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = elem;
      idx = swap;
    }
  }
}

module.exports = MinHeap;
