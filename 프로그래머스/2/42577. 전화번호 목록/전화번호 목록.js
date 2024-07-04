function solution(phone_book) {
    const numbers = {};
    for (const phone of phone_book) {
      numbers[phone] = true;
    }
    for (const number of phone_book) {
      for (let i = 1; i < number.length; i++) {
        if (numbers[number.substr(0, i)]) return false;
      }
    }
    return true;
}