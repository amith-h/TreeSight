#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 16 09:26:28 2023

@author: brightonsibanda
"""
import bisect
import csv
import json

results = []

with open('wildhacks_data_countries.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        diff = (float(row['1990 [YR1990]']) - float(row['2031']))/float(row['1990 [YR1990]'])
        if diff < 0:
            diff = 60 - (100 * diff)
        else:
            diff = 50 - 100*diff
        row['2031-1990 Diff'] = diff
        results.append(row)

diffColumn = [row['2031-1990 Diff'] for row in results]
avgDiff = sum(diffColumn) / len(diffColumn)
print('Average difference:', avgDiff)


n = len(diffColumn)
my_dict = {}
for i in range(len(diffColumn)):
     rank = sorted(diffColumn).index(diffColumn[i]) + 1
     percentile = (rank / n) * 100
     my_dict[results[i]['Country Name']] = percentile



# Open a file for writing in JSON format
with open("percentile.json", "w") as jsonfile:
    json.dump(my_dict, jsonfile)
