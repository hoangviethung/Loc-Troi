import { getSVGs, Loading } from "./utilities/util";
import Fullpage from "./libraries/Fullpage";
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
			// event is fired before slide start transition
			beforeSlideChange: function (currentSlide, nextSlide, currentIndex, nextIndex) {
			},
			// event is fired after slide end transition
			afterSlideChange: function (currentSlide, currentIndex) {
			},
		},
	});

	// method get current index of fullpage
	fp.getIndex();
	// method allow or not allow scroll to slide fullpage: true = allow, false = not allow
	fp.scroll(true);
}

const setBackgroundImageSection = () => {
	// PARAMS HERE !!!
	const datas = document.querySelectorAll('[fp-bg]');
	// ACTION !!!
	datas.forEach((item) => {
		const link = item.getAttribute('fp-bg')
		item.setAttribute('style', `background-image:url(${link})`);
	})
}

const initAnimatServiceHomePage = () => {
	anime({
		targets: '.service__item',
		translateX: function (el) {
			return el.getAttribute('data-x');
		},
		translateY: function (el, i) {
			return 50 + (-50 * i);
		},
		scale: function (el, i, l) {
			return (l - i) + .25;
		},
		rotate: function () { return anime.random(-360, 360); },
		borderRadius: function () { return ['50%', anime.random(10, 35) + '%']; },
		duration: function () { return anime.random(1200, 1800); },
		delay: function () { return anime.random(0, 400); },
		direction: 'alternate',
		loop: true
	})
}

// INIT SLIDER NEW
const initSliderNews = () => {
	const news = new Swiper('.slider-news .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 27,
		navigation: {
			prevEl: '.slider-news-button-prev',
			nextEl: '.slider-news-button-next',
		},
	})
}

// INIT SLIDER PRODUCTS
const initSliderProducts = () => {
	const products = new Swiper('.slider-products .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 22,
		navigation: {
			prevEl: '.slider-products-button-prev',
			nextEl: '.slider-products-button-next',
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
});