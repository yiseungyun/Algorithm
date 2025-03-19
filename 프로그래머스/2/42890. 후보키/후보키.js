function solution(relation) {
    let result = 0;
    let unique = [];
    let notKey = [];
    
    // 한개의 컬럼이 후보키가 될 수 있는지 확인
    for (let column = 0; column < relation[0].length; column++) {
        let dict = {};
        for (let i = 0; i < relation.length; i++) {
            if (dict[relation[i][column]]) {
                notKey.push(column);
                dict = null;
                break;
            } else {
                dict[relation[i][column]] = 1;
            }
        }
        
        if (dict) unique.push([column]);
    } 
    
    // notKey에 있는 조합으로 만들기 2개.. 3개.. 4개.. relation.length개
    let length = 2;
    while (length <= relation.length) {
        const combList = combination(notKey, length); // length만큼 뽑음
         
        for (const comb of combList) {
            let dict = {};
            
            for (let i = 0; i < relation.length; i++) {
                let tuple = "";
                for (const col of comb) {
                    tuple += relation[i][col];
                }
                
                if (dict[tuple]) {
                    dict = null;
                    break;
                } else {
                    dict[tuple] = 1;
                }
            }
            
            if (dict) unique.push(comb); 
        }
        
        length++;
    }
    
    console.log(unique);
    
    // 길이가 짧은 것에서 뒤에 길이가 긴 것에 중복되는게 있으면 길이가 긴 것을 제거
    // 길이가 긴 배열이 짧은 배열에 있는 모든 값을 가지고 있디 -> 후보키 불가
    for (let i = unique.length-1; i > 0; i--) { // longList
        const longList = unique[i];
        for (let j = 0; j < i; j++) {
            const shortList = unique[j]; 
            if (shortList.length === longList.length) continue;
            
            let array = [];
            let flag = true;
             
            for (const item of shortList) { // longList 값이 모두 short에 있다면?
               if (longList.indexOf(item) === -1) { // 없다면
                   flag = false;
               }
            } 
            
            if (flag) { 
                result++;
                break;
            }
        }
    }
    
    return unique.length-result;
}

function combination(list, number) {
    const result = [];
    
    function recur(newList, index) {
        if (newList.length === number) {
            result.push(newList);
            return;
        }
        
        for (let i = index; i < list.length; i++) {
            recur([...newList, list[i]], i+1);
        }
    }
    
    recur([], 0);
    return result;
}