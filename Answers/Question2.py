#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here
    c={"p":0,"n":0,"z":0}
    l=len(arr)
    for i in range(l):
        if arr[i]==0:
            c["z"]+=1
        if arr[i]>0:
            c["p"]+=1
        if arr[i]<0:
            c["n"]+=1
    print(round(c["p"]/l,6))
    print(round(c["n"]/l,6))
    print(round(c["z"]/l,6))
if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)