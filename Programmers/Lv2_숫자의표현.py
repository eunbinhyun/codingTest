def func(n, sumVal, goal):
    sumVal += n
    if sumVal == goal:
        return True
    elif sumVal > goal:
        return False
    
    return func(n + 1, sumVal, goal)
    
def solution(n):
    answer = 0
    
    for i in range(1, n + 1):
        if func(i, 0, n):
            answer += 1
        
    return answer
