let userScore =0;
let compScore =0;
const options= document.querySelectorAll(".choices");
const result=document.querySelector("#msg");
const usersScore= document.querySelector("#users-Score");
const compsScore= document.querySelector("#comp-Score");
const showWinner =(userwin,userChoice,comp) =>{
    if (userwin===true) {
        console.log("you win!!")
        result.innerText=`you win your ${userChoice} beats comp ${comp}`;
        result.style.backgroundColor="green";
        userScore++;
        usersScore.innerText=userScore;

    }else{
        console.log("you lose");
        result.innerText=`you lose comp ${comp} beats your ${userChoice}`;
        result.style.backgroundColor="red";
        compScore++;
        compsScore.innerText=compScore;
    }
}
const playGame= (userChoice)=>{
    console.log("User Choice:",userChoice);
    //accessing the computer choices:
    let comp =compChoice();
    console.log("comp choice:",comp);

    if(userChoice===comp){
        draw();
        result.innerText=`it's a draw `;
        result.style.backgroundColor="#07BEB8";
        
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin= comp==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin= comp="scissors"?false:true;
        }else if(userChoice==="scissors"){
            userwin=comp="rock"?false:true;
        }
        showWinner(userwin,userChoice,comp);
    }
   

}

const draw=()=>{
    console.log("the game is draw")
}
const compChoice= ()=>{
    let arr =["rock","paper","scissors"];
    let radIdx= Math.floor(Math.random()*2+1);
    return arr[radIdx];
}

options.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userChoice= choices.getAttribute("id");
        playGame(userChoice);
       
    });
});
