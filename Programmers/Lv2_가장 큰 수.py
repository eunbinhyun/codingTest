def solution(numbers):
    numbers = [str(num) for num in numbers]
    numbers.sort(key = lambda x: (x * 4)[:4], reverse = True)

    return str(int(''.join(numbers)))
