import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import pandas as pd

# Load the data
data = pd.read_csv('wildhacks_data_countries.csv')

# Replace "--" values with NaN
data.replace("..", np.nan, inplace=True)
data.replace(0, np.nan, inplace=True)

# Remove rows with any NaN values
data.dropna(axis=0, inplace=True)

# Get the country names
countries = data.iloc[:, 0].values

# Split the data into training and testing sets
train_data = data.iloc[:, 16:31].values
test_data = data.iloc[:, 1:16].values

# Remove any columns with a standard deviation of zero
std_train = np.std(train_data, axis=0)
std_test = np.std(test_data, axis=0)
zero_std_train = np.where(std_train == 0)[0]
zero_std_test = np.where(std_test == 0)[0]
train_data = np.delete(train_data, zero_std_train, axis=1)
test_data = np.delete(test_data, zero_std_test, axis=1)

# Normalize the data
mean_train = train_data.mean(axis=0)
std_train = train_data.std(axis=0)
train_data = (train_data - mean_train) / std_train
mean_test = test_data.mean(axis=0)
std_test = test_data.std(axis=0)
test_data = (test_data - mean_train) / std_train

# Define the model architecture
model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=[train_data.shape[1]]),
    layers.Dense(256, activation='relu'),
    layers.Dense(128, activation='relu'),
    layers.Dense(train_data.shape[1])
])

# Compile the model
model.compile(optimizer='adam', loss='mse')

# Train the model
model.fit(train_data, train_data, epochs=500)

# Make predictions for the next 10 years (2022-2032)
predictions = model.predict(test_data) * std_train + mean_train

# Combine the country names and predictions into a DataFrame
results = pd.DataFrame({'Country': countries, '2022': predictions[:,0], '2023': predictions[:,1], '2024': predictions[:,2], '2025': predictions[:,3], '2026': predictions[:,4], '2027': predictions[:,5], '2028': predictions[:,6], '2029': predictions[:,7], '2030': predictions[:,8], '2031': predictions[:,9], '2032': predictions[:,10]})

# Save the results to a CSV file
results.to_csv('predicted_forest_data.csv', index=False)