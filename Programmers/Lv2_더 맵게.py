import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)    
    while len(scoville) >= 2 and scoville[0] < K:
        heapq.heappush(scoville, heapq.heappop(scoville) + (heapq.heappop(scoville) * 2))
        answer += 1
    
    return -1 if answer == 0 or scoville[0] < K else answer
