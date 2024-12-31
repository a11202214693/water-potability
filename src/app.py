from flask import Flask, request, jsonify, send_file
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import os
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer

app = Flask(__name__)

# Load dataset
data = pd.read_csv("water_potability.csv")

# Preprocess dataset
data.fillna(data.mean(), inplace=True)  # Handle missing values
X = data.drop("Potability", axis=1)
y = data["Potability"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train KNN model
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)

@app.route('/expense', methods=['POST'])
def predict():
    user_input = request.json
    input_data = pd.DataFrame([user_input])
    prediction = knn.predict(input_data)
    return jsonify({"prediction": int(prediction[0])})

@app.route('/goal', methods=['GET'])
def visualisation():
    # Generate a pairplot
    sns.pairplot(data, hue="Potability")
    plot_path = "pairplot.png"
    plt.savefig(plot_path)
    plt.close()
    return send_file(plot_path, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
