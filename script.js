'use strict'
const startButton = document.getElementById('menu')
startButton.addEventListener('click', (x) => {
    startButton.innerHTML = 'GO!';
    const stone = document.getElementById("stone");
    stone.style.animation = "2s linear infinite movStone";
    const stoneTwo = document.getElementById("stoneTwo");
    stoneTwo.style.animation = "4s linear 10s infinite movStone";
    const stoneThree = document.getElementById("stoneThree");
    stoneThree.style.animation = "1.5s linear 5s infinite movStone";
    const stoneFour = document.getElementById("stoneFour");
    stoneFour.style.animation = "8s linear infinite movStone";
});

//Нажатие кнопки прыжка
document.addEventListener(
    "keydown",
    (keyboardEvent) => {
        if (keyboardEvent.code == "KeyW") {
            const protagonist = document.getElementById("protagonist");
            protagonist.style.animation = "0.6s linear infinite movProtagonist";
        }
    }
);

//Отпускание кнопки прыжка
document.addEventListener(
    "keyup",
    (keyboardEvent) => {
        if (keyboardEvent.code == "KeyW") {
            const protagonist = document.getElementById("protagonist");
            protagonist.style.animation = "0.2s linear movDownProtagonist";
        }
    }
);

//const protagonist = document.getElementById("protagonist");
//protagonist.style.animation = "1s infinite movProtagonist";