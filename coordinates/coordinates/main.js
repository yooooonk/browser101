   /*  const outter = document.querySelector('.outter');
      const inner = document.querySelector('.inner'); */
      const coordinate = document.querySelector('.coordinate');
      const hor = document.querySelector('.hor');
      const vert = document.querySelector('.vert');
      const target = document.querySelector('.target');
      const targetRect = target.getBoundingClientRect();

addEventListener('load',()=>{
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;


    document.addEventListener('mousemove',(e)=>{
      const x = e.clientX;
      const y = e.clientY;

      
      
      target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`


      hor.style.transform = `translateY(${y}px)`
      vert.style.transform = `translateX(${x}px)`

      coordinate.style.transform = `translate(${x}px,${y}px)`
      coordinate.innerText = `${x}px,${y}px`
    })
})