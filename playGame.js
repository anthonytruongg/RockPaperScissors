
var userScore = 0
var computerScore = 0

const rock = document.querySelector('#rock')
rock.addEventListener('click', selectRock)

const paper = document.querySelector('#paper')
paper.addEventListener('click', selectPaper)

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', selectScissors)




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay() {
    const answer = getRndInteger(1,3)
    if(answer == 1) {
        return 1
    }
    if(answer == 2) {
        return 2
    }
    if(answer == 3) {
        return 3
    }
}
function selectRock() {
    playerSelectionFinal = 1
    playOne()
}
function selectPaper() {
    playerSelectionFinal = 2
    playOne()
}
function selectScissors() {
    playerSelectionFinal = 3
    playOne()
}

function playOne() {
    const uScore = document.querySelector('.uScore')
    const cScore = document.querySelector('.cScore')
    const output = document.querySelector('.output')

    let computerSelection = computerPlay() 

    if(playerSelectionFinal == 2 && computerSelection == 1) {
        output.textContent = "You won! Paper beats rock"
        userScore += 1
        uScore.textContent = userScore
    }
    else if(playerSelectionFinal == 3 && computerSelection == 1) {
        output.textContent = "You lost! Rock beats scissors!"
        computerScore += 1
        cScore.textContent = computerScore
    }
    else if(playerSelectionFinal == 1 && computerSelection == 2) {
        output.textContent = "You lost! Paper beats rock!"
        computerScore += 1
        cScore.textContent = computerScore
    }
    else if(playerSelectionFinal == 3 && computerSelection == 2) {
        output.textContent = "You won! Scissors beats paper!"
        userScore += 1
        uScore.textContent = userScore
    }
    else if(playerSelectionFinal == 1 && computerSelection == 3) {
        output.textContent = "You won! Rock beats scissors!"
        userScore += 1
        uScore.textContent = userScore
    }
    else if(playerSelectionFinal == 2 && computerSelection == 3) {
        output.textContent = "You lost! Scissors beats paper!"
        computerScore += 1
        cScore.textContent = computerScore
    }
    else if(playerSelectionFinal == 3 && computerSelection == 3) {
        output.textContent = "TIE"
    }
    else if(playerSelectionFinal == 2 && computerSelection == 2) {
        output.textContent = "TIE"
    }
    else if(playerSelectionFinal == 1 && computerSelection == 1) 
    {
        output.textContent = "TIE"
    }
    
    

    if(userScore == 5) {
        alert("You have won!")
        userScore = 0
        uScore.textContent = userScore
        computerScore = 0
        cScore.textContent = computerScore
        output.textContent = 'Make your selection!'
    }
    else if(computerScore == 5) {
        alert("You have lost!")
        userScore = 0
        uScore.textContent = userScore
        computerScore = 0
        cScore.textContent = computerScore
        output.textContent = 'Make your selection!'
    }
}


console.log("Game has started....")

