function solution(k, dungeons) {
    let answer = 0;
    const visited = Array.from({length: dungeons.length}, () => false);

    function dfs(depth, k) {
        answer = Math.max(answer, depth);
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(depth + 1, k - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }
    dfs(0, k);
    return answer;
}
