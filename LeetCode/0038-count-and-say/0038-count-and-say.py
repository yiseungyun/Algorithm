class Solution:
    def countAndSay(self, n: int) -> str:
        say = ["", "1"]

        for i in range(2, n+1):
            string = say[i-1]
            prev = string[0]
            count = 1
            result = ""
            for j in range(1, len(string)):
                if prev == string[j]:
                    count += 1
                else:
                    result += str(count)+prev
                    count = 1
                prev = string[j]

            if count != 0:
                result += str(count)+prev
            
            say.append(result)

        print(say)
        return say[n]