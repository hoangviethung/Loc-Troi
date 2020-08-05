export const allAnimeFullpageIndex__1 = () => {
	typographyAnimateStyle__1();
	typographyAnimateStyle__2();
}

export const allAnimeFullpageIndex__2 = () => {
	numberAnimateStyle__1();
}

export const allAnimeFullpageIndex__5 = () => {
	typographyAnimateStyle__1();
	typographyAnimateStyle__2();
}

const typographyAnimateStyle__1 = () => {
	// Wrap every letter in a span
	const textsWrapper = document.querySelectorAll('.typography-animate-1');
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
	const textWrappers = document.querySelectorAll('.typography-animate-2');
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