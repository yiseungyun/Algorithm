function solution(s, skip, index) {
    var result = '';
    var alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(i+97));
    var skip_list = skip.split("").sort((a, b) => a > b ? -1 : 1);
    for (let i = 0; i < skip_list.length; i++) {
        alphabet.splice(skip_list[i].charCodeAt()-97, 1);
    }
    var alpha_dict = {};
    for (let i = 0; i < alphabet.length; i++) {
        alpha_dict[alphabet[i]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        result += alphabet[(alpha_dict[s[i]]+index)%alphabet.length];
    }
    return result;
}