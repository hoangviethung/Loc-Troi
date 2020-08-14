export const allAnimeFullpageIndex__0 = () => {
	typographyAnimateStyle__1('.section-homepage');
	typographyAnimateStyle__2('.section-homepage');
}

export const allAnimeFullpageIndex__1 = () => {
	numberAnimateStyle__1();
}

export const allAnimeFullpageIndex__2 = () => {
	typographyAnimateStyle__3('.section-news');
}

export const allAnimeFullpageIndex__3 = () => {
	typographyAnimateStyle__3('.section-products');
}

export const allAnimeFullpageIndex__4 = () => {
	typographyAnimateStyle__1('.section-development');
	typographyAnimateStyle__2('.section-development');
}

export const allAnimeFullpageIndex__5 = () => {
	typographyAnimateStyle__3('.section-shareholder-relations');
}

export const allAnimeFullpageIndex__6 = () => {
	typographyAnimateStyle__1('.section-media');
}
export const allAnimeFullpageIndex__7 = () => {
	typographyAnimateStyle__1('.section-contact');
}

const typographyAnimateStyle__1 = (selector) => {
	// Wrap every letter in a span
	const texts = document.querySelectorAll(`${selector} .typography-animate-1`);
	texts.forEach((item) => {
		item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	})
	anime.timeline()
		.add({
			targets: `${selector} .typography-animate-1 .letter`,
			scale: [4, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 950,
			delay: (el, i) => 70 * i
		}).add({
			targets: `${selector} .typography-animate-1`,
			opacity: 1,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 1000
		});
}

const typographyAnimateStyle__2 = (selector) => {
	// Wrap every letter in a span
	const texts = document.querySelectorAll(`${selector} .typography-animate-2`);
	texts.forEach((item) => {
		item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	})
	anime.timeline()
		.add({
			targets: `${selector} .typography-animate-2 .letter`,
			rotateY: [-90, 0],
			duration: 2000,
			delay: (el, i) => 45 * i
		}).add({
			targets: `${selector} .typography-animate-2`,
			opacity: 1,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 3000
		});
}

const typographyAnimateStyle__3 = (selector) => {
	// Wrap every letter in a span
	var texts = document.querySelectorAll(`${selector} .typography-animate-3 h2`);
	texts.forEach((item) => {
		item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	})
	anime.timeline()
		.add({
			targets: `${selector} .typography-animate-3 h2 .letter`,
			scale: [0, 1],
			opacity: [0.5, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 500,
			delay: (el, i) => 50 * (i + 1)
		}).add({
			targets: `${selector} .typography-animate-3 .line`,
			scaleX: [0, 1],
			opacity: [0.5, 1],
			easing: "easeOutExpo",
			duration: 1000,
			offset: '-=875',
			delay: (el, i, l) => 60 * (l - i)
		})
}

const numberAnimateStyle__1 = () => {
	const roundLogEl__index0 = document.querySelector('.round-log[index="0"]');
	const roundLogEl__index1 = document.querySelector('.round-log[index="1"]');
	const roundLogEl__index2 = document.querySelector('.round-log[index="2"]');
	const roundLogEl__index3 = document.querySelector('.round-log[index="3"]');
	const values = document.querySelectorAll('.round-log');
	const numbers = {
		num_0: 0,
		num_1: 0,
		num_2: 0,
		num_3: 0,
	}
	anime({
		targets: numbers,
		num_0: Number(values[0].textContent),
		num_1: Number(values[1].textContent),
		num_2: Number(values[2].textContent),
		num_3: Number(values[3].textContent),
		round: 1,
		update: function () {
			roundLogEl__index0.innerHTML = JSON.stringify(numbers.num_0);
			roundLogEl__index1.innerHTML = JSON.stringify(numbers.num_1);
			roundLogEl__index2.innerHTML = JSON.stringify(numbers.num_2);
			roundLogEl__index3.innerHTML = JSON.stringify(numbers.num_3);
		}
	});
}