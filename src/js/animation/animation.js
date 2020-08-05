export const allAnimeFullpageIndex__1 = () => {
	typographyAnimateStyle__1();
	typographyAnimateStyle__2();
}

const typographyAnimateStyle__1 = () => {
	// Wrap every letter in a span
	var textsWrapper = document.querySelectorAll('.typography-animate-1');
	textsWrapper.forEach((item) => {
		item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	})
	anime.timeline()
		.add({
			targets: '.typography-animate-1 .letter',
			scale: [4, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 950,
			delay: (el, i) => 70 * i
		}).add({
			targets: '.typography-animate-1',
			opacity: 1,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 1000
		});
}

const typographyAnimateStyle__2 = () => {
	// Wrap every letter in a span
	var textWrappers = document.querySelectorAll('.typography-animate-2');
	textWrappers.forEach((item) => {
		item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	})
	anime.timeline()
		.add({
			targets: '.typography-animate-2 .letter',
			rotateY: [-90, 0],
			duration: 2000,
			delay: (el, i) => 45 * i
		}).add({
			targets: '.typography-animate-2',
			opacity: 1,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 3000
		});
}