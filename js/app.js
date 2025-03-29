document.querySelector('form').addEventListener('submit', event => event.preventDefault())
document.getElementById("friendName").addEventListener('keydown', e => {
    if (e.key == "Enter") {
        addName();
    }
});
document.getElementById("addName").addEventListener("click", addName);
document.getElementById("draw").addEventListener("click", draw);
document.getElementById("restart").addEventListener("click", restart);

let names = [];

function addName() {
    let inputName = getInputName();
    let friendList = getFriendsListElement();
    if (inputName.value === '') {
        alert('Digite um nome!');
        return;
    }
    if (!names.find(x => x.toLowerCase() === inputName.value.toLowerCase())) {
        friendList.innerHTML += `<br /><span>${inputName.value}</span>`
        names.push(inputName.value);
        toggleBtnDraw();
    }
    else
        alert(`Nome ${inputName.value} já inserido!`)
    inputName.value = "";
}

function draw() {
    let max = names.length;
    let drawList = getDrawListElement();
    const shuffledArray = shuffleArray(names);
    drawList.innerHTML = "";
    for (let i = 0; i < max; i++) {
        if (i < max - 1) {
            drawList.innerHTML += `${shuffledArray[i]} --> ${shuffledArray[i + 1]} <br/>`;
        } else {
            drawList.innerHTML += `${shuffledArray[i]} --> ${shuffledArray[0]}`;
        }
    }
}

function restart() {
    let element1 = getInputName();
    let element2 = getFriendsListElement();
    let element3 = getDrawListElement();
    element1.innerHTML = "";
    element2.innerHTML = "";
    element3.innerHTML = "";
    names = [];
    toggleBtnDraw();
}

function getFriendsListElement() {
    return document.getElementById('friendsList');
}

function getInputName() {
    return document.getElementById("friendName");
}

function toggleBtnDraw() {
    let btn = document.getElementById("draw");
    if (names.length < 3) {
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
function getDrawListElement() {
    return document.getElementById("drawList");
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

