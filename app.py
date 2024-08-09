from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

balance = 1000
transactions = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/transaction', methods=['POST'])
def transaction():
    global balance
    data = request.get_json()
    amount = data['amount']
    type = data['type']

    if type == 'deposit':
        balance += amount
    elif type == 'withdrawal' and amount <= balance:
        balance -= amount
    else:
        return jsonify({'error': 'Saldo insuficiente'}), 400

    transactions.append({'amount': amount, 'type': type})
    return jsonify({'balance': balance, 'transactions': transactions})

if __name__ == '__main__':
    app.run(debug=True)
