def dfs(x, sumVal):
    global minVal

    if x + 1 == N:
        minVal = min(minVal, sumVal)
        return
        
    if sumVal > minVal:
        return
    
    for i in range(N):
        if x + 1 < N and not row[i]:
            row[i] = True
            dfs(x + 1, sumVal + field[x+1][i])
            row[i] = False


T = int(input())
for test_case in range(1, T+1):
    minVal = 999999
    N = int(input())
    field = []

    for _ in range(N):
        field.append(list(map(int, input().split())))

    for i in range(N):
        row = [False] * N
        row[i] = True
        dfs(0, field[0][i])
        
    print(f'#{test_case} {minVal}')
