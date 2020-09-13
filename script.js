function createSlides (slidesCount) {
  const slideList = document.createElement('ul');
  slideList.className = 'slides';

  for (let i = 0; i < slidesCount; i++) {
    const slidesItem = document.createElement('li');
    slidesItem.className = 'slides__item';
    slideList.appendChild(slidesItem);
    i === 0 && slidesItem.classList.add('active');
    slidesItem.innerHTML = `<a href = #>Slides${i}</a>`;
  }
  return slideList;
}

function creatIndicators(slidesCount) {
 const indicator = document.createElement('div');
  indicator.className = 'indicators';

  for (let i = 0; i < slidesCount; i++) {
    const indicatorItem = document.createElement('span');
    indicatorItem.className = 'indicators__item';
    i === 0 && indicatorItem.classList.add('active');
    indicatorItem.setAttribute('data-slide-to', `${i}`);
    indicator.append(indicatorItem);
  }

  return indicator;
}


function createControls () {
  const control = document.createElement('div');
  control.className = 'controls';
  const NEXT = `<div class = "controls__item controls__next"><i class = "fas fa-chevron-right">NEXT</i></div>`;
  const PREV = `<div class = "controls__item controls__prev"><i class = "fas fa-chevron-left">PREV</i></div>`;
  const PAUSE = `<div class = "controls__item controls__pause"><i class = "fas fa-play">PAUSE</i></div>`;
  control.innerHTML = PREV + NEXT + PAUSE;
  return control;
}

function createStyle() {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
  .slides{
    position: relative;
    height: 200px;
    background-color: red;
    list-style: none;
  }
  .slides__item{
    position: absolute;
    opacity: 0;
    z-index: 1;
    height: 100%;
    font-size: 30px;
    padding: 20px 0 0 0;
  }
  .controls{
    position: relative;
  }
  .controls__item{
    display: flex;
    margin: 5px;
    width: 100px;
    height: 25px;
    border: 2px solid black;
  }
  .fas{
   padding: 5px 5px 5px 25px;
   color: violet;

  }
  .indicators{
    display:flex;
    }
  .indicators__item{
    margin: 0 0 10px 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: blue;
  }
  .active{
    opacity: 1;
    z-index: 2;
  }
  `;
  return styleTag;
}


function createCarousel(slidesCount) {

  const carousel = document.getElementById('carousel');

  const slideList = createSlides(slidesCount);
  carousel.append(slideList);

  carousel.append(creatIndicators(slidesCount));

  carousel.append(createControls(slidesCount));

  const styleTag = createStyle();
  carousel.append(styleTag);

  let indicatorContainer = document.querySelector('.indicators');

  let pointer = null;
  indicatorContainer.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('indicators__item')){
      target.style.backgroundColor = "red";

      if (pointer !== null) {
        pointer.removeAttribute('style');
      }
      pointer = target;
    }
  });
}

createCarousel(5);
