from collections import deque

testCase = int(input())

for _ in range(testCase):
    n, m = map(int, input().split())
    queue = deque(list(map(int, input().split())))
    index = deque([i for i in range(len(queue))])
    count = 0

    while True:
        if queue[0] == max(queue):
            count += 1
            if index[0] == m:
                print(count)
                break
            else:
                queue.popleft()
                index.popleft()
        else:
            queue.append(queue.popleft())
            index.append(index.popleft())
