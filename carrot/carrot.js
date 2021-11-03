// 재생버튼

const playButton = document.querySelector('.play-button');
const stopIcon = document.querySelector('.fa-stop');
const startIcon = document.querySelector('.fa-play');

let isPlaying = false;

const startGame = () => {
  isPlaying = true;
  startTimer();
  changeToStopButton();
};

const stopGame = () => {
  isPlaying = false;
  stopTimer();
  changeToPlayButton();
};

const endGame = () => {
  isStart = false;
  stopTimer();
  changeToPlayButton();
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
    console.log('멈춰');
    stopGame();
  } else {
    console.log('다시시작');
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
      timeCount--;
    }
    timer.innerHTML = timeCount;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
  console.log('clear');
};
