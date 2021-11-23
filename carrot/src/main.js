import PopUp from './popup.js';

import Game from './game.js';

const BUG_COUNT = 5;
const CARROT_COUNT = 5;
const GAME_DURATION = 5;

const gameFinishBanner = new PopUp();

const game = new Game(GAME_DURATION, CARROT_COUNT, BUG_COUNT);

gameFinishBanner.setClickListener(() => {
  game.start();
});

game.setGameStopListner(() => {
  gameFinishBanner.showWithText('You Lost');
});
