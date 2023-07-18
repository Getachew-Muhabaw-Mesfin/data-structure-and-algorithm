#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Write your code here
        if not s:
            return
        
        hour = s[0:2]
        min_sec = s[2:8]
        _format = s[8:]
        
        if _format == "AM":
            if hour == "12":
                hour = "00"
        else:
            if hour != "12":
                military = int(hour) + 12
                hour = str(military)
        
        return hour + min_sec

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()

## OR
def timeConversion(s):
    h = int(s[:2])
    msec = s[2:8]
    h = h % 12 if s[-2:] == 'AM' else h % 12 + 12
    return f"{h:02}{msec}"