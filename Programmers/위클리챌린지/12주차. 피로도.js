function solution(k, dungeons) {
    let answer = 0;
    let tired = k;
    let cnt = 0;
    let visited = Array.from({ length: dungeons.length }, () => false);
    let order = Array.from({ length: dungeons.length }, () => 0);
    
    function DFS(depth, i) {
        if (depth === dungeons.length) {
            order.forEach((idx)=> {
                if (tired >= dungeons[idx][0]) {
                    tired -= dungeons[idx][1];
                    cnt++;
                }
            })
            answer = Math.max(answer, cnt);
            tired = k;
            cnt = 0;
        }
        else {        
            for (let i=0; i < dungeons.length; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    order[depth] = i;
                    DFS(depth + 1, i);
                    visited[i] = false;
                    order[depth] = 0;
                }
            } 
        }
    }
    DFS(0, 0);          
    return answer;
}
