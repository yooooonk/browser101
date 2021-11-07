// 생성자 함수 사용
function Carrot(x, y) {
  // TODO : this가 가리키는 것은?

  const carrot = document.createElement('img');
  const ground = document.querySelector('.ground');
  carrot.src = './img/carrot.png';
  carrot.classList.add('carrot');
  ground.appendChild(carrot);
  carrot.style.transform = `translate(${x},${y})`;

  carrot.addEventListener('click', () => {
    ground.removeChild(carrot);
    decreaseCarrot();
  });
}

// TODO : 프로토타입으로 구현하려면..?
Carrot.prototype = {
  construct: Carrot,
  init: function () {
    const self = this;
    console.log(self.carrot);
    self.carrot.addEventListener(
      ('click',
      () => {
        console.log('ㅎㅎ');
      })
    );
  }
};

const paintCarrot = () => {
  for (let i = 1; i <= 10; i++) {
    const x = `${Math.random() * 1000}px`;
    const y = `${Math.random() * 300}px`;
    new Carrot(x, y);
  }
};
