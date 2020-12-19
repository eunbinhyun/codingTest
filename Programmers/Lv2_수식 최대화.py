from itertools import permutations

def solution(expression):
    answer = 0    
    expressionList = list(expression.replace('+', ' + ')
                       .replace('-', ' - ')
                       .replace('*', ' * ')
                       .split(' '))
    
    operation = [ch for ch in expression if not ch.isdigit()] # 연산자만 분리한 리스트
    precedences = list(permutations(set(operation))) # 연산자 우선순위 순열

    for precedence in precedences:
        tmpList = expressionList

        for pre in precedence:
                stack = []
                for num2 in tmpList:
                    if stack and stack[-1] == pre:
                        stack.pop()
                        num1 = stack.pop()
                        stack.append(str(eval(num1 + pre + num2)))
                    else:
                        stack.append(num2)
                tmpList = stack

        answer = max(answer, abs(int(tmpList[0])))

    return answer
