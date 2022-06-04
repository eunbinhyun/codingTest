function solution(number, k) {
    const stack = [];
    let cnt = 0;
    for (const num of number) {
        while (cnt < k && stack[stack.length-1] < num) {
            stack.pop();
            cnt++;
        }
        stack.push(num);        
    }
    while (cnt < k) {
        stack.pop();
        cnt++;
    }
    return stack.join('')
}
