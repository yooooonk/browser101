// 재생버튼

const playButton = document.querySelector('.play-button');
const stopIcon = document.querySelector('.fa-stop');
const startIcon = document.querySelector('.fa-play');
const score = document.querySelector('.score');
const endPopup = document.querySelector('.end-popup');

let isPlaying = false;
let leaveCarrot = 10;

const startGame = () => {
  isPlaying = true;
  startTimer();
  changeToStopButton();
  paintCarrot();
  paintBug();
  setNewCarrotCount();
};

const stopGame = () => {
  isPlaying = false;
  stopTimer();
  changeToPlayButton();
};

const endGame = () => {
  changeToPlayButton();
  isStart = false;
  stopTimer();
  showEndPopup();
};

const changeToPlayButton = () => {
  stopIcon.style.display = 'none';
  startIcon.style.display = 'inline';
};

const changeToStopButton = () => {
  stopIcon.style.display = 'inline';
  startIcon.style.display = 'none';
};

playButton.addEventListener('click', () => {
  if (isPlaying) {
    stopGame();
  } else {
    startGame();
  }
});

// 타이머
const timer = document.querySelector('.timer');
let timeCount = 10;
let interval;

const startTimer = () => {
  interval = setInterval(() => {
    if (timeCount <= 0) {
      endGame();
    } else {
      --timeCount;
    }
    timer.innerHTML = timeCount;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

// 줄어드는 당근
const decreaseCarrot = () => {
  leaveCarrot--;
  score.innerHTML = leaveCarrot;
};

const setNewCarrotCount = () => {
  leaveCarrot = 10;
  score.innerHTML = leaveCarrot;
};

const showEndPopup = () => {
  endPopup.style.visibility = 'visible';
};
