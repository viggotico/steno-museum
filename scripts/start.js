const user = JSON.parse(localStorage.getItem("user"));
const nickname = document.querySelector('.vælg-krop h1');
nickname.innerHTML = `Hej ${user.name}!`;

document.getElementById("vælg-krop-1").onclick = () => {
    window.location.href = '../sektion2/index.html';
}

document.getElementById("vælg-krop-2").onclick = () => {
    window.location.href = '../sektion2/index.html';
}

const backButton = document.getElementById('back-button');
backButton.onclick = () => {
    window.location.href = "../index.html";
}