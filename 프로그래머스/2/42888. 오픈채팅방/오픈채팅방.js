function solution(record) {
    let IN = "님이 들어왔습니다.", OUT = "님이 나갔습니다.";
    let user = {};
    let result = [];
    
    for (let i = 0; i < record.length; i++) {
        let split_list = record[i].split(" ");
        let state, id, name;
        if (split_list.length === 2) {
            state = split_list[0];
            id = split_list[1];
        } else {
            state = split_list[0];
            id = split_list[1];
            name = split_list[2];
        }
        if (state === "Enter") {
            user[id] = name;
            result.push(id+IN);
        } else if (state === "Leave") {
            result.push(id+OUT);
        } else if (state === "Change") {
            user[id] = name;
        }
    }
    for (let i = 0; i < result.length; i++) {
        let [id, state] = result[i].split("님");
        result[i] = user[id] + "님" + state;
    }
    return result;
}