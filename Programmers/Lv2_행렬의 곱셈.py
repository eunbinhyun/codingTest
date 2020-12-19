def solution(arr1, arr2):
    answer = [[0] * len(arr2[0]) for _ in range(len(arr1))] 
    
    for i in range(len(answer)):
        for j in range(len(answer[0])):
            result = 0
            for val1, val2 in zip(arr1[i], [arr2[k][j] for k in range(len(arr2))]):
                result += val1 * val2
            answer[i][j] = result
    
    return answer
