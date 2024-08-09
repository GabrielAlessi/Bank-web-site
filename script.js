document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const simulatorContainer = document.getElementById('simulator-container');

    const balanceElement = document.getElementById('balance');
    const transactionForm = document.getElementById('transaction-form');
    const transactionHistory = document.getElementById('transaction-history');

    let balance = 1000;

    // Usuário e senha fixos (apenas para exemplo)
    const validUsername = 'usuario';
    const validPassword = 'senha123';

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            loginContainer.style.display = 'none';
            simulatorContainer.style.display = 'block';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });

    function updateBalance() {
        balanceElement.textContent = `R$ ${balance.toFixed(2)}`;
    }

    function addTransaction(amount, type) {
        const listItem = document.createElement('li');
        listItem.textContent = `${type === 'deposit' ? 'Depósito' : 'Saque'}: R$ ${amount.toFixed(2)}`;
        transactionHistory.appendChild(listItem);
    }

    transactionForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const type = document.getElementById('type').value;

        if (type === 'deposit') {
            balance += amount;
        } else if (type === 'withdrawal' && amount <= balance) {
            balance -= amount;
        } else {
            alert('Saldo insuficiente para saque!');
            return;
        }

        addTransaction(amount, type);
        updateBalance();
    });

    updateBalance();
});

transactionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    // Validação de valor positivo
    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido e positivo.');
        return;
    }

    if (type === 'deposit') {
        balance += amount;
    } else if (type === 'withdrawal') {
        if (amount > balance) {
            alert('Saldo insuficiente para saque!');
            return;
        }
        balance -= amount;
    }

    addTransaction(amount, type);
    updateBalance();
});



document.addEventListener('DOMContentLoaded', function () {
    const balanceElement = document.getElementById('balance');
    const transactionForm = document.getElementById('transaction-form');
    const transactionHistory = document.getElementById('transaction-history');

    let balance = 1000;

    function updateBalance() {
        balanceElement.textContent = `R$ ${balance.toFixed(2)}`;
    }

    function addTransaction(amount, type) {
        const listItem = document.createElement('li');
        listItem.textContent = `${type === 'deposit' ? 'Depósito' : 'Saque'}: R$ ${amount.toFixed(2)}`;
        transactionHistory.appendChild(listItem);
    }

    transactionForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const type = document.getElementById('type').value;

        if (type === 'deposit') {
            balance += amount;
        } else if (type === 'withdrawal' && amount <= balance) {
            balance -= amount;
        } else {
            alert('Saldo insuficiente para saque!');
            return;
        }

        addTransaction(amount, type);
        updateBalance();
    });

    updateBalance();
});
