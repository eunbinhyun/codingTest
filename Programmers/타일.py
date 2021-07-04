def solution(brown, yellow):
    tiles = brown + yellow
        
    for i in range(1, tiles):
        if tiles % i == 0:
            w, h = tiles // i, i
            yellow_tmp = (w - 2) * (h - 2)
            brown_tmp = w * h - (yellow_tmp)
            
            if yellow_tmp == yellow and brown_tmp == brown:
                return [w, h]
