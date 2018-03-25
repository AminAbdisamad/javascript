//game values 
let min = 1,
    max = 10,
    winNum = getRandomNumber(min,max),
    guessLeft = 4;
//Get random Numbers btw min and max
function getRandomNumber(min,max){
   return Math.floor(Math.random()*(max-min)+1+min);
}
//IU elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      alert = document.querySelector('.message');
      guessBtn = document.querySelector('#guess-btn');
//min and max values 
minNum.textContent = min;
maxNum.textContent = max;
// TO DO :- make bold for min and max
guessBtn.addEventListener('click',guesserGame);

//Play again 
game.addEventListener('mousedown',function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
    //e.preventDefault();
    
});

function guesserGame(e){
let guess = parseInt(guessInput.value);
    //console.log(guessInput.value);
    //validation
    if(isNaN(guess) || guess < min || guess > max){
        showMessage(`Please enter number between ${min} and ${max}`,'red');
        //setTimeout(showMessage,5000);
    }

    if(guess === winNum){
        // You win - Game Over
        gameOver(true,`${winNum} is correct, YOU WIN!`);
    }else{
        guessLeft -=1;
        if(guessLeft === 0){
            // You losts - Game Over
            gameOver(false,`Game over, YOU LOST!, the correct guess was ${winNum}`);
        }else{
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            guessBtn.style.borderColor = 'red';
            showMessage(`${guess} is not correct, you have ${guessLeft} guesses left`,'red');
        }

    }
    //e.preventDefault();
}



//show message function
function showMessage(message,color){
    alert.textContent = message;
    alert.style.color = color;
}
function validation(message,color){
    alert.textContent = message;
    alert.style.color = color;
}

//Gameover
function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    guessBtn.style.borderColor = color;
    showMessage(msg,color);
    //play again
    guessBtn.value = "Play again";
    guessBtn.className += 'play-again';
}


// Todo : validation to be fixed

