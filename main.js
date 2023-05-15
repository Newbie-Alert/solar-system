// solar system
const btns = document.querySelectorAll('.btn h6');
const sun = document.querySelector('#sun');
const planets = document.querySelectorAll('.line');
const names = document.querySelectorAll('.name');
const background = document.querySelector('#solar-system');
const all = document.querySelector('.all-btn');
const vortex = document.querySelector('.threeD-btn');
const normal = document.querySelector('.twoD-btn');
const zoom = document.querySelector('.zoom-out')


// 3D
vortex.addEventListener('click', () => {
  planets.forEach(el => {
    el.style.animation = `bgRotate 30s linear infinite`;
  })
  zoom.zIndex = 1;
  zoom.style.opacity = 1;
  setTimeout(zoomOut, 3000)
})
function zoomOut() {
  zoom.style.opacity = 0;
}

//2D
normal.addEventListener('click', () => {
  planets.forEach(el => {
    el.style.animation = ``;
  })
})



all.addEventListener('click', () => {
  showAll();
})

background.addEventListener('click', (e) => {
  e.stopPropagation();
  hideName();
  opacityLow();
})

btns.forEach(el => {
  el.addEventListener('click', (e) => {
    let index = e.target.dataset.id;
    hideName();
    names[index].style.display = 'block';

    if (index == index) {
      opacityLow();
      planets[index].style.opacity = 1;
    }
  })
})

function hideName() {
  names.forEach(item => {
    item.style.display = 'none';
  })
}
function showAll() {
  names.forEach(item => {
    item.style.display = 'block'
  })
  planets.forEach(item => {
    item.style.opacity = 1;
  })
}

function opacityLow() {
  planets.forEach(item => {
    item.style.opacity = 0.5;
  }
  )
}
