class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        if len(string)%2 == 0:
            first = string[:len(string)//2]
            second = string[len(string)//2:]
        else:
            first = string[:len(string)//2]
            second = string[len(string)//2+1:]
        
        if first == second[::-1]:
            return True
        else:
            return False