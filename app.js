let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")
const Drawgame=()=>{
    // console.log("Game Draw");
    msg.innerText="Game Draw! Play Again!"
    msg.style.backgroundColor="#081b31";
};
const showwiner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        // console.log("you win!");
        msg.innerText=`You Win!; your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor= "green"
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        // console.log("you Lose");
        msg.innerText=`You Lose!;  ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const gencomchoice= ()=>{
    const option=["rock","paper","scissors"];
    const ranindex=Math.floor(Math.random()*3);
    return option[ranindex];
};
const playgame =(userchoice)=>{
    // console.log("User choice=",userchoice);
    //Generate computer choice-
    const compchoice=gencomchoice();
    console.log("Comp choice=",compchoice);
    if(userchoice==compchoice){
        Drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors, paper
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            //rock, scissors
          userwin= compchoice==="scissors"?false:true; 
        }
        else{
            // rock paper
            userwin=compchoice==="rock"?false:true;
        }
        showwiner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    });
});
