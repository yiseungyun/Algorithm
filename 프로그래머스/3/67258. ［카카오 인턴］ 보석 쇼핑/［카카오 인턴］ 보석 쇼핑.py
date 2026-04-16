def solution(gems):
    answer = [0, len(gems)]
    left, right = 0, 0
    size = len(set(gems))
    gemDict = {gems[0] : 1}
    while left < len(gems) and right < len(gems):
        if len(gemDict) == size: # 모든 보석이 다 있다면
            if right-left < answer[1]-answer[0]:
                answer = [left, right]
            else:
                gemDict[gems[left]] -= 1
                if gemDict[gems[left]] == 0:
                    del gemDict[gems[left]] # 왼쪽 포인터가 가리키는 보석 수 0개면 dictionary에서 삭제
                left += 1
        else:
            right += 1
            if right == len(gems): break
            if gems[right] in gemDict: gemDict[gems[right]] += 1
            else: gemDict[gems[right]] = 1
    answer[0] += 1
    answer[1] += 1
    
    return answer