const CARROT_SIZE = 80;
const BUG_COUNT = 5;
const CARROT_COUNT = 5;
const GAME_DURATION = 5;

const field = document.querySelector('.ground');
const fieldRect = field.getBoundingClientRect();
const gameButton = document.querySelector('.play-button');
const gameScore = document.querySelector('.score');
const timer = document.querySelector('.timer');

let stared = false;
let score = 0;
let timer = undefined;

gameButton.addEventListener('click', () => {
  if (stared) {
    stopGame();
  } else {
    startGame();
  }

  stared = !stared;
});

function startGame() {
  initGame();
  showStopButton();
}

function showStopButton() {
  const icon = gameButton.querySelector('.fa-play');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}

function startTimer() {
  let timeCount = GAME_DURATION;
  updateTimerText(timeCount);
  interval = setInterval(() => {
    if (timeCount <= 0) {
      // endGame(); - timer는 timer 로직만?
      clearInterval(interval);
      return;
    }

    updateTimerText(--timeCount);
  }, 1000);
}

function updateTimerText(timerCount) {
  timer.innerHTML = timeCount;
}

function stopGame() {
  console.log('멈춰');
}

function changeButtonToPlay() {}

function initGame() {
  field.innerHTML = '';
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;

  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);

    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
