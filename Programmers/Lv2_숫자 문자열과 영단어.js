function solution(s) {
    let answer = 0;
    const wordDict = new Map([
        ['zero', '0'],
        ['one', '1'],
        ['two', '2'],
        ['three', '3'],
        ['four', '4'],
        ['five', '5'],
        ['six', '6'],
        ['seven', '7'],
        ['eight', '8'],
        ['nine', '9'],
    ]);

    let word = '';
    s.split('').forEach((ch) => {
        word += ch;
        if (/[0-9]/.test(word)) {
            answer += word;
            word = '';
        }
        else {
            const number = wordDict.get(word);
            if (number) {
                answer += number;
                word = '';
            }
        }
    });
    return Number(answer);
}
