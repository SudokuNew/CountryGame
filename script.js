const startButton = document.getElementById('startButton')
const optionsButton = document.getElementById('optionsButton')
const startMenu = document.getElementById('startMenu')

startButton.addEventListener('click', () => {
    startMenu.classList.add('screen-exit');
});

optionsButton.addEventListener('click', () => {
});

startMenu.addEventListener('animationend', () => {
    settingMenu.hidden = false;
});