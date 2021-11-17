'use strict';

import { playCarrot, playBug } from './sound.js';

const CARROT_SIZE = 80;

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.field = document.querySelector('.ground');
    this.fieldRect = this.field.getBoundingClientRect();

    // this 바인딩!!!
    //this.onClick = this.onClick.bind(this);
    //this.field.addEventListener('click', (event) => this.onClick(event));
    this.field.addEventListener('click', this.onClick);

    /*
    this.field.addEventListener('click',this.onClick)
    -> 이렇게 하면 onItemclick이 undefined으로 나오는데, click의 콜백으로 전달할 때 클래스의 정보는 안넘어가기 때문
    
    this.field.addEventListener('click', (event) => {
      const target = event.target;
      if (target.matches('.carrot')) {
        target.remove();
        playCarrot();
        this.onItemClick && this.onItemClick('carrot');
      } else if (target.matches('.bug')) {
        playBug();
        this.onItemClick && this.onItemClick('bug');
      }
    }); */ //this.onClick
  }
  init() {
    this.field.innerHTML = '';
    this._addItem('carrot', this.carrotCount, 'img/carrot.png');
    this._addItem('bug', this.bugCount, 'img/bug.png');
  }
  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;

    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;

    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = this._randomNumber(x1, x2);
      const y = this._randomNumber(y1, y2);

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;

      this.field.appendChild(item);
    }
  }
  _randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  onClick = (event) => {
    // arrow function은 자동으로 this바인딩
    const target = event.target;
    if (target.matches('.carrot')) {
      target.remove();
      playCarrot();
      this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug');
      playBug();
    }
  };

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
}
