function solution(str1, str2) {
    var intersection = 0;
    var str1_list = [], str2_list = [];
    for (let i = 0; i < str1.length-1; i++) {
        var slice = str1.slice(i, i+2).toLowerCase().replace(/[^a-zA-Z]/g, '');
        if (slice.length === 2) str1_list.push(slice);
    }
    for (let i = 0; i < str2.length-1; i++) {
        var slice = str2.slice(i, i+2).toLowerCase().replace(/[^a-zA-Z]/g, '');
        if (slice.length === 2) str2_list.push(slice);
    }
    var str1_count = {}, str2_count = {};
    for (let i = 0; i < str1_list.length; i++) {
        if (str1_count[str1_list[i]] === undefined) str1_count[str1_list[i]] = 1;
        else str1_count[str1_list[i]] += 1;
    }
    for (let i = 0; i < str2_list.length; i++) {
        if (str2_count[str2_list[i]] === undefined) str2_count[str2_list[i]] = 1;
        else str2_count[str2_list[i]] += 1;
    }
    for (const key in str2_count) {
        if (str1_count[key] !== undefined) {
            intersection += Math.min(str1_count[key], str2_count[key]);
        }
    }
    var union = str1_list.length+str2_list.length-intersection;
    var jaccard = union === 0 && intersection === 0 ? 1
                : intersection === 0 ? 0 : intersection/union;
    return Math.floor(jaccard*65536);
}