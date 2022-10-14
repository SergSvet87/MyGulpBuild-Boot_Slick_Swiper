/*--------------------------------- 
Slider 
-----------------------------*/
const slider = () => {

	// Слайдер для хедера
	const swiperMain = new Swiper('.main__slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,

		// Navigation arrows
		navigation: {
			nextEl: '.slider-main__arrow.swiper-button-next',
			prevEl: '.slider-main__arrow.swiper-button-prev',
		},
	});


	// const swiper = new Swiper('.spec__slider', {
	// 	loop: true,
	// 	speed: 1000,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	}
	// });


	// const swiperMenu = new Swiper('.menu__slider', {
	// 	slidesPerView: 2,
	// 	slidesPerColumn: 2,
	// 	speed: 500,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	}
	// });
}

export default slider;
