const loading = document.getElementById('loading');
setTimeout(() => {
    loading.classList.add("loading-end");
    setTimeout(() => loading.remove(), 2100);
}, 4000);

const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
backButton.onclick = () => {
    window.location.href = "../";
}
nextButton.onclick = () => {
    window.location.href = "../sektion3";
}
