'use strict'

const secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 15;
let highscore = 0;
const displayMessage = function (message) {
document.querySelector('.message').textContent = message;
}


document.querySelector('.btn_check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        // document.querySelector('.message').textContent = "😞No number!";
        displayMessage("😞Число не вказано !")
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = "🤗 Correct Number!";
        displayMessage("🤗 Ви вгадали чарівне число!")
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "250px"
        if( score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? "Too high!" : "Too low!";
            displayMessage(guess > secretNumber ? "Дуже велике число!" : "Дуже маленьке число!")
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = "😞You lost the game!";
            displayMessage("😞Ви програли игру !")
            document.querySelector('.score').textContent = 0;
        }
    }
    // } else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = "Too high!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "😞You lost the game!";
    //         score--;
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = "Too low!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "😞😞You lost the game!";
    //         score--;
    //         document.querySelector('.score').textContent = 0;
    //     }
})

            document.querySelector('.btn__again').addEventListener('click', function(){
                score = 15;
                document.querySelector('.score').textContent = score;
                // document.querySelector('.message').textContent = "Start guessing...";
                displayMessage("Start guessing...")
                document.querySelector('.number').textContent = "?";
                document.querySelector('body').style.backgroundColor = "#222";
                document.querySelector('.number').style.width = "150px";
                document.querySelector('.guess').value = "";
                secretNumber = Math.trunc(Math.random() * 20) + 1;
})