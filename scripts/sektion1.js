const nickname = document.getElementById('nickname');
const enterButton = document.getElementById('enter');

enterButton.addEventListener('click', (e) => {
    localStorage.setItem("user", JSON.stringify({
        name: nickname.value
    }));
});

document.addEventListener('DOMContentLoaded', (event) => {
    nickname.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') enterButton.click();
    });
});

