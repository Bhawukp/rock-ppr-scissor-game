let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result  p");
const rock=document.getElementById("rock");
const ppr=document.getElementById("Paper");
const sci=document.getElementById("scissor");
function getComputerChoice(){
    const choices=["rock","Paper","scissor"];
    const randomNumber=Math.floor(Math.random()*3) ;
    return choices[randomNumber];
}

function main(){
    rock.addEventListener('click',function(){
        game("rock");
    })
    ppr.addEventListener('click',function(){
    game("Paper");
    })
    sci.addEventListener('click',function(){
    game("scissor");
    })
}
function win(UserC,computerC){
userScore++;
userScore_span.innerHTML=userScore;
compScore_span.innerHTML=compScore;
result_div.innerHTML=UserC+" beats "+computerC+". You win";
}
function cwin(UserC,computerC){
    compScore++;
userScore_span.innerHTML=userScore;
compScore_span.innerHTML=compScore;
result_div.innerHTML=computerC+" beats "+UserC+". Computer wins";

}
function draw(UserC,computerC){
    result_div.innerHTML=UserC+" equals "+computerC+". It's a draw!";

}
function game(UserChoice){
    const computerChoice=getComputerChoice();
   switch(UserChoice + computerChoice){
       case "rockscissor":
       case "Paperrock":
       case "scissorPaper":
           win(UserChoice,computerChoice);
           break;
       case "rockPaper":
       case "Paperscissor":
       case "scissorrock":
           cwin(UserChoice,computerChoice);
           break;
       case "rockrock":
       case "PaperPaper":
       case "scissorscissor":
           draw( UserChoice,computerChoice);
           break;
    

       
   }
}
game();
main();


