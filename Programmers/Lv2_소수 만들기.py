from itertools import combinations

def primeNumbers(n):
    for i in range(2, n // 2):
        if n % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    for combis in combinations(nums, 3):
        if primeNumbers(sum(combis)):
            answer += 1
    return answer
