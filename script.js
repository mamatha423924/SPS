let popup = document.getElementById("Popup");

const CHOICES=[
    {
     name:"paper",
     beats:"rock"
    },
    {
        name:"rock",
        beats:"scissor"
    },
    {
        name:"scissor",
        beats:"paper"
    }
]
const choiceButtons=document.querySelectorAll('.choice-btn');
const gameDiv=document.querySelector('.game');
const resultsDiv=document.querySelector('.results');
const resultDivs = document.querySelectorAll('.results_result');

const resultWinner = document.querySelector('.results_winner');
const resultText = document.querySelector('.results_text');

const playAgainsBtn = document.querySelector('.play-agains');

const messageDiv = document.querySelector('.message');
const msgDiv = document.querySelector('.msg');
const nextBtn = document.querySelector('.next-btn');
const headingHeader = document.querySelector('.heading');





let computerScore = 0;
let yourScore = 0;


choiceButtons.forEach(button =>{
    button.addEventListener('click' ,() => {
        const choiceName=button.dataset.choice;
        const choice=CHOICES.find(choice => choice.name==choiceName);
        choose(choice);
        
    });
});

function choose(choice){
    const aichoice=aiChoose();
    displayResults([choice,aichoice]);
    displayWinner([choice,aichoice]);
}

function aiChoose(){
    const rand=Math.floor(Math.random()*CHOICES.length);
    return CHOICES[rand];
}
function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
                <div class="choice ${results[idx].name}">
                    <img src="images/${results[idx].name}.png" alt="${results[idx].name}" />
                </div>
            `;
        }, idx * 1000);
    });

    gameDiv.classList.toggle('hidden');
    resultsDiv.classList.toggle('hidden');
}



function displayWinner(results){
    setTimeout(()=> {
const userWins = isWinner(results)
const aiWins=isWinner(results.reverse())


if( userWins){
    resultText.innerText="you win"
   resultDivs[0].classList.toggle('winner')
  keepScore(1)
  document.querySelector('.next-btn').removeAttribute('hidden');
}else if(aiWins){
    resultText.innerText="you lost"
    resultDivs[1].classList.toggle('winner')
   keepScore(-1)
   document.querySelector('.next-btn').setAttribute('hidden', 'true');
}else{
    resultText.innerText="tie"
    document.querySelector('.next-btn').setAttribute('hidden', 'true');
}
    },1000);
    resultWinner.classList.toggle('hidden')
    resultsDiv.classList.toggle('show-winner')
}
function isWinner(results){
    return results[0].beats==results[1].name;
}



playAgainsBtn.addEventListener('click',() =>{
 gameDiv.classList.toggle('hidden')
 resultsDiv.classList.toggle('hidden')

 resultDivs.forEach(resultDiv=>{
    resultDiv.innerHTML=""
    resultDiv.classList.remove('winner')
 })
 resultText.innerText="";
 resultWinner.classList.toggle('hidden')
 resultsDiv.classList.toggle('show-winner')
})

function keepScore(point) {
    if (point > 0) {
        yourScore += point;
    } else if (point < 0) {
        computerScore -= point;
    }

    document.getElementById("computer_score").innerText = computerScore;
        document.getElementById("your_score").innerText = yourScore; 
}

nextBtn.addEventListener('click', () => {
    
    const elementsToHide = document.querySelectorAll('.container > *');
    elementsToHide.forEach((element) => {
        
        element.classList.add("hidden");
    });

   
    msgDiv.style.display='block';
    messageDiv.removeAttribute('hidden');
  
});


function restartGame() {
  
    computerScore = 0;
    yourScore = 0;
    document.getElementById("computer_score").innerText = computerScore;
    document.getElementById("your_score").innerText = yourScore;
    
    const elementsToHide = document.querySelectorAll('.container > *');
    elementsToHide.forEach((element) => {
        
        element.classList.remove("hidden");
    });

    gameDiv.classList.toggle('hidden')
 resultsDiv.classList.toggle('hidden')

 resultDivs.forEach(resultDiv=>{
    resultDiv.innerHTML=""
    resultDiv.classList.remove('winner')
 })
 resultText.innerText="";
 resultWinner.classList.toggle('hidden')
 resultsDiv.classList.toggle('show-winner')
 
       
    gameDiv.classList.remove("hidden");
    
    
    msgDiv.style.display = 'none';

   
    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = '';
        resultDiv.classList.remove('winner');
    });
    resultText.innerText = '';
    resultWinner.classList.add('hidden');
    resultsDiv.classList.remove('show-winner');
}






function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
