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
				} else if (currentIndex == 6) {
					animation.allAnimeFullpageIndex__6();
				} else if (currentIndex == 7) {
					animation.allAnimeFullpageIndex__7();
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
		if (nextIndex != 0) {
			document.querySelector('.fp-buttons').classList.remove('left-on-small-sreen');
		} else {
			document.querySelector('.fp-buttons').classList.add('left-on-small-sreen');
		}
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
					document.querySelector('.fp-buttons').classList.add('left-on-small-sreen');
					animation.allAnimeFullpageIndex__0();
				}
			})
		}
	})()
}

// SETBACKGROUND IMAGE
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
		slidesPerView: 1,
		spaceBetween: 27,
		navigation: {
			prevEl: '.slider-section-news-button-prev',
			nextEl: '.slider-section-news-button-next',
		},
		speed: 1000,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 27,
			},
			450: {
				slidesPerView: 2,
				spaceBetween: 27,
			}
		}
	})
}

// INIT SLIDER PRODUCTS
const initSliderProducts = () => {
	const products = new Swiper('.slider-section-products .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 22,
		navigation: {
			prevEl: '.slider-section-products-button-prev',
			nextEl: '.slider-section-products-button-next',
		},
		speed: 1000,
		breakpoints: {
			450: {
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 4,
			},
		}
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

const showMenuMobile = () => {
	const btn = document.querySelector('.hamburgerIcon');
	const menu = document.querySelector('.navbottom__wrapper');
	const body = document.querySelector('body');
	const overlay = document.querySelector('#overlay');
	btn.addEventListener('click', (e) => {
		btn.classList.toggle('active');
		menu.classList.toggle('show');
		overlay.classList.toggle('show');
		body.classList.toggle('disabled');
		resetAllActionBlockService();
	})
	overlay.addEventListener('click', (e) => {
		resetAllActionMenuMobile();
	})
}

const showBlockService = () => {
	const btn = document.querySelector('.button-show-block-service');
	const blockService = document.querySelector('.section-services');
	if (btn) {
		btn.addEventListener('click', (e) => {
			blockService.classList.toggle('show');
		})
	}
}

const actionClickMenuPC = () => {
	const buttons = document.querySelectorAll('.navBar__item[fp-target]');
	const triggers = Array.from(document.querySelectorAll('.fp-nav-item[fp-target]'));
	buttons.forEach((item) => {
		item.addEventListener('click', () => {
			const item__index = item.getAttribute('fp-target');
			if (item__index == 1) {
				triggers.filter(item => item.getAttribute('fp-target') == 1)[0].click();
			} else if (item__index == 2) {
				triggers.filter(item => item.getAttribute('fp-target') == 2)[0].click();
			} else if (item__index == 3) {
				triggers.filter(item => item.getAttribute('fp-target') == 3)[0].click();
			} else if (item__index == 4) {
				triggers.filter(item => item.getAttribute('fp-target') == 4)[0].click();
			} else if (item__index == 5) {
				triggers.filter(item => item.getAttribute('fp-target') == 5)[0].click();
			} else if (item__index == 6) {
				triggers.filter(item => item.getAttribute('fp-target') == 6)[0].click();
			} else if (item__index == 7) {
				triggers.filter(item => item.getAttribute('fp-target') == 7)[0].click();
			}
		})
	})
}

const actionClickMenuMB = () => {
	const buttons = document.querySelectorAll('.navBar__item[scroll-to]');
	const sections = Array.from(document.querySelectorAll('.fp-slide'));
	const heightHeader = document.querySelector('header').clientHeight;
	buttons.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			const item__index = item.getAttribute('fp-target');
			if (item__index == 1) {
				sections.filter(item => item.getAttribute('id') == "about")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			} else if (item__index == 2) {
				sections.filter(item => item.getAttribute('id') == "news")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			} else if (item__index == 3) {
				sections.filter(item => item.getAttribute('id') == "products")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			} else if (item__index == 4) {
				sections.filter(item => item.getAttribute('id') == "development")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			} else if (item__index == 5) {
				sections.filter(item => item.getAttribute('id') == "relations")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			} else if (item__index == 6) {
				sections.filter(item => item.getAttribute('id') == "media")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			} else if (item__index == 7) {
				sections.filter(item => item.getAttribute('id') == "contact")[0].scrollIntoView({ block: 'center', behavior: "smooth" })
			}
			// RESET ALL ACTIONs
			resetAllActionMenuMobile();
		})
	})

}

const resetAllActionMenuMobile = () => {
	document.querySelector('.hamburgerIcon').classList.remove('active');
	document.querySelector('.navbottom__wrapper').classList.remove('show');
	document.querySelector('body').classList.remove('disabled');
	document.querySelector('#overlay').classList.remove('show');
}

const resetAllActionBlockService = () => {
	document.querySelector('.section-services').classList.remove('show');
}

// SETTING LAYOUT MOBILE
class settingLayoutMobile {
	heightHeader = document.querySelector('header').clientHeight;
	// PADDING-TOP
	paddingTop__main() {
		document.querySelector('main').setAttribute('style', `padding-top:${this.heightHeader}px`);
	}
	// SET TOP NAVBAR
	top__navBarWrapper() {
		document.querySelector('.navbottom__wrapper').setAttribute('style', `top:${this.heightHeader}px`);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// CALL CLASS SETTING LAYOUT
	const settingMBLayout = new settingLayoutMobile;
	// GET SVG
	getSVGs();
	// SETTING LAYOUT
	if (window.innerWidth > 1024) {
		// INIT FULLPAGE
		initFullpage();
		// ACTION CLICK MENU PC
		actionClickMenuPC();
	} else {
		// LOADING
		Loading();
		// padding-top => <main></main>
		settingMBLayout.paddingTop__main();
		// ACTION CLICK MENU MB
		actionClickMenuMB();
	}
	// SETTING LAYOUT
	if (window.innerWidth < 767) {
		// top => <div class="navbottom__wrapper"></div>
		settingMBLayout.top__navBarWrapper();
	}
	// SET BACKGROUND IMAGE SECTION
	setBackgroundImageSection();
	// INIT SLIDER NEWS
	initSliderNews();
	// INIT SLIDER PRODUCTS
	initSliderProducts();
	// INIT SLIDER MEDIA
	initSliderMedia();
	// SHOW MENU MOBILE
	showMenuMobile();
	// SHOW BLOCK SERVICE
	showBlockService();
});

window.addEventListener('resize', () => {
	// CALL CLASS SETTING LAYOUT
	const settingMBLayout = new settingLayoutMobile;
	if (window.innerWidth > 1024) {
		// INIT FULLPAGE
		initFullpage();
		// ACTION CLICK MENU PC
		actionClickMenuPC();
	} else {
		// LOADING
		Loading();
		// padding-top => <main></main>
		settingMBLayout.paddingTop__main();
		// ACTION CLICK MENU MB
		actionClickMenuMB();
	}
	if (window.innerWidth < 767) {
		// top => <div class="navbottom__wrapper"></div>
		settingMBLayout.top__navBarWrapper();
	}
})