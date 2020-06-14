from collections import deque

def check(n, m, queue, visited, i, j, image):
    while queue:
        for dx, dy in (0, 1), (1, 0), (-1, 0), (0, -1):
            x = dx + i
            y = dy + j
            if x >= 0 and x < n and y >=0 and y < m and image[x][y] == image[i][j] and [x, y] not in visited :
                queue.append([x, y])
                visited.append([x, y])
        queue.popleft()
   
    return visited

def solution(n, m, image):
    answer = 0
    queue = deque()
    visited = []
    
    for i in range(n):
        for j in range(m):
            if [i, j] not in visited : 
                visited.append([i, j])
                queue.append(image[i][j])
                visited = check(n, m, queue, visited, i, j, image)
                answer += 1

    return answer