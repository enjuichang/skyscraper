from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000", "https://enjui-data-journalism.netlify.app/"]}})

@app.route('/api/data')
@cross_origin()
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/')
def health():
    return "hi"

if __name__ == '__main__':
    app.run(debug=True)