def solution(clothes):
    answer = 1
    dic = dict()
    
    for item, key in clothes:
        if key not in dic.keys():
            dic[key] = 2 # 안 입는 경우 포함
        else:
            dic[key] += 1
    
    for item in dic.values():
        answer *= item
    
    return answer - 1
