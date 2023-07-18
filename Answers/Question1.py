#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
# STRATAGIES I am going to use is 
""" 
1. Sort the Array
2. Get Max and Min of the Array
3. If you want to to get the minumium sum of the 4 elements among 5 elements exlcuede the Max num
4. If you want to get the max sum of the 4 elementes among 5 elemets exclude the first element

"""

def miniMaxSum(arr):
    # Write your code here
    l=len(arr)
    arr.sort()
    maxsum=0
    minsum=0
    total=0
    for i in range(l):
        total+=arr[i]
        maxsum= total-arr[0]
        minsum = total-arr[l-1]
    print(minsum, maxsum)
        

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
