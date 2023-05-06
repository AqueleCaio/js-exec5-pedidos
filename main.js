const lista = document.querySelector('.lista-pedidos');
const button = document.querySelector('#adicionar');
const carrinho = document.getElementById('lista-pedidos')
const produto_input = document.getElementById('produto')
const quantidade_input = document.getElementById('qtd')

const pedidos = [];
let botao = document.createElement('button');

button.addEventListener('click', function (e) {

    if (produto_input == null) {
        document.alert('Inválido')
    }

    e.preventDefault();
    let li = document.createElement('li');
    let quantidade = quantidade_input.value
    let produto = produto_input.value
    li.textContent = quantidade + ' - ' + produto;
    carrinho.append(li);

    let botao = document.createElement('button');
    botao.innerHTML = 'X';
    botao.setAttribute('class', 'remover');

    carrinho.append(botao);

    botao.addEventListener('click', function (e) {
        e.preventDefault();
        carrinho.removeChild(li);
        carrinho.removeChild(botao);
    });

});
