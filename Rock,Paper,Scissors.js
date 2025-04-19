let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score_updation = document.querySelector("#user-score");
const comp_score_updation = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

const playGame = (userChoice)=>{
    console.log("user choice =",userChoice)
const compChoice = getcompChoice()
console.log("comp choice =",compChoice)
if(userChoice === compChoice){
drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true; 
    } else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    }
}; 

const showWinner = (userWin, userChoice, compChoice)=>{
if (userWin) {
    console.log("You Win")
    user_score ++;
    user_score_updation.innerText = user_score;
    msg.innerText = `Congratulations You Win: ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
} else {
    console.log("You Lose");
    comp_score ++;
    comp_score_updation.innerText = comp_score;
    msg.innerText = `You Lose: ${compChoice} beats ${userChoice}`
    msg.style.backgroundColor = "red";

}
};


const drawGame = ()=>{
    console.log("Game was draw.")
    msg.innerText = "Game was Draw: Play Again"
    msg.style.backgroundColor = "#081b31";
}
const getcompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const rand_Idx = Math.floor(Math.random() * 3);
    return options[rand_Idx];
}