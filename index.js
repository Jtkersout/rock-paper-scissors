function playRound(playerSelection,computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerwins++;
        return `you win!. ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection=="scissors" && computerSelection == "paper"){
        playerwins++;
        return `you win!. ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        playerwins++;
        return `you win!. ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection == computerSelection) { draw++;
        return `Its a draw ${playerSelection} can't beat ${computerSelection}`
    } else {computerwins++;
        return `you lose!. ${computerSelection} beats ${playerSelection}`}
        
    }

function computerPlay(){
    let options = ["rock","paper","scissors"];
   return options[Math.floor(Math.random()*options.length) ];
}
let playerwins= 0;
let computerwins=0;
let draw= 0;
function game(num) {
    let i = 0;
    while(i <= num){ 
        const playerSelection = prompt("please input either rock,scissors or paper").toLowerCase();
        const computerSelection = computerPlay();
        i++
    console.log(playRound(playerSelection,computerSelection));
    console.log(`you won ${playerwins} times`, `you lost ${computerwins} times`, `you had ${draw}`)
    }

};