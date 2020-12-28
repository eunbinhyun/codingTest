def solution(s):
    answer = s[0].upper()

    for i in range(1, len(s)):
        if s[i] == ' ':
            answer += ' '
            continue
        if s[i-1] != ' ':
            answer += s[i].lower()
        else:
            answer += s[i].upper()
        
    return answer
