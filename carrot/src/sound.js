'use strict';
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const gameWin = new Audio('./sound/game_win.mp3');
const altSound = new Audio('./sound/alert.wav');

function playSound(sound) {
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

export function playBgm() {
  playSound(bgSound);
}

export function stopBgm() {
  stopSound(bgSound);
}
export function playCarrot() {
  playSound(carrotSound);
}

export function playBug() {
  playSound(bugSound);
}

export function playAlert() {
  playSound(altSound);
}

export function playGameWin() {
  playSound(gameWin);
}
