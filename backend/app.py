from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Hello from the backend!"}
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)