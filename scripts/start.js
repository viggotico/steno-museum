const user = JSON.parse(localStorage.getItem("user"));
const nickname = document.querySelector('.vælg-krop h1');
nickname.innerHTML = `Hej ${user.name}!`;

document.getElementById("vælg-krop-1").onclick = () => {
    window.location.href = '../sektion2';
}

document.getElementById("vælg-krop-2").onclick = () => {
    window.location.href = '../sektion2';
}

const backButton = document.getElementById('back-button');
backButton.onclick = () => {
    window.location.href = "../";
}