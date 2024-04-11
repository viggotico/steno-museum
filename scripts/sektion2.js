const user = JSON.parse(localStorage.getItem("user"));
const nickname = document.getElementById('choose-body-nickname');
nickname.innerHTML = user.name;