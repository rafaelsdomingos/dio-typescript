let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLInputElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLInputElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

campoSaldo.innerHTML = "0"

function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});