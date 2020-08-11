import { getSVGs, Loading } from "./utilities/util";
import Fullpage from "./libraries/Fullpage";
import * as animation from "./animation/animation";

// INIT FULLPAGE
const initFullpage = () => {
	// create instance fullpage
	const fp = new Fullpage(".fp-container", {
		prevEl: ".fp-prev",
		nextEl: ".fp-next",
		speed: 800,
		slideClass: ".fp-slide",
		navigation: true,
		on: {
			// Event is fired before slide start transition
			beforeSlideChange: function (currentSlide, nextSlide, currentIndex, nextIndex) {
				actionNavigation(nextIndex);
				changeTemplateFullpage(nextIndex);
			},
			// Event is fired after slide end transition
			afterSlideChange: function (currentSlide, currentIndex) {
				if (currentIndex == 0) {
					animation.allAnimeFullpageIndex__0();
				} else if (currentIndex == 1) {
					animation.allAnimeFullpageIndex__1();
				} else if (currentIndex == 2) {
					animation.allAnimeFullpageIndex__2();
				} else if (currentIndex == 3) {
					animation.allAnimeFullpageIndex__3();
				} else if (currentIndex == 4) {
					animation.allAnimeFullpageIndex__4();
				} else if (currentIndex == 5) {
					animation.allAnimeFullpageIndex__5();
				}
			},
		},
	});
	// HIIDEN BUTTON PREV
	fp.prevEl.classList.add('hidden-btn');
	// FUNCTION MORE HERE !!!
	const actionNavigation = (nextIndex) => {
		if (nextIndex + 1 == fp.getSlideLenght()) {
			fp.nextEl.classList.add('hidden-btn');
			fp.prevEl.classList.remove('hidden-btn');
		} else {
			fp.nextEl.classList.remove('hidden-btn');
			fp.prevEl.classList.add('hidden-btn');
		}
	}
	const changeTemplateFullpage = (nextIndex) => {
		if (nextIndex == 2) {
			fp.linksWrapper.classList.add('template--gray');
			fp.prevEl.classList.add('template--green');
			fp.nextEl.classList.add('template--green');
			document.querySelector('header').classList.add('template--white');
		} else {
			fp.linksWrapper.classList.remove('template--gray');
			fp.prevEl.classList.remove('template--green');
			fp.nextEl.classList.remove('template--green');
			document.querySelector('header').classList.remove('template--white');
		}
	}
	// ACTION AFTER LOADING
	(function () {
		if (fp.getIndex() == 0) {
			Loading().then(() => {
				if (fp.getIndex() == 0) {
					animation.allAnimeFullpageIndex__0();
				}
			})
		}
	})()
}

const setBackgroundImageSection = () => {
	// PARAMS HERE !!!
	const datas = document.querySelectorAll("[fp-bg]");
	// ACTION !!!
	datas.forEach((item) => {
		const link = item.getAttribute("fp-bg");
		item.setAttribute("style", `background-image:url(${link})`);
	});
};

// INIT SLIDER NEW
const initSliderNews = () => {
	const news = new Swiper('.slider-section-news .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 27,
		navigation: {
			prevEl: '.slider-section-news-button-prev',
			nextEl: '.slider-section-news-button-next',
		},
	})
}

// INIT SLIDER PRODUCTS
const initSliderProducts = () => {
	const products = new Swiper('.slider-section-products .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 22,
		navigation: {
			prevEl: '.slider-section-products-button-prev',
			nextEl: '.slider-section-products-button-next',
		},
	})
}

// INIT SLIDER MEDIA
const initSliderMedia = () => {
	const media = new Swiper('.slider-section-media .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 22,
		navigation: {
			nextEl: '.slider-section-media-button-next',
		},
	})
}

document.addEventListener("DOMContentLoaded", () => {
	getSVGs();
	Loading();
	// INIT FULLPAGE
	initFullpage();
	// SET BACKGROUND IMAGE SECTION
	setBackgroundImageSection();
	// INIT SLIDER NEWS
	initSliderNews();
	// INIT SLIDER PRODUCTS
	initSliderProducts();
	// INIT SLIDER MEDIA
	initSliderMedia();
});
