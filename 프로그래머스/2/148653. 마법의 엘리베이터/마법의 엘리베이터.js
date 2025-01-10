function solution(storey) {
    let count = 0;

    while (storey !== 0) {
        let remain = storey%10;
        storey = Math.floor(storey/10);
        
        if (remain > 5) {
            count += (10-remain);
            storey++;
        } else if (remain === 5) {
            if (storey % 10 >= 5) {
                count += 5;
                storey++;
            } else {
                count += 5;
            }
        } else {
            count += remain;
        }
    }
    
    
    return count;
}