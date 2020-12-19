from collections import deque

def bfs(begin, target, words):
    q = deque([(begin, 0)])
    visited = [False] * len(words)
    
    while q:
        curWord, cnt = q.popleft()

        if curWord == target:
            return cnt
            
        for i in range(len(words)):
            if difference(curWord, words[i]) == 1 and not visited[i]:
                q.append((words[i], cnt + 1))
                visited[i] = True
                
    return 0

def difference(oldWord, newWord):
    diffCnt = 0
    
    for i in range(len(oldWord)):
        if oldWord[i] != newWord[i]:
            diffCnt += 1
    
    return diffCnt

def solution(begin, target, words):
    answer = 0
    
    return bfs(begin, target, words)
