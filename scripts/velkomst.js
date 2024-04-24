const nickname = document.getElementById('nickname');
const enterButton = document.getElementById('enter');
const nicknameReminder = document.getElementById('nickname-reminder');

enterButton.addEventListener('click', (e) => {
    if (nickname.value.length < 1) {
        nicknameReminder.style.display = "block";
        return;
    }
    window.location.href =
        window.location.origin.includes('deltabox')
        ? '/steno-museet/start/index.html' : '/start/index.html';
    localStorage.setItem("user", JSON.stringify({
        name: nickname.value
    }));
});

document.addEventListener('DOMContentLoaded', (event) => {
    nickname.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') enterButton.click();
    });
    setTimeout(() => document.querySelector('audio').play(), 2000);
});

