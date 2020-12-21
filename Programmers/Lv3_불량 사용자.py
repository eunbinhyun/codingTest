from itertools import permutations


def checkSpelling(u_id, b_id):
    for i in range(len(b_id)):
        if b_id[i] == '*':
            continue
        elif b_id[i] != u_id[i]:
            return False
    return True
    
def matching(u_id, b_id):
    for i in range(len(b_id)):
        if len(u_id[i]) != len(b_id[i]): # 길이가 다르면
            return False
        if checkSpelling(u_id[i], b_id[i]): # 길이가 같을때 스펠링 검사
            continue
        else:
            return False
    return True

def solution(user_id, banned_id): 
    answer = []
    
    for permus_id in permutations(user_id, len(banned_id)):
        if matching(permus_id, banned_id) and set(permus_id) not in answer:
            answer.append(set(permus_id))
            
    return len(answer)
