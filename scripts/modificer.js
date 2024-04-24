const user = JSON.parse(localStorage.getItem("user"));
const title = document.querySelector('.modificer-text h1');
const desc = document.querySelector('.modificer-text p');
title.innerHTML = `Hej ${user.name}!`;
desc.innerHTML = `Her kan du modificer din karakter som du har lyst.`;

const tattooElements = document.querySelectorAll('#modificer-elementer img');
tattooElements.forEach(img => {
    switch (img.alt) {
        case 'blomst':
        case 'hjerte': setClick(img); break;
        default: break;
    }
});

function setClick(el) {
    el.addEventListener('click', (e) => {
        const tattoo = document.getElementById(`tattoo_overlay_${el.alt}`);
        tattoo.style.display = "block";
        e.preventDefault();
    });
}

const backButton = document.getElementById('back-button');
const homeButton = document.getElementById('next-button');
backButton.onclick = () => {
    window.location.href = "../sektion5/index.html";
}
homeButton.onclick = () => {
    window.location.href = "../sektion6/index.html";
}