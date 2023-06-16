  
import '../scss/main.scss';
import Swiper from 'swiper/bundle';

const slider = document.querySelector('.brend-slider');
const SliderTechnic = document.querySelector('.technic-slider');
const SliderPrice = document.querySelector('.price-slider');
const breakpointSwiper = window.matchMedia('(max-width: 767px)');
let mySwiper;
let technicSwiper;
let priceSwiper;
function mobileSlider() {
	if (breakpointSwiper.matches ) {
		mySwiper = new Swiper(slider, {
			pagination: {
                el: '.brend-slider__pagination',
                clickable: true,
                },
                mousewheel: {
                    sensitivity: 1,
                    eventsTarget: '.brend-slider',
                  },
                 slidesPerView: 1.3,
                  spaceBetween: 16,
		});
        slider.dataset.mobile = 'true';
	}
else {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}

function technicSlider() {
	if (breakpointSwiper.matches ) {
        technicSwiper = new Swiper('.technic-slider', {
            pagination: {
                el: '.technic-slider__pagination',
                clickable: true,
                },
                mousewheel: {
                    sensitivity: 1,
                    eventsTarget: '.technic-slider',
                  },
                 slidesPerView: 1.2,
                  spaceBetween: 16,
          });
          SliderTechnic.dataset.mobile = 'true';
	}
else {
    SliderTechnic.dataset.mobile = 'false';
		if (SliderTechnic.classList.contains('swiper-initialized')) {
			technicSwiper.destroy();
		}
	}
}
function priceSlider() {
	if (breakpointSwiper.matches ) {
        priceSwiper = new Swiper('.price-slider', {
            pagination: {
                el: '.price-slider__pagination',
                clickable: true,
                },
                mousewheel: {
                    sensitivity: 1,
                    eventsTarget: '.price-slider',
                  },
                 slidesPerView: 1.2,
                  spaceBetween: 16,
          });
          SliderPrice.dataset.mobile = 'true';
	}
else {
    SliderPrice.dataset.mobile = 'false';
		if (SliderPrice.classList.contains('swiper-initialized')) {
			priceSwiper.destroy();
		}
	}
}
mobileSlider();
technicSlider();
priceSlider();
breakpointSwiper.addEventListener('change', ()=>{
    mobileSlider();
    technicSlider();
    priceSlider();
});
let hiddenBrend = document.querySelector('.brends__Size');
let showMoreButton = document.querySelector('.brands__show-more-btn');
showMoreButton.addEventListener('click', function(evt){
        if (showMoreButton.textContent === 'Скрыть') {
            showMoreButton.textContent = 'Показать все';
        } 
        else {
            showMoreButton.textContent = 'Скрыть';
         }
        showMoreButton.classList.toggle('brands__show-more-buttom');
        hiddenBrend.classList.toggle('brands');
        evt.preventDefault();
});

let hiddenTechnic = document.querySelector('.technic__Size');
let technicMoreButton = document.querySelector('.technic__show-more-btn');
technicMoreButton.addEventListener('click', function(evt){
        if (technicMoreButton.textContent === 'Скрыть') {
            technicMoreButton.textContent = 'Показать все';
          } else {
            technicMoreButton.textContent = 'Скрыть';
           }
        technicMoreButton.classList.toggle('technic__show-more-buttom');
        hiddenTechnic.classList.toggle('technic');
        evt.preventDefault();
});

let hiddeenAboutText = document.querySelector('.about__text-container--hidden');
let AboutButton = document.querySelector('.about__button');
AboutButton.addEventListener('click', function(evt){
    if (AboutButton.textContent === 'Скрыть') {
        AboutButton.textContent = 'Показать все';
      } else {
        AboutButton.textContent = 'Скрыть';
       }
       AboutButton.classList.toggle('about__btn');
    hiddeenAboutText.classList.toggle('about__text-container--text');
    evt.preventDefault();
});



const headerBurger = document.querySelector(".header__burger");
const asideMenu = document.querySelector(".aside-menu");
const asideMenuBurger = document.querySelector(".aside-menu__burger");
headerBurger.addEventListener("click", function(evt) {
    if (asideMenu.classList.contains("aside-menu--hidden")) {
        asideMenu.classList.remove("aside-menu--hidden");
    } else {
        modalCall.classList.add("aside-menu--hidden");
    }
  });
  asideMenuBurger.addEventListener("click", function(evt) {
        asideMenu.classList.remove("aside-menu--hidden");
  });

  headerBurger.addEventListener("click", function(evt) {
    if (asideMenu.classList.contains("aside-menu--hidden")) {
        asideMenu.classList.remove("aside-menu--hidden");
    } else {
        asideMenu.classList.add("aside-menu--hidden");
    }
  });
  
document.addEventListener("click", function(evt) {
    const targetElement = evt.target;
    if (targetElement.classList.contains("aside-menu--hidden")) {
      asideMenu.classList.remove("aside-menu--hidden");
    } else if (!asideMenu.contains(targetElement) && !headerBurger.contains(targetElement)) {
      asideMenu.classList.add("aside-menu");
    }
  }); 

const contactButtonTelephone = document.querySelector('.contact__button--tel');
const modalCall = document.querySelector('.wrapper__modal-call');
const headerButtonCall = document.querySelector('.header__menu--btn-tel');
const modalCallClose = document.querySelector('.modal-call__btn-close')

       contactButtonTelephone.addEventListener("click", function(evt) {
        if (modalCall.classList.contains("wrapper__modal-call--open")) {
            modalCall.classList.remove("wrapper__modal-call--open");
        } else {
            modalCall.classList.add("wrapper__modal-call--open");
        }
      });
        modalCallClose.addEventListener("click", function(evt) {
        modalCall.classList.remove("wrapper__modal-call--open");
      });
   
      headerButtonCall.addEventListener("click", function(evt) {
        if (modalCall.classList.contains("wrapper__modal-call--open")) {
            modalCall.classList.remove("wrapper__modal-call--open");
        } else {
            modalCall.classList.add("wrapper__modal-call--open");
        }
      });

const contactButtonMessage = document.querySelector('.contact__button--mess');
const hederButtonMessage = document.querySelector('.header__menu--btn-mess');
const modalFeedback = document.querySelector('.wrapper__modal-feedback');
const modalFeetbackClose = document.querySelector('.modal-feedback__btn-close');
contactButtonMessage.addEventListener("click", function(evt) {
    if (modalFeedback.classList.contains("wrapper__modal-feedback--open")) {
        modalFeedback.classList.remove("wrapper__modal-feedback--open");
    } else {
        modalFeedback.classList.add("wrapper__modal-feedback--open");
    }   
  });
  modalFeetbackClose.addEventListener("click", function(evt) {
     modalFeedback.classList.remove("wrapper__modal-feedback--open");
  });
  hederButtonMessage.addEventListener("click", function(evt) {
    if (modalFeedback.classList.contains("wrapper__modal-feedback--open")) {
        modalFeedback.classList.remove("wrapper__modal-feedback--open");
    } else {
        modalFeedback.classList.add("wrapper__modal-feedback--open");
    }   
  });
  

  

  