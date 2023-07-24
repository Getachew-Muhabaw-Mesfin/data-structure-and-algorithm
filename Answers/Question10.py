#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
table =[f"{n} x {i+1} = {n*(i+1)}" for i in range(10)]
for j in range(10):
    print(table[j])
    
## OR👇👇👇👇👇

if __name__ == '__main__':
    n = int(input().strip())
for i in range(10):
    print(f"{n} x {i+1} = {n*(i+1)}")