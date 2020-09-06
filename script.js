function createCarousel(slidesCount) {
  const carousel = document.createElement('div');
  carousel.setAttribute('id', 'carousel');
  carousel.className = 'carousel';
  document.body.prepend(carousel);

  const slideList = document.createElement('ul');
  slideList.className = 'slides';
  carousel.append(slideList);

  for (let i = 0; i < slidesCount; i++) {
    const slidesItem = document.createElement('li');
    slidesItem.className = 'slides__item';
    slideList.appendChild(slidesItem);
    i === 0 && slidesItem.classList.add('active');
    slidesItem.innerHTML = `<a href = #>${i}</a>`;
  }

  const indicator = document.createElement('div');
  indicator.className = 'indicators';
  carousel.append(indicator);

  for (let i = 0; i < slidesCount; i++) {
    const indicatorItem = document.createElement('span');
    indicatorItem.className = 'indicators__item';
    i === 0 && indicatorItem.classList.add('active');
    indicatorItem.setAttribute('data-slide-to', `${i}`);
    indicator.append(indicatorItem);
  }
  const control = document.createElement('div');
  control.className = 'controls';
  carousel.append(control);
  const NEXT = `<div class = "controls__item controls__next"><i class = "fas fa-chevron-right"></i></div>`;
  const PREV = `<div class = "controls__item controls__prev"><i class = "fas fa-chevron-left"></i></div>`;
  const PAUSE = `<div class = "controls__item controls__pause"><i class = "fas fa-play"></i></div>`;
  control.innerHTML = PREV + NEXT + PAUSE;

  const styleTag = document.createElement('style');
  carousel.append(styleTag);
  // styleTag.setAttribute('style', 'display: block');

  const container = document.querySelector('#carousel');
  const slide = container.querySelector('.slides');
  const slideItem = slide.querySelectorAll('.slides__item');

  styleTag.innerHTML = `.slides{display: flex; background-color: red; list-style: none}`;

  console.log(slideItem);
 }
createCarousel(5);
