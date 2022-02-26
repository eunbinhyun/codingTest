function getRank(cnt) {
    switch(cnt) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}

function solution(lottos, win_nums) {    
    let winCnt = 0;
    let zeroCnt = 0;
    lottos.forEach((v) => {
        if (v === 0) zeroCnt++;
        else if (win_nums.includes(v)) winCnt++;    
    });
    return [getRank(winCnt + zeroCnt), getRank(winCnt)];
}
