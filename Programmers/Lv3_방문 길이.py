def solution(dirs):
    answer = 0
    visited = set()
    curPos = (0, 0)
    direction = {"U": (0, 1), "L": (-1, 0), "D": (0, -1), "R": (1, 0)}
    
    for command in dirs:
        dx, dy = direction[command]
        nextPos = curPos[0] + dx, curPos[1] + dy
        
        if (-5 <= nextPos[0] <= 5) and (-5 <= nextPos[1] <= 5):
            if (curPos, nextPos) not in visited:
                visited.add((curPos, nextPos))
                visited.add((nextPos, curPos))
                answer += 1
            curPos = nextPos
            
    return answer
