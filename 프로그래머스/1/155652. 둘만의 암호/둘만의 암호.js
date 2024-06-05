function solution(s, skip, index) {
    var skip_list = skip.split('').sort((a, b) => b.localeCompare(a));
    alphabet = [];
    alpha_dict = {};
    var result = "";
    for (let i = 97; i < 123; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    for (const skip of skip_list) {
        alphabet.splice(skip.charCodeAt()-97, 1);
    }
    for (let i = 0; i < alphabet.length; i++) {
        alpha_dict[alphabet[i]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        result += alphabet[(alpha_dict[s[i]]+index)%alphabet.length];
    }
    return result;
}