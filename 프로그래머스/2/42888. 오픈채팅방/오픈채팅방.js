function solution(record) {
    let result = [];
    const user = {};
    
    function message(name, status) {
        if (status === "IN") {
            return name + "님이 들어왔습니다."
        } else {
            return name + "님이 나갔습니다."
        }
    }
    
    for (const r of record) {
        const recordList = r.split(" ");
        
        switch (recordList[0]) {
            case "Enter":
                result.push("IN " + recordList[1]);
                user[recordList[1]] = recordList[2];
                break;
            case "Leave":
                result.push("OUT " + recordList[1]);
                break;
            case "Change":
                user[recordList[1]] = recordList[2];
                break;
        }
    }
    
    for (let i = 0; i < result.length; i++) {
        const [status, id] = result[i].split(" ");
        result[i] = message(user[id], status); 
    }
    
    return result;
}