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


document.addEventListener("DOMContentLoaded", () => {
	getSVGs();
	Loading();
	// INIT FULLPAGE
	initFullpage();
	// SET BACKGROUND IMAGE SECTION
	setBackgroundImageSection();
});
