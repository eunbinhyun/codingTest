def find(x, parent):
    if parent[x] == x:
        return x
    else:
        p = find(parent[x], parent)
        parent[x] = p
        return parent[x]
    
def union(x, y, parent):
    x = find(x, parent)
    y = find(y, parent)
    
    if x != y:
        parent[y] = x
        return True
    
    return False
        
def solution(n, costs):
    answer = 0
    parent = [i for i in range(n)]
    costs.sort(key=lambda x: x[2])

    for x, y, distance in costs:
        if union(x, y, parent):
            answer += distance        

    return answer
