from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/')
def health():
    return "hi"

if __name__ == '__main__':
    app.run(debug=True)