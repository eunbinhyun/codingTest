import heapq

def solution(no, works):
    result = 0
    minusWorks = [-i for i in works]
    heapq.heapify(minusWorks)
    
    for i in range(no):
        if minusWorks:
            n = heapq.heappop(minusWorks)
        if n + 1 < 0:
            heapq.heappush(minusWorks, n + 1)
    
    result = sum([i ** 2 for i in minusWorks])
    return result
