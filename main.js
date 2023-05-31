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


// 3D버튼 클릭 이벤트 발생 시 모든 개체가 태양 중심으로 회전
vortex.addEventListener('click', () => {
  planets.forEach(el => {
    el.style.animation = `bgRotate 30s linear infinite`;
  })
  zoom.zIndex = 1;
// zoom out 안내 문구 등장
  zoom.style.opacity = 1;
  
// 3초 후 zoom out 안내 문구 사라짐
  setTimeout(zoomOut, 3000)
})

function zoomOut() {
  zoom.style.opacity = 0;
}

// 2D 버튼 클릭 이벤트 발생 시 모든 개체 기본 위치로
normal.addEventListener('click', () => {
  planets.forEach(el => {
    el.style.animation = ``;
  })
})

// All 버튼 클릭 시 모든 개체의 투명도와 이름 표시
all.addEventListener('click', () => {
  showAll();
})

// 백 그라운드 아무대나 클릭 시 개체의 이름과 밝기 기본 값으로(이름 X, 투명도 0.5)
background.addEventListener('click', (e) => {
  e.stopPropagation();
  hideName();
  opacityLow();
})

// 각각의 행성이름 버튼 클릭 시 그 버튼의 dataset 값과 같은 id 값을 찾아 이름 표시
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

// 이름 표기 함수
function hideName() {
  names.forEach(item => {
    item.style.display = 'none';
  })
}
// All 버튼 조작함수_이름 표기와 투명도 1로 증가
function showAll() {
  names.forEach(item => {
    item.style.display = 'block'
  })
  planets.forEach(item => {
    item.style.opacity = 1;
  })
}
// 투명도 0.5로 복구하는 함수
function opacityLow() {
  planets.forEach(item => {
    item.style.opacity = 0.5;
  }
  )
}
