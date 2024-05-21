
let original = Math.round(Math.random()*100+1)



let playGame=true;
console.log(`original : ${original}`)
const submit= document.querySelector('#sub')
const tries= document.querySelector("#nooftry");
const stats=document.querySelector(".stats")
const msg=document.querySelector(".msg")
const p= document.createElement('p');
let lives=3;
let guessArr=[]

document.addEventListener("DOMContentLoaded", function() {


    //------ How to put text from JS to HTML DOM ? trying with title
const title= document.querySelector(".pname")
title.innerText="Guess the Number between 1 and 100";
title.style.fontSize="15px"
const container=document.querySelector(".container")
container.appendChild(title);


//playGAME variable to start
//random number generator (1-100)
//input and submit
//No of tries left:



if(playGame)
{
   tries.innerHTML=`${lives}`

   submit.addEventListener('click', function(ev)
   {
   ev.preventDefault() //prevents default form submisstion behaviour
   const userip = parseInt(document.querySelector('#userip').value);
   console.log(userip);
  
   verifyGuess(userip);
   tries.innerHTML=`${lives}`//update no of tries after guess

    });
}



// verify number's datatype and format
function verifyGuess(userip)
{

    console.log("inside verifyguess function")
if (userip <0 || isNaN(userip) || userip>100 ){
    document.querySelector('.entry').appendChild(document.createTextNode("Enter appropriate value "))
    //message should stay untill new input and then disappear
} else {
checkGuess(userip);
if (lives==0){
    //display your guesses are over, print original number was
    console.log("Your live is over, restart");
    displayMessage(`Your live is over, restart The original number was ${original}`)
    restartGame();
}
}
}

});
// check the number

function checkGuess(userip)
{
    console.log("inside checkguess function")
    


if (userip===original){
    console.log('match found')
    displayMessage(`congratulations you have guessed correctly
    The original number was ${original}`)
    restartGame();

} else if (userip > original){
    console.log('enter lower number')
    lives--;
    guessArr.push(userip)

} else if (userip < original){
    console.log("enter higher number")
    lives--;
    guessArr.push(userip)
}
console.log(guessArr)
// Guessed Numbers
const guessednos=document.querySelector("#guessednos")
guessednos.innerText=" " + guessArr.join(", ");
}

// print result, lower, higher or correct

/*
//display result
function result()
{
const res=document.createElement('div')
res.appendChild(document.createTextNode())
document.querySelector('.msg').appendChild(res);
}

// update guessed stack and trials left
// end game and restart


functions
Start
checkLives()
takeinput()
verifyinput()
stop()
*/
function restartGame(){
    //display Game Over
    
    // Reset all values
    userip.value='';
    userip.setAttribute('disabled','');
   

    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'>Start New Game</h2>`
    stats.appendChild(p);
    playGame=false;
    newGame()

    //display What original number was
//restore lives, empty Array
console.log("restart function reached");
} 

function displayMessage(abc){
 msg.innerText=abc
 }


function newGame(){
    const newgamebtn=document.querySelector('#newGame');
    newgamebtn.addEventListener('click', function(ev){

        let original = Math.round(Math.random()*100+1)
        guessArr=[]
        lives=10;
        playgame=true;
        userip.removeAttribute('disabled')
        stats.removeChild(p);

    });
}

