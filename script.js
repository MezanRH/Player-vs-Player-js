
// selactor

const p1ScoreElm = document.querySelector('#p1Score');
const p2ScoreElm = document.querySelector('#p2Score');
const playingToElm = document.querySelector('.playingTo');
const inputScoreElm = document.querySelector('#inputScore');
const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn');
const resetBtnElm = document.querySelector('#resetBtn');
const formElm = document.querySelector('form');


let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;
let turnPlayer = 'p1';

// playinto score into Dom
playingToElm.textContent = winingScore
// disable PlayerBtn based on turn
turnPlayer === 'p1'? p2BtnElm.setAttribute('disabled', 'disabled') : p1BtnElm.setAttribute('disabled', 'disabled')
// Input and updating Playing to score

function validationInput(score) {
    if(score < 1){
        alert('Please provide a value more than 0');
    }
}


formElm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    // geting the input
    const inputScore = inputScoreElm.value
    //validation check
    validationInput(inputScore)
    // saving it into data layer
    winingScore = inputScore
    // showing the value on dom
    playingToElm.textContent = inputScore
    // reset the input
    inputScoreElm.value = ""
})


p1BtnElm.addEventListener('click', (evt) => {
    // incress the count based on condition
    if(turnPlayer === 'p1' && !gameOver && p1Score < winingScore){
        p1Score++
        // update DOM
        p1ScoreElm.textContent = p1Score;
        // Change the turn
        turnPlayer = 'p2'
        // Disable p1 Button
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.removeAttribute('disabled');

    }
    if(p1Score === winingScore){
        gameOver = true
        // disabale player1 and player2 Btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');

        // Show massage
        alert('Player1 is winner');
    }
});

p2BtnElm.addEventListener('click', (evt) => {
    // incress the count based on condition
    if(turnPlayer === 'p2' && !gameOver && p2Score < winingScore){
        p2Score++
        // update DOM
        p2ScoreElm.textContent = p2Score
        // Change the turn
        turnPlayer = 'p1';
        // Disable p1 Button
        p2BtnElm.setAttribute('disabled', 'disabled');
        p1BtnElm.removeAttribute('disabled');
    }
    if(p2Score === winingScore){
        gameOver = true
        // disabale player1 and player2 Btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
        // Show massage
        alert('Player2 is winner');
    }
})