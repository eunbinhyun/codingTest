def solution(s):
    answer = True
    stack = []
    for ch in s:
        if ch == '(':
            stack.append(ch)
        elif len(stack) > 0:
            stack.pop()
        else:
            return False
    
    return False if len(stack) else True
