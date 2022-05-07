function solution(genres, plays) {
    const answer = [];
    const genrePlayCnt = new Map();
    const groupByGenre = new Map();
    genres.forEach((genre, i) => {
        const cnt = genrePlayCnt.get(genre);
        genrePlayCnt.set(genre, cnt ? cnt + plays[i] : plays[i]);
        const group = groupByGenre.get(genre) || [];
        groupByGenre.set(genre, [...group, [i, plays[i]]]);
    });
    
    const playCntArr = Array.from(genrePlayCnt).sort(([_, play1], [__, play2]) => play2 - play1);
   	playCntArr.forEach(([genre, play]) => {
        const music = groupByGenre.get(genre)
        .sort(([_, play1], [__, play2]) => play2 - play1)
        .map(song => song[0]).slice(0, 2);
        answer.push(...music);
    });
    return answer;
}
