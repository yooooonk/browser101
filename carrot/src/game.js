'use strict';

import Field from './field.js';
import * as sound from './sound.js';

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuratoin = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameButton = document.querySelector('.play-button');
    this.stopIcon = document.querySelector('.fa-stop');
    this.startIcon = document.querySelector('.fa-play');
    this.scoreBoard = document.querySelector('.score');
    this.timerBoard = document.querySelector('.timer');
    this.endPopup = document.querySelector('.end-popup');
    this.stopPopup = document.querySelector('.stop-popup');
    this.regameButton = document.querySelector('.replay-button');
    this.ground = document.querySelector('.ground');

    this.timer = undefined;
    this.score = 0;
    this.isPlaying = false;

    this.gameButton.addEventListener('click', () => {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    });
    this.gameField = new Field(this.carrotCount, this.bugCount);
    this.gameField.setClickListener((item) => {
      this.onFiledClick(item);
    });
  }

  onFiledClick = (target) => {
    // this 바인딩을 위해 arrow function
    if (!this.isPlaying) return;

    if (target === 'carrot') {
      this.score++;
      //this.updateScore();
      this.scoreBoard.innerText = this.carrotCount - this.score;

      if (this.score === this.carrotCount) {
        this.finishGame(true);
      }
    } else if (target === 'bug') {
      //stopTimer();
      this.finishGame(false);
      //playSound(bugSound);
    }
  };

  setGameStopListner(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.isPlaying = true;
    this.gameField.init();
    this.startTimer();
    this.changeToStopButton();
    this.setTimerAndScore();
  }

  setTimerAndScore() {
    this.scoreBoard.innerText = this.carrotCount;
    this.timerBoard.innerText = this.gameDuratoin;
  }

  stop() {
    console.log('stop');
    this.isPlaying = false;
    this.onGameStop && this.onGameStop();
  }

  finishGame(win) {
    this.isPlaying = false;

    sound.playGameWin();
  }
  // timer
  startTimer() {
    this.timer = setInterval(() => {
      if (this.gameDuratoin <= 0) {
        this.finishGame(false);
      } else {
        --this.gameDuratoin;
      }
      this.timerBoard.innerText = this.gameDuratoin;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  // button
  changeTogameButton() {
    this.stopIcon.style.display = 'none';
    this.startIcon.style.display = 'inline';
  }

  changeToStopButton() {
    const icon = this.gameButton.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
  }
}
