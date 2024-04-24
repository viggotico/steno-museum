const modificerKort = document.querySelector('.sektion5-hero div');
modificerKort.addEventListener('click', (e) => {
    window.location.href = "../modificer/index.html";
    e.preventDefault();
});
const backButton = document.getElementById('back-button');
const homeButton = document.getElementById('next-button');
backButton.onclick = () => {
    window.location.href = "../sektion4/index.html";
}
homeButton.onclick = () => {
    window.location.href = "../modificer/index.html";
}
