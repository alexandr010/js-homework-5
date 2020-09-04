function createCarousel(slidesCount) {
  let carousel = document.createElement('div');
  carousel.className = 'carousel';
  document.body.prepend(carousel);

  let slideList = document.createElement('ul');
  slideList.className = 'slides';
  carousel.append(slideList);

  for (let i = 0; i < slidesCount; i++) {
    let slidesItem = document.createElement('li');
    slidesItem.className = 'slides__item';
    slideList.appendChild(slidesItem);
    i === 0 && slidesItem.classList.add('active');
    slidesItem.innerHTML = `<a href = #></a>`;
  }

  let indicator = document.createElement('div');
  indicator.className = 'indicators';
  carousel.append(indicator);

  for (let i = 0; i < slidesCount; i++) {
    let indicatorItem = document.createElement('span');
    indicatorItem.className = 'indicators__item';
    i === 0 && indicatorItem.classList.add('active');
    indicatorItem.setAttribute('data-slide-to', `${i}`);
    indicator.append(indicatorItem);
  }

 }
createCarousel(5);

// function getListContent() {
// let fragment = new DocumentFragment();

// for(let i=1; i<=3; i++) {
//     let li = document.createElement('li');
//     li.append();
//     fragment.append(li);
//   }

//   return fragment;
// }

// slideList.append(getListContent());
