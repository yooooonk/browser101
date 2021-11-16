function Bug(x, y) {
  // TODO : this가 가리키는 것은?

  const bug = document.createElement('img');
  const ground = document.querySelector('.ground');
  bug.src = './img/bug.png';
  bug.classList.add('bug');
  ground.appendChild(bug);
  bug.style.transform = `translate(${x},${y})`;

  bug.addEventListener('click', () => {
    ground.removeChild(bug);
    endGame();
  });
}

const paintBug = () => {
  for (let i = 1; i <= 10; i++) {
    const x = `${Math.random() * 1000}px`;
    const y = `${Math.random() * 300}px`;
    new Bug(x, y);
  }
};
