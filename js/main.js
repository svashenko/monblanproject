const tileBtn = document.querySelector('.tile-btn');
const listBtn = document.querySelector('.list-btn');
const gallWrapper = document.querySelector('.gallery__wrapper');
const items = document.querySelectorAll('.gallery__item');
const loadBtn = document.querySelector('.load-btn');
const picker1 = datepicker('.datepicker-first input');
const picker2 = datepicker('.datepicker-second input');
const media700 = window.matchMedia('(max-width: 700px)')
const media375 = window.matchMedia('(max-width: 375px)')

document.querySelector('.datepicker-first .datepicker-open').addEventListener('click', e => {
  e.stopPropagation()
  picker1.show();
});

document.querySelector('.datepicker-second .datepicker-open').addEventListener('click', e => {
  e.stopPropagation()
  picker2.show();
});

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i <= items.length; i++) {
    items[i].style.display = 'flex';
    if (i > 8) {
      items[i].style.display = 'none';
    }
  }
});

loadBtn.onclick = function () {
  if (gallWrapper.classList.contains('list-view')) {
    items.forEach(item => item.style.display = 'flex')
  } else if (gallWrapper.classList.contains('tile-view')) {
    items.forEach(item => item.style.display = 'block')
  }
  this.style.display = 'none';
}

tileBtn.onclick = function () {
  listBtn.classList.remove('active');
  this.classList.add('active');
  gallWrapper.classList.remove('list-view');
  gallWrapper.classList.add('tile-view');
  loadBtn.style.display = 'block';

  for (let i = 0; i <= items.length; i++) {
    items[i].style.display = 'block'
    if (i > 7) {
      items[i].style.display = 'none';
    } else if(media700.matches && i > 3) {
      items[i].style.display = 'none'
    } else if(media375.matches && i > 1) {
      items[i].style.display = 'none'
    }
  }
}

listBtn.onclick = function () {
  tileBtn.classList.remove('active');
  this.classList.add('active');
  gallWrapper.classList.remove('tile-view');
  gallWrapper.classList.add('list-view');
  loadBtn.style.display = 'block';

  for (let i = 0; i <= items.length; i++) {
    items[i].style.display = 'flex';
    if (i > 8) {
      items[i].style.display = 'none';
    }
  }
}
