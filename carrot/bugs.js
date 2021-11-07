function Bug(x, y) {
  // TODO : this가 가리키는 것은?

  const carrot = document.createElement('img');
  const ground = document.querySelector('.ground');
  carrot.src = './img/bug.png';
  carrot.classList.add('bug');
  ground.appendChild(carrot);
  carrot.style.transform = `translate(${x},${y})`;

  carrot.addEventListener('click', () => {
    ground.removeChild(carrot);
  });
}

const paintBug = () => {
  for (let i = 1; i <= 10; i++) {
    const x = `${Math.random() * 1000}px`;
    const y = `${Math.random() * 300}px`;
    new Bug(x, y);
  }
};
