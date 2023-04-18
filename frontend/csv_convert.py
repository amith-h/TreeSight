import csv
import json

csv_file = "wildhacks_data_countries.csv"
json_file = "wildhacks_data_json.json"

# Read the CSV data
with open(csv_file, 'r') as file:
    csv_data = csv.DictReader(file)
    csv_list = list(csv_data)  # Convert the CSV data to a list

# Convert the CSV data to JSON
json_data = []
for row in csv_list:
    json_data.append(row)

# Write the JSON data to a file
with open(json_file, 'w') as file:
    json.dump(json_data, file)
