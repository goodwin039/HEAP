const slider = document.querySelector('.slider');
const leftArr = document.querySelector('.leftArr');
const rightArr = document.querySelector('.rightArr');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;

let slideIndex = 0;
//двигаем слайды левой стрелкой
leftArr.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;  
  if(slideIndex == 0){
    admiral.classList.remove('active_grey');
    admiral.classList.add('active_yellow');
    thieves.classList.add('active_grey');
    patriotic.classList.add('active_grey');
  }else{
    if(slideIndex == 1){
      thieves.classList.remove('active_grey');  
      thieves.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      patriotic.classList.add('active_grey');
    }else{
      patriotic.classList.remove('active_grey');
      patriotic.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      thieves.classList.add('active_grey');
    }
  }
 //разукрашиваем кружки
  sliderDots.forEach((item) => {
    if(Number(item.getAttribute('data-index')) == slideIndex){
        item.classList.add('active');        
    }else{
      if(item.classList.contains('active')) item.classList.remove('active');
    }
  }); 
  slide();
});
//двигаем слайды правой стрелкой
rightArr.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  if(slideIndex == 0){
    admiral.classList.remove('active_grey');
    admiral.classList.add('active_yellow');
    thieves.classList.add('active_grey');
    patriotic.classList.add('active_grey');
  }else{
    if(slideIndex == 1){
      thieves.classList.remove('active_grey');  
      thieves.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      patriotic.classList.add('active_grey');
    }else{
      patriotic.classList.remove('active_grey');
      patriotic.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      thieves.classList.add('active_grey');
    }
  }
  //разукрашиваем кружки
  sliderDots.forEach((item) => {
    if(Number(item.getAttribute('data-index')) == slideIndex){
        item.classList.add('active');        
    }else{
      if(item.classList.contains('active')) item.classList.remove('active');
    }
  }); 
  slide();  
});

const admiral = document.querySelector('.admiral');
const thieves = document.querySelector('.thieves');
const patriotic = document.querySelector('.patriotic');
//ссылка над картинкой admiral
admiral.addEventListener('click', () => {
  admiral.classList.remove('active_grey');
  admiral.classList.add('active_yellow');
  thieves.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 0;
  //разукрашиваем кружки
  sliderDots.forEach((item) => {
    if(Number(item.getAttribute('data-index')) == slideIndex){
        item.classList.add('active');        
    }else{
      if(item.classList.contains('active')) item.classList.remove('active');
    }
  }); 
  slide();
});
//ссылка над картинкой thieves
thieves.addEventListener('click', () => {
  thieves.classList.remove('active_grey');  
  thieves.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 1;
  //разукрашиваем кружки
  sliderDots.forEach((item) => {
    if(Number(item.getAttribute('data-index')) == slideIndex){
        item.classList.add('active');        
    }else{
      if(item.classList.contains('active')) item.classList.remove('active');
    }
  }); 
  slide();
});
//ссылка над картинкой patriotic
patriotic.addEventListener('click', () => {
  patriotic.classList.remove('active_grey');
  patriotic.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  thieves.classList.add('active_grey');
  slideIndex = 2;
  //разукрашиваем кружки
  sliderDots.forEach((item) => {
    if(Number(item.getAttribute('data-index')) == slideIndex){
        item.classList.add('active');        
    }else{
      if(item.classList.contains('active')) item.classList.remove('active');
    }
  }); 
  slide();  
});
//функция для передвижения картинок
const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
  
}

const sliderDots = document.querySelectorAll('.dot');

sliderDots.forEach((item) => {
	item.addEventListener('click', (event) => {
		setSlider(event.target.getAttribute('data-index'));
	});
});

function setSlider(index){
	sliderDots.forEach((item) => {
		if(Number(item.getAttribute('data-index')) === Number(index)){
    		item.classList.add('active');        
        slideIndex = Number(index);
        if(slideIndex == 0){
          admiral.classList.remove('active_grey');
          admiral.classList.add('active_yellow');
          thieves.classList.add('active_grey');
          patriotic.classList.add('active_grey');
        }else{
          if(slideIndex == 1){
            thieves.classList.remove('active_grey');  
            thieves.classList.add('active_yellow');
            admiral.classList.add('active_grey');
            patriotic.classList.add('active_grey');
          }else{
            patriotic.classList.remove('active_grey');
            patriotic.classList.add('active_yellow');
            admiral.classList.add('active_grey');
            thieves.classList.add('active_grey');
          }
        }
        slide();
		}else{
			if(item.classList.contains('active')) item.classList.remove('active');
		}
	});
}

window.addEventListener('load', () => {
  slide();
});


