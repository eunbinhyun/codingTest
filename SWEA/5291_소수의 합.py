def primeNumbers():
    seive = [True] * upper  # 초기화
    seive[0] = seive[1] = False

    for i in range(2, int(upper * 0.5)):
        if seive[i]:
            for j in range(i + i, upper, i):
                seive[j] = False
                
    return seive

for tc in range(1, int(input()) + 1):
    lower, upper = map(int, input().split())
    seive = primeNumbers()
    answer = 0

    for i in range(lower + 1, len(seive)):
        if seive[i]:
            answer += i

    print(f'#{tc} {answer}')
