function solution(fees, records) {
    let answer = [];
    let record = {};
    
    for (let i = 0; i < records.length; i++) {
        let [time, number, state] = records[i].split(" ");
        if (record[number] && record[number][1] === "IN") { 
            let [hour, minute] = time.split(":");
            let out = Number(hour)*60+Number(minute);
            record[number] = [out - record[number][0], state];
        } else if (record[number] && record[number][1] === "OUT") { 
            let [hour, minute] = time.split(":");
            record[number] = [Number(hour)*60+Number(minute)-record[number][0], state];
        } else {
            let [hour, minute] = time.split(":");
            record[number] = [Number(hour)*60+Number(minute), state];
        }
    }
    
    let last = 23*60+59;
    for (let i = 0; i < records.length; i++) {
        let [time, number, state] = records[i].split(" ");
        if (record[number][1] === "IN") {
            record[number][0] = last-record[number][0];
        }
    }
    
    let record_list = Object.keys(record);
    record_list.sort((a, b) => Number(a) - Number(b));
    record_list.forEach(num => {
        answer.push(caculateFee(fees, record[num][0]));
    })
    return answer;
}

function caculateFee(fees, time) {
    if (time-Number(fees[0]) > 0) {
        time -= Number(fees[0]);
        return Number(fees[1]) + Number(fees[3])*Math.ceil(time/Number(fees[2]));
    } else {
        return Number(fees[1]);
    }
}