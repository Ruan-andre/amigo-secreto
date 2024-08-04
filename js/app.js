document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
})

let nomes = [];

function adicionar() {
    let inputNome = getInputNome();
    let listaAmigos = getListaAmigos();
    if (inputNome.value === '') {
        alert('Digite um nome!');
        return;
    }
    if (!nomes.find(x => x.toLowerCase() === inputNome.value.toLowerCase())) {
        listaAmigos.innerHTML += `<br /><span>${inputNome.value}</span>`
        nomes.push(inputNome.value);
        ativarBotaoSortear();
    } else {
        alert(`Nome ${inputNome.value} já inserido!`)
    }

    inputNome.value = "";
}

function sortear() {
    let max = nomes.length;
    let listaSorteio = getListaSorteio();
    const arrayEmbaralhado = embaralharArray(nomes);
    listaSorteio.innerHTML = "";
    for (let i = 0; i < max; i++) {
        if (i < max - 1) {
            listaSorteio.innerHTML += `${arrayEmbaralhado[i]} --> ${arrayEmbaralhado[i + 1]} <br/>`;
        } else {
            listaSorteio.innerHTML += `${arrayEmbaralhado[i]} --> ${arrayEmbaralhado[0]}`;
        }
    }
}

function reiniciar() {
    let element1 = getInputNome();
    let element2 = getListaAmigos();
    let element3 = getListaSorteio();
    element1.innerHTML = "";
    element2.innerHTML = "";
    element3.innerHTML = "";
    nomes = [];
    ativarBotaoSortear();
}

function getListaAmigos() {
    return document.getElementById('lista-amigos');
}

function getInputNome() {
    return document.getElementById("nome-amigo");
}


function ativarBotaoSortear() {

    let btn = document.getElementById("btnSortear");
    if (nomes.length < 3) {
        btn.setAttribute("disabled", "true");
        btn.classList.add('disabled');
    } else {
        btn.removeAttribute("disabled");
        btn.classList.remove('disabled');
    }
}

function getRandomNum(max) {
    return parseInt(Math.random() * max);
}

function getListaSorteio() {
    return document.getElementById("lista-sorteio");
}

document.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        adicionar();
    }
});

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolha um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos na posição i e j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

