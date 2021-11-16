'use strict';
export default class PopUp {
  constructor() {
    this.popup = document.querySelector('.popup');
    this.replayButton = document.querySelector('.popup_replay-button');
    this.popupText = document.querySelector('.popup_message');

    this.replayButton.addEventListener('click', () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  hide() {
    this.popup.classList.add('popup-hide');
  }

  showWithText(text) {
    this.popup.classList.remove('popup-hide');

    this.popupText.innerText = text;
  }
}
