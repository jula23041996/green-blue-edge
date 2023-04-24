// Fixed navbar
const sidenav = document.getElementById("mySidenav");
const heroImage = document.querySelector(".hero-image__container");
const footer = document.querySelector(".footer__container");
const heroImageHeight = heroImage.offsetHeight;
const sidenavTop = sidenav.offsetTop;
const sidenavBottom = sidenav.offsetBottom;
const sidenavHeight = sidenav.offsetHeight;
const footerTop = footer.offsetTop;
const distanceToFooter = footerTop - sidenavTop + sidenavHeight;

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= heroImageHeight) {
    sidenav.classList.add("fixed");
    sidenav.style.top = "0";
  } else {
    sidenav.classList.remove("fixed");
    sidenav.style.top = sidenavTop - heroImageHeight + "px";
  }
  if (window.pageYOffset + sidenavHeight >= footerTop) {
    const newTop = footerTop - distanceToFooter;
    sidenav.style.top = newTop + "px";
  }
});
/*
// Get all elements with the class 'toggle-div'
const toggleDivs = document.querySelectorAll('.stage');

// Attach a click event listener to each toggle div
toggleDivs.forEach(function(div) {
  div.addEventListener('click', function() {
    // Get the next sibling element of the clicked div
    const targetDiv = div.firstElementChild;
	const targetDiv2 = div.lastElementChild;
    // Toggle the display of the target div
    if (targetDiv.style.display === 'none') {
      targetDiv.style.display = 'block';
	  targetDiv2.style.display = 'none';
    } else {
      targetDiv.style.display = 'none';
	  targetDiv2.style.display = 'block';
    }
  });
});
toggleDivs.forEach(function(div) {
	div.addEventListener('mouseenter', function() {
	  // Get the next sibling element of the clicked div
	  const targetDiv = div.firstElementChild;
	  const targetDiv2 = div.lastElementChild;
	  // Toggle the display of the target div
	  if (targetDiv.style.display === 'none') {
		targetDiv.style.display = 'block';
		targetDiv2.style.display = 'none';
	  } else {
		targetDiv.style.display = 'none';
		targetDiv2.style.display = 'block';
	  }
	});
  });
  toggleDivs.forEach(function(div) {
	div.addEventListener('mouseleave', function() {
	  // Get the next sibling element of the clicked div
	  const targetDiv = div.firstElementChild;
	  const targetDiv2 = div.lastElementChild;
	  // Toggle the display of the target div
	  if (targetDiv.style.display === 'none') {
		targetDiv.style.display = 'block';
		targetDiv2.style.display = 'none';
	  } else {
		targetDiv.style.display = 'none';
		targetDiv2.style.display = 'block';
	  }
	});
  });
*/

//Toggling for divs
const toggleDivs = document.querySelectorAll('.stage');

function toggleDisplay() {
  // Get the next sibling element of the clicked div
  const targetDiv = this.firstElementChild;
  const targetDiv2 = this.lastElementChild;
  // Toggle the display of the target div
  if (targetDiv.style.display === 'none') {
    targetDiv.style.display = 'block';
    targetDiv2.style.display = 'none';
  } else {
    targetDiv.style.display = 'none';
    targetDiv2.style.display = 'block';
  }
}

// Add click event listener for all screen sizes
toggleDivs.forEach(function(div) {
  div.addEventListener('click', toggleDisplay);
});

// Add mouseenter and mouseleave event listeners for desktop only
if (window.innerWidth < 1024) {
  toggleDivs.forEach(function(div) {
    div.addEventListener('mouseenter', toggleDisplay);
    div.addEventListener('mouseleave', toggleDisplay);
  });
}
  
//Toggling for parts 
const toggleParts = document.querySelectorAll('.sustainability__part');

function toggleDisplay() {
  // Get the next sibling element of the clicked div
  const targetPart = this.firstElementChild;
  const targetPart2 = this.lastElementChild;
  // Toggle the display of the target div
  if (targetPart.style.display === 'none') {
    targetPart.style.display = 'block';
    targetPart2.style.display = 'none';
  } else {
    targetPart.style.display = 'none';
    targetPart2.style.display = 'block';
  }
}

if (window.matchMedia('(max-width: 1024px)').matches) {
  toggleParts.forEach(function(part) {
    part.addEventListener('click', toggleDisplay);
    part.removeEventListener('mouseenter', toggleDisplay);
    part.removeEventListener('mouseleave', toggleDisplay);
  });
} else {
  toggleParts.forEach(function(part) {
    part.removeEventListener('click', toggleDisplay);
    part.addEventListener('mouseenter', toggleDisplay);
    part.addEventListener('mouseleave', toggleDisplay);
  });
}

// Get all the dropdown buttons
const dropdownButtons2 = document.querySelectorAll('.item__subtitle');

// Loop through the dropdown buttons and add event listeners
dropdownButtons2.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the dropdown content that is next to the button
    const dropdownContent = button.nextElementSibling;

    // Toggle the display of the dropdown content
    dropdownContent.classList.toggle('show');
  });
});
// Инициализируем Swiper
let myImageSlider = new Swiper('.swiper-container', {
	// Стрелки
	navigation: {
		nextEl: '.next',
		prevEl: '.previous'
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 1,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/
	

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

	
	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',
	
	/*
	// Эффекты переключения слайдов.
	// Cмена прозрачности
	effect: 'fade',

	// Дополнение к fade
	fadeEffect: {
		// Параллельная
		// смена прозрачности
		crossFade: true
	},
	*/
	
	/*
	// Эффекты переключения слайдов.
	// Переворот
	effect: 'flip',

	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	*/
	
	/*
	// Эффекты переключения слайдов.
	// Куб
	effect: 'cube',

	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	*/
	/*
	// Эффекты переключения слайдов.
	// Эффект потока
	effect: 'coverflow',

	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 10,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: false,
	},
	*/

	
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.5,
		},
		992: {
			slidesPerView: 2,
		},
	},

	/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Миниатюры (превью)
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/
	/*
	// Передача управления
	controller: {
		control: myTextSlider
	},
	*/

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Виртуальные слайды
	// формирование слайдера
	/*
	virtual: {
		slides: (function () {
			let slide = []
			for (let i = 0; i < 500; i++) {
				slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
			}
			return slide;
		}()),
	},
	*/
	/*
	// Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
	*/
	/*
	// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/
});

/*
// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа
	// перетаскивания\свайпа
	// для дочернего слайдера
	nested: true,
});
*/
/*
// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/

/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/


/*
// Параметры
// Получение
let qSlides = myImageSlider.slides.length;

// Изменение
myImageSlider.params.speed = 3000;
*/

/*
// Методы
// Обновить слайдер
myImageSlider.update();

// Переключится на слайд 2, скорость 800
myImageSlider.slideTo(2, 800);
*/

/*
// События
// Событие смены слайда
myImageSlider.on('slideChange', function () {
	console.log('Слайд переключен');
});
*/


/*
// Запуск автоппрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider  - это переменная которой присвоен слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
});

*/



/*
// Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});
*/
