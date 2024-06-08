function solution(msg) {
    var dictionary = {};
    var result = [];
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(i+65)] = i+1;
    }
    var index = 0;
    while (index < msg.length) {
        for (let j = 1; index+j < msg.length+1; j++) {
            var slice = msg.slice(index, index+j+1);
            var previous = msg.slice(index, index+j);
            if (dictionary[slice] === undefined) {
                dictionary[slice] = Object.keys(dictionary).length+1;
                break;
            }
        }
        result.push(dictionary[previous]);
        index += previous.length;
    }
    return result;
}