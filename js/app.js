let loss = 0 ;
let wins = 0;

function playRound(humanChoice){
  if(wins === 5 || loss === 5){
    document.querySelector('.result-box').textContent = `Game Over! Start a new game below!`;
    return;
  }
  const computerChoice = getComputerChoice();
  let mssg = '';
  if( humanChoice === 'rock'){
    document.querySelector('.player-img img').src = 'img/right-facing-fist - Copy.svg';
    if( computerChoice === 'paper'){
      document.querySelector('.computer-img img').src = 'img/hand-with-fingers-splayed - Copy.svg';
      loss++;
      mssg = 'Computer chose paper! Paper beats rock';
    }else if( computerChoice === 'rock'){
      document.querySelector('.computer-img img').src = 'img/right-facing-fist - Copy.svg';
      mssg = 'Computer chose rock! rock + rock = nothing happened!';
    }else{
      document.querySelector('.computer-img img').src = 'img/hand-scissors-solid - Copy.svg';
      wins++;
      mssg = 'Computer chose scissors! Your rock destroyed it!'
    }
  }else if(humanChoice === 'paper'){
    document.querySelector('.player-img img').src = 'img/hand-with-fingers-splayed - Copy.svg';
    if( computerChoice === 'paper'){
      document.querySelector('.computer-img img').src = 'img/hand-with-fingers-splayed - Copy.svg';
      mssg = 'Computer chose paper! Paper + Paper = nothing happened!';
    }else if( computerChoice === 'rock'){
      document.querySelector('.computer-img img').src = 'img/right-facing-fist - Copy.svg';
      wins++;
      mssg = 'Computer chose rock! Paper beats rock';
    }else{
      document.querySelector('.computer-img img').src = 'img/hand-scissors-solid - Copy.svg';
      loss++;
      mssg = 'Computer chose scissors! Your paper got shredded!'
    }
  }else{
    document.querySelector('.player-img img').src = 'img/hand-scissors-solid - Copy.svg';
    if( computerChoice === 'paper'){
      document.querySelector('.computer-img img').src = 'img/hand-with-fingers-splayed - Copy.svg';
      wins++;
      mssg = 'Computer chose paper! Paper got shredded!';
    }else if( computerChoice === 'rock'){
      document.querySelector('.computer-img img').src = 'img/right-facing-fist - Copy.svg';
      loss++;
      mssg = 'Computer chose rock! Your scissors got trashed!';
    }else{
      document.querySelector('.computer-img img').src = 'img/hand-scissors-solid - Copy.svg';
      mssg = 'Computer chose scissors! Clash led to no result!'
    }
  }
  document.querySelector('.current-score').textContent = `${wins} : ${loss}`;
  document.querySelector('.result-box').textContent = mssg;

  if (wins === 5) {
    const finalResult = document.querySelector('.final-result');
    finalResult.textContent = 'Congratulations! You won!!';
    finalResult.style.display = 'block';
  } else if (loss === 5) {
    const finalResult = document.querySelector('.final-result');
    finalResult.textContent = 'Oops! You lost! Better luck next time!';
    finalResult.style.display = 'block';
  }
}

function resetGame(){
  wins = 0;
  loss = 0;
  document.querySelectorAll('.icon img').forEach(img => {
    img.src = 'img/question.svg';
  });
  document.querySelector('.current-score').textContent = `0 : 0`;
  document.querySelector('.result-box').textContent = `Game not started yet.......`;
  document.querySelector('.final-result').textContent = `No results yet!`;
  document.querySelector('.final-result').style.display = `none`;
}

function getComputerChoice(){
  let toss =  Math.floor(Math.random() * 3);
  if( toss === 0){
    return 'rock';
  }else if( toss === 1){
    return 'paper';
  }else{
    return 'scissors';
  }
}

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    playRound(option.classList[1]);
  });
});

document.querySelector('.new-option').addEventListener('click', resetGame);


