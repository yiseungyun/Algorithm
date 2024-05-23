function solution(plans) {
    var answer = [];
    for (let i = 0; i < plans.length; i++) {
        let time = plans[i][1].split(':');
        let hour = time[0], minute = time[1];
        plans[i][1] = Number(hour)*60+Number(minute);
        plans[i][2] = Number(plans[i][2]);
    }
    plans.sort((a, b) => a[1] - b[1]);
    var stack = [];
    for (let i = 0; i < plans.length; i++) {
        var current = plans[i];
        var next = i === plans.length-1 ? 1000000 : plans[i+1][1];
        if (next-current[1] > current[2]) {
            answer.push(current[0]);
            var remain_time = next-current[1]-current[2];
            while (stack.length > 0 && remain_time > 0) {
                let plan = stack.pop();
                if (remain_time-plan[1] > 0) {
                    answer.push(plan[0]);
                    remain_time -= plan[1];
                } else if (remain_time-plan[1] === 0) {
                    answer.push(plan[0]);
                    break;
                } else {
                    stack.push([plan[0], plan[1]-remain_time]);
                    break;
                }
            }
        } else if (next-current[1] === current[2]) {
            answer.push(current[0]);
        } else {
            stack.push([current[0], current[2]-(next-current[1])]);
        }
    }
    return answer;
}