def attending(meetingList) :

    meetingList.sort(key=lambda x: x[1]) # 끝나는 시간 기준으로 정렬
    
    time = meetingList[0][1]
    result = 1
    
    for i in range(1, len(meetingList)):
        if meetingList[i][0] >= time:
            time = meetingList[i][1]
            result += 1
    
    return result
