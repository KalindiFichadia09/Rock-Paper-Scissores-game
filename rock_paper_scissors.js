let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw 😑";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){//userwin = true
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win !🏆");
        msg.innerText = `You win 🏆 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{ 
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose !😢");
        msg.innerText = `You lost 😢 ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
}

const playGame = (userChoice) => {
    // console.log("User choice = ",userChoice);
    //Generate Compute Choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //Scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //user choice : scissors
            //comp : rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});