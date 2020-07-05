n = int(input())
data = []

for _ in range(n):
    data.append(int(input()))

answer = ""
stack = []

j = 0
i = 1

while j < len(data):
    if stack and stack[-1] == data[j]:
        stack.pop()
        # print("-")
        answer += "-\n"
        j += 1
    elif stack and stack[-1] > data[j]:
        # print("NO")
        answer = "NO"
        break
    else:
        stack.append(i)
        i += 1
        # print("+")
        answer += "+\n"

print(answer)
