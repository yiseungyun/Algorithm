function solution(orders, course) {
    const menu = {};
    let result = [];
    
    function combination(list, comb, n) {
        if (comb.length === n) {
            if (menu[comb.sort().join("")]) menu[comb.sort().join("")] += 1;
            else menu[comb.sort().join("")] = 1;
            return
        }
        for (let i = 0; i < list.length; i++) {
            combination(list.slice(i+1), [...comb, list[i]], n);
        }
    }
    
    for (const order of orders) {
        order_list = order.split("");
        for (const number of course) {
            if (order_list.length >= number) combination(order_list, [], number);
        }
    }
    
    for (const number of course) {
        let max = 0;
        let max_list = [];
        for (const comb in menu) {
            if (comb.length === number) {
                if (menu[comb] >= 2 && menu[comb] > max) {
                    max = menu[comb];
                    max_list = [comb];
                } else if (menu[comb] >= 2 && menu[comb] === max) {
                    max_list.push(comb);
                }
            }
        }
        for (const item of max_list) {
            result.push(item);
        }
    }
    return result.sort();
}