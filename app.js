const listaNomeAmigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const nomeAmigo = document.getElementById('amigo');
let amigosSorteados = new Set();

function adicionarAmigo() {
    const nome = nomeAmigo.value.trim();

    if (nome && !listaNomeAmigos.includes(nome)) {
        listaNomeAmigos.push(nome);

        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);

        nomeAmigo.value = '';
    } else if (!nome) {
        alert('Por favor, digite um nome.');
        nomeAmigo.value = '';
    } else {
        alert('Este nome já foi adicionado.');
        nomeAmigo.value = '';
    }
}


function sortearAmigo() {
    if (listaNomeAmigos.length > 0) {
        const amigos = listaNomeAmigos.filter(nome => !amigosSorteados.has(nome));

        if (amigos.length === 0) {
            alert('Todos os participantes já foram sorteados. Reinicie a lista para continuar.');
            return;
        }

        const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        amigosSorteados.add(nomeSorteado);

        resultado.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `Você acertou o nome: ${nomeSorteado}!`;
        resultado.appendChild(li);

        listaAmigos.innerHTML = '';
        listaNomeAmigos.length = 0;
    } else {
        alert('A lista está vazia! Adicione pelo menos um nome antes de sortear.');
    }
}


