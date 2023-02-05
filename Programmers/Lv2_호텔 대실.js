function getMinutes(str) {
    const [hours, minutes] = str.split(':');
    return Number(hours) * 60 + Number(minutes);
}

function solution(book_time) {
    const bookTimes = book_time.map((time) => [getMinutes(time[0]), getMinutes(time[1])]).sort((a, b) => a[0] - b[0]);
    const roomEndTime = [bookTimes[0][1] + 10];
    for (let i = 1; i < bookTimes.length; i++) {
        let find = false;
        const [start, end] = bookTimes[i];
        for (let j = 0; j < roomEndTime.length; j++) {
            if (roomEndTime[j] <= start) {
                find = true;
                roomEndTime[j] = end + 10;
                break;
            }
        }
        if (!find) {
            roomEndTime.push(end + 10);
        }
    }
    return roomEndTime.length;
}
