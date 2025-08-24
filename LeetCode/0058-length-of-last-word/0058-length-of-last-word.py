class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        word_list = s.split(" ")
        filtered_word_list = [word for word in word_list if word != ""]

        return len(filtered_word_list[-1])