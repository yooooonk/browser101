import PopUp from './popup.js';

const BUG_COUNT = 5;
const CARROT_COUNT = 5;
const GAME_DURATION = 5;

const gameButton = document.querySelector('.play-button');
const gameScore = document.querySelector('.score');
const gameTimer = document.querySelector('.timer');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const gameWin = new Audio('./sound/game_win.mp3');
const altSound = new Audio('./sound/alert.wav');

let stared = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
  startGame();
});

gameButton.addEventListener('click', () => {
  if (stared) {
    stopGame();
  } else {
    startGame();
  }

  stared = !stared;
});

field.addEventListener('click', onFiledClick);

function onFiledClick(e) {
  if (!stared) return;
}

function finishGame(win) {
  stared = false;
  gameFinishBanner.showWithText(win ? 'You won' : 'You Lost');
}

function updateScore() {
  gameScore.innerText = CARROT_COUNT - score;
}
function startGame() {
  score = 0;
  updateScore();
  initGame();
  showStopButton();
  startTimer();
  playSound(bgSound);
}

function playSound(sound) {
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
function showStopButton() {
  const icon = gameButton.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}

function startTimer() {
  gameFinishBanner.hide();
  let timeCount = GAME_DURATION;
  timer = setInterval(() => {
    updateTimerText(timeCount);
    if (timeCount <= 0) {
      // endGame(); - timer는 timer 로직만?
      stopTimer();
      return;
    }

    updateTimerText(--timeCount);
  }, 1000);
}

function updateTimerText(timerCount) {
  gameTimer.innerText = timerCount;
}

function stopGame() {
  stopTimer();
  changeButtonToPlay();
  showPopupWithText('Replay?');
  stared = false;
  stopSound(bgSound);
}

function stopTimer() {
  {
    clearInterval(timer);
  }
}

function changeButtonToPlay() {
  const icon = gameButton.querySelector('.fas');
  icon.classList.add('fa-play');
  icon.classList.remove('fa-stop');
}

// function showPopupWithText(text) {
//   popup.classList.remove('popup-hide');

//   document.querySelector('.popup_message').innerText = text;
// }

// function closePopup() {
//   popup.classList.add('popup-hide');
// }

// function initGame() {
//   field.innerHTML = '';
//   addItem('carrot', 5, 'img/carrot.png');
//   addItem('bug', 5, 'img/bug.png');
// }

// function addItem(className, count, imgPath) {
//   const x1 = 0;
//   const y1 = 0;

//   const x2 = fieldRect.width - CARROT_SIZE;
//   const y2 = fieldRect.height - CARROT_SIZE;

//   for (let i = 0; i < count; i++) {
//     const item = document.createElement('img');
//     item.setAttribute('class', className);
//     item.setAttribute('src', imgPath);
//     item.style.position = 'absolute';
//     const x = randomNumber(x1, x2);
//     const y = randomNumber(y1, y2);

//     item.style.left = `${x}px`;
//     item.style.top = `${y}px`;

//     field.appendChild(item);
//   }
// }

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
