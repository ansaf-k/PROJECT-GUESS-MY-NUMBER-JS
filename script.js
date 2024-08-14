// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = '👍 correct answer';

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);
    
secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const Displaymessage = function (msg){
    document.querySelector(".message").textContent = msg;
}

document.querySelector(".score").textContent = score;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess);

    if(!guess){
        // document.querySelector(".message").textContent = "🚫 no number";
        Displaymessage("🚫 no number");
    }
    else if(guess === secretNumber){
        // document.querySelector(".message").textContent = "👍 correct answer";
        Displaymessage("👍 correct answer");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector(".message").textContent = guess > secretNumber ? "🤔 too high" : "🤔 too low";
            Displaymessage(guess > secretNumber ? "🤔 too high" : "🤔 too low")
        score--;
        document.querySelector(".score").textContent = score;
        }
        else {
            // document.querySelector(".message").textContent = "You Lost The Game";
            Displaymessage("You Lost The Game");
            document.querySelector(".score").textContent = 0;
        }
    }
    // else if(guess <secretNumber){
    //     if(score > 1){
    //         document.querySelector(".message").textContent = "🤔 too low";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You Lost The Game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
})  

document.querySelector('.again').addEventListener('click',
    function() {
        score = 20;

        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";
        // document.querySelector(".message").textContent = "Start guessing...";
        Displaymessage("Start guessing...");
        document.querySelector('body').style.backgroundColor = '#222';
        secretNumber = Math.trunc(Math.random()*20)+1;
        }
)
