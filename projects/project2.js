const gameData = {
    fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍐', '🥝', '🥭'],
    emojis: ['😀', '😎', '🥳', '😍', '🤔', '😴', '🤠', '👻'],
    animals: ['🐶', '🐱', '🐼', '🦊', '🦁', '🐘', '🦒', '🦋'],
    planets: ['🌎', '🌍', '🌏', '🌕', '⭐', '☀️', '🌙', '⚡'],
    flags: ['🏁', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️', '🚩', '🎌', '⛳'],
    alphabets:['M','A','N','J','U','S','H','T']
};

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;
let timeLeft = 30;
let timer;
let currentCategory = '';


document.addEventListener('DOMContentLoaded', () => {
    // Add click listeners to category buttons
    document.querySelectorAll('.category-buttons button').forEach(button => {
        button.addEventListener('click', () => startGame(button.dataset.category));
    });

    
    document.getElementById('restartBtn').addEventListener('click', restartGame);
    document.getElementById('backBtn').addEventListener('click', goToHome);
    document.getElementById('playAgainBtn').addEventListener('click', restartGame);
    document.getElementById('homeBtn').addEventListener('click', goToHome);
});


function startGame(category) {
    currentCategory = category;
    matchedPairs = 0;
    score = 0;
    timeLeft = 30;
    flippedCards = [];
    
    
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('gameOverModal').style.display = 'none';

    
    document.getElementById('score').textContent = score;
    
  
    createCards(category);
    
  
    startTimer();
}


function createCards(category) {
    const symbols = gameData[category];
    cards = [...symbols, ...symbols]; // Create pairs
    shuffleCards(cards);

    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';

    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${symbol}</div>
        `;
        card.addEventListener('click', () => handleCardClick(card));
        cardsGrid.appendChild(card);
    });
}


function handleCardClick(card) {
    if (flippedCards.length >= 2 || flippedCards.includes(card) || card.classList.contains('matched')) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}


function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = cards[card1.dataset.index] === cards[card2.dataset.index];

    if (match) {
        handleMatch(card1, card2);
    } else {
        handleMismatch(card1, card2);
    }
}


function handleMatch(card1, card2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    score += 10;
    matchedPairs++;
    document.getElementById('score').textContent = score;

    if (matchedPairs === cards.length / 2) {
        endGame(true);
    }

    flippedCards = [];
}


function handleMismatch(card1, card2) {
    setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
    }, 1000);
}


function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            endGame(false);
        }
    }, 1000);
}


function endGame(isWin) {
    clearInterval(timer);
    const modal = document.getElementById('gameOverModal');
    const title = document.getElementById('gameOverTitle');
    const finalScore = document.getElementById('finalScore');

    title.textContent = isWin ? 'Congratulations!' : 'Game Over!';
    finalScore.textContent = score;
    modal.style.display = 'flex';
}


function restartGame() {
    startGame(currentCategory);
}

function goToHome() {
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameOverModal').style.display = 'none';
    document.getElementById('landingPage').style.display = 'block';
    clearInterval(timer);
}


function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 