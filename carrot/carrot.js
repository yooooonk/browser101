// 생성자 함수 사용
function Carrot(x, y) {
  // TODO : this가 가리키는 것은?

  const carrot = document.createElement('img');

  carrot.src = './img/carrot.png';
  carrot.classList.add('carrot');
  ground.appendChild(carrot);
  carrot.style.transform = `translate(${x},${y})`;

  // TODO : 프로토타입으로 구현하려면..?
  carrot.addEventListener('click', () => {
    ground.removeChild(carrot);
    decreaseCarrot();
  });
}

const paintCarrot = () => {
  for (let i = 1; i <= 10; i++) {
    const x = `${Math.random() * 1000}px`;
    const y = `${Math.random() * 300}px`;
    new Carrot(x, y);
  }
};
