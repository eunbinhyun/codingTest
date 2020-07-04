from itertools import permutations
import math

def primeNum(num):
    if num <= 1 :
        return False
    sqNum = int(math.sqrt(num)+1)
    
    for i in range(2,sqNum):
        if num % i == 0:
            return False
    
    return True
    
def solution(numbers):
    answer = 0
    num = set()
    combi = []
    
    li = [number for number in numbers]
    for i in range(1, len(numbers)+1):
        combi += list(permutations(li,i))

    for i in combi:
        num.add(int("".join(i)))
    
    num = set(num)
    
    for n in num:
        if primeNum(n):
            answer += 1

    return answer
