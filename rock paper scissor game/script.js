let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices");
const msg= document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score")
const computerScorepara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options =["rock", "paper","scissors"];
    const randIx= Math.floor(Math.random()*3);
    return options[randIx];
    }

const drawGame = () =>{
    console.log("Game was drawn (i.e) no one won this match");
    msg.style.backgroundColor="#2196F3";
}
const showwinner =(userwin, userchoice,compChoice)=>{
    if(userwin){
        userScore++
        userScorepara.innerText =userScore;
        // console.log("You won");
        msg.innerText=`You won congrats ! ${userchoice} beats ${compChoice} `
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        computerScorepara.innerText =compScore; 
        // console.log("computer won");
        msg.innerHTML=`you lost man try again! ${userchoice} can't beat ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    //Genrate Computer choice;
     const compChoice = genCompChoice();
     console.log("computer choces the ",compChoice)

     if(userchoice === compChoice){
        //Draw Game 
        drawGame(userchoice)
        msg.innerHTML=`Game was drawn Computer also choosed ${compChoice} `
     }
     else{
        let userwin =true;
        if(userchoice ==="rock"){
            //scissors, paper
        userwin = compChoice==="paper" ? false :true;
         }else if(userchoice==="paper"){
            //rock, scissors
            userwin =compChoice === "scissors" ? false :true;
             }else {
                // scissors, paper
                userwin = compChoice === "rock" ? false : true;
            }
            
    showwinner(userwin,userchoice,compChoice);
     }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice= choice.id;
    console.log("choice was clicked",userchoice);
    playGame(userchoice)
    })
})
