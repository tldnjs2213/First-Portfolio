// scroll event
window.addEventListener('scroll', () => {
	const scrollPositionY = document.documentElement.scrollTop;
	// console.log(scrollPositionY);
	const topBtn = document.querySelector('.scrollTopBtn');
	const fixedHeader = document.querySelector('.fixedHeader');

	if (scrollPositionY > 400) {
		topBtn.style.opacity = '1';
	} else {
		topBtn.style.opacity = '0';
	}

	if (scrollPositionY >= 300) {
		fixedHeader.style.opacity = '1';
	} else {
		fixedHeader.style.opacity = '0';
	}

	if (scrollPositionY >= 1049) {
		const seriesTitle1 = document.querySelector('.cledorStory1 h4');
		const colorLine1 = document.querySelector('.colorLine1');
		seriesTitle1.style.margin = 0;
		seriesTitle1.style.visibility = 'visible';
		seriesTitle1.style.opacity = 1;
		colorLine1.style.width = '80%';
	}

	if (scrollPositionY >= 1549) {
		const seriesTitle2 = document.querySelector('.cledorStory2 h4');
		const colorLine2 = document.querySelector('.colorLine2');
		seriesTitle2.style.margin = 0;
		seriesTitle2.style.visibility = 'visible';
		seriesTitle2.style.opacity = 1;
		colorLine2.style.width = '80%';
	}

	if (scrollPositionY >= 2049) {
		const seriesTitle3 = document.querySelector('.cledorStory3 h4');
		const colorLine3 = document.querySelector('.colorLine3');
		seriesTitle3.style.margin = 0;
		seriesTitle3.style.visibility = 'visible';
		seriesTitle3.style.opacity = 1;
		colorLine3.style.width = '80%';
	}

	if (scrollPositionY >= 2549) {
		const seriesTitle4 = document.querySelector('.cledorStory4 h4');
		const colorLine4 = document.querySelector('.colorLine4');
		seriesTitle4.style.margin = 0;
		seriesTitle4.style.visibility = 'visible';
		seriesTitle4.style.opacity = 1;
		colorLine4.style.width = '80%';
	}

	if (scrollPositionY >= 3049) {
		const seriesTitle5 = document.querySelector('.cledorStory5 h4');
		const colorLine5 = document.querySelector('.colorLine5');
		seriesTitle5.style.margin = 0;
		seriesTitle5.style.visibility = 'visible';
		seriesTitle5.style.opacity = 1;
		colorLine5.style.width = '80%';
	}
});

// subscribe modal
const modalPopUp = document.querySelector('.modalPopUp');
const sideBtnIcon = document.querySelector('.sideBtnIcon');

const subscribeBtn = document.querySelector('.subscribeBtn').addEventListener('click', () => {
	const sideBtnIcon = document.querySelector('.sideBtnIcon');

	modalPopUp.style.display = 'flex';
	modalPopUp.classList.add('active');
	sideBtnIcon.classList.remove('active');
});

const sideBtn = document.querySelector('.sideBtn').addEventListener('click', () => {
	modalPopUp.classList.toggle('active');
	sideBtnIcon.classList.toggle('active');
});

const sSelectBarBox = document.querySelector('.sSelectBarBox');
const userSelectBarBox = document.querySelector('.userSelectBarBox');
const sSelectPintCupBox = document.querySelector('.sSelectPintCupBox');
const userSelectPintCupBox = document.querySelector('.userSelectPintCupBox');
const pintCupTitle = document.querySelector('.pintCupTitle').addEventListener('click', (e) => {
	const barTitle = document.querySelector('.barTitle');
	barTitle.classList.remove('active');
	e.target.classList.add('active');
	sSelectBarBox.style.display = 'none';
	userSelectBarBox.style.display = 'none';
	sSelectPintCupBox.style.display = 'block';
	userSelectPintCupBox.style.display = 'block';
});

const barTitle = document.querySelector('.barTitle').addEventListener('click', (e) => {
	const pintCupTitle = document.querySelector('.pintCupTitle');
	pintCupTitle.classList.remove('active');
	e.target.classList.add('active');
	sSelectBarBox.style.display = 'block';
	userSelectBarBox.style.display = 'block';
	sSelectPintCupBox.style.display = 'none';
	userSelectPintCupBox.style.display = 'none';
});

const subscribeSelectBtn = document.querySelectorAll('.subscribeSelectBtn');

for (let i = 0; i < subscribeSelectBtn.length; i++) {
	subscribeSelectBtn[i].addEventListener('click', (e) => {
		for (let i = 0; i < subscribeSelectBtn.length; i++) {
			subscribeSelectBtn[i].classList.remove('active');
		}
		e.target.classList.add('active');
	});
}

const selectProductBarPut = document.querySelectorAll('.selectProductBar .putProduct');

for (let i = 0; i < selectProductBarPut.length; i++) {
	selectProductBarPut[i].addEventListener('click', () => {
		const userSelectBar = document.querySelectorAll('.userSelectBar');
		userSelectBar[i].style.display = 'flex';
	});
}

const selectProductPintCupPut = document.querySelectorAll('.selectProductPintCup .putProduct');

for (let i = 0; i < selectProductPintCupPut.length; i++) {
	selectProductPintCupPut[i].addEventListener('click', () => {
		const userSelectPintCup = document.querySelectorAll('.userSelectPintCup');
		userSelectPintCup[i].style.display = 'flex';
	});
}

$('.userSelectBarBox .userSelectBar:first .minusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:first .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectBar:first .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectBar:first').css('display', 'none');
		$('.userSelectBar:first .selectCount').val(1);
	}
});

$('.userSelectBarBox .userSelectBar:first .plusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:first .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectBar:first .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectBar:first .selectCount').val(5);
	}
});

$('.userSelectBarBox .userSelectBar:nth-child(2) .minusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:nth-child(2) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectBar:nth-child(2) .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectBar:nth-child(2)').css('display', 'none');
		$('.userSelectBar:nth-child(2) .selectCount').val(1);
	}
});

$('.userSelectBarBox .userSelectBar:nth-child(2) .plusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:nth-child(2) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectBar:nth-child(2) .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectBar:nth-child(2) .selectCount').val(5);
	}
});

$('.userSelectBarBox .userSelectBar:nth-child(3) .minusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:nth-child(3) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectBar:nth-child(3) .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectBar:nth-child(3)').css('display', 'none');
		$('.userSelectBar:nth-child(3) .selectCount').val(1);
	}
});

$('.userSelectBarBox .userSelectBar:nth-child(3) .plusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:nth-child(3) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectBar:nth-child(3) .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectBar:nth-child(3) .selectCount').val(5);
	}
});

$('.userSelectBarBox .userSelectBar:nth-child(4) .minusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:nth-child(4) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectBar:nth-child(4) .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectBar:nth-child(4)').css('display', 'none');
		$('.userSelectBar:nth-child(4) .selectCount').val(1);
	}
});

$('.userSelectBarBox .userSelectBar:nth-child(4) .plusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:nth-child(4) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectBar:nth-child(4) .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectBar:nth-child(4) .selectCount').val(5);
	}
});

$('.userSelectBarBox .userSelectBar:last .minusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:last .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectBar:last .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectBar:last').css('display', 'none');
		$('.userSelectBar:last .selectCount').val(1);
	}
});

$('.userSelectBarBox .userSelectBar:last .plusBtn').on('click', function () {
	let inputValue = $('.userSelectBar:last .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectBar:last .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectBar:last .selectCount').val(5);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:first .minusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:first .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectPintCup:first .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectPintCup:first').css('display', 'none');
		$('.userSelectPintCup:first .selectCount').val(1);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:first .plusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:first .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectPintCup:first .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectPintCup:first .selectCount').val(5);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:nth-child(2) .minusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:nth-child(2) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectPintCup:nth-child(2) .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectPintCup:nth-child(2)').css('display', 'none');
		$('.userSelectPintCup:nth-child(2) .selectCount').val(1);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:nth-child(2) .plusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:nth-child(2) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectPintCup:nth-child(2) .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectPintCup:nth-child(2) .selectCount').val(5);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:nth-child(3) .minusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:nth-child(3) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectPintCup:nth-child(3) .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectPintCup:nth-child(3)').css('display', 'none');
		$('.userSelectPintCup:nth-child(3) .selectCount').val(1);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:nth-child(3) .plusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:nth-child(3) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectPintCup:nth-child(3) .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectPintCup:nth-child(3) .selectCount').val(5);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:nth-child(4) .minusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:nth-child(4) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectPintCup:nth-child(4) .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectPintCup:nth-child(4)').css('display', 'none');
		$('.userSelectPintCup:nth-child(4) .selectCount').val(1);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:nth-child(4) .plusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:nth-child(4) .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectPintCup:nth-child(4) .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectPintCup:nth-child(4) .selectCount').val(5);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:last .minusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:last .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber--;
	$('.userSelectPintCup:last .selectCount').val(inputNumber);
	if (inputNumber == 0) {
		$('.userSelectPintCup:last').css('display', 'none');
		$('.userSelectPintCup:last .selectCount').val(1);
	}
});

$('.userSelectPintCupBox .userSelectPintCup:last .plusBtn').on('click', function () {
	let inputValue = $('.userSelectPintCup:last .selectCount').val();
	let inputNumber = parseInt(inputValue);
	inputNumber++;
	$('.userSelectPintCup:last .selectCount').val(inputNumber);
	if (inputNumber > 5) {
		$('.userSelectPintCup:last .selectCount').val(5);
	}
});

$('.modalSubscribeBtn').on('click', function () {
	setTimeout(() => {
		$('.alertNotice').fadeIn(200).delay(1000).fadeOut(200);
	});
});

// shop modal
$('.barBtn, .barImgBox').on('click', function () {
	$('.shopModal:first').css('display', 'block');
	$('.shopModal:first .slideBox a').animate({ left: '0' }, 1000);
	$('.shopModal:first .slideBox a:first').addClass('active').siblings().removeClass('active');
	$('.shopModal:first .selectInfo:first')
		.css('display', 'flex')
		.nextUntil('.barModal .slideBox')
		.css('display', 'none');
});

$('.pintBtn, .pintImgBox').on('click', function () {
	$('.pintModal').css('display', 'block');
	$('.pintModal .slideBox a:first').addClass('active').siblings().removeClass('active');
	$('.pintModal .selectInfo:first').css('display', 'flex').nextUntil('.pintModal .slideBox').css('display', 'none');
});

$('.cupBtn, .cupImgBox').on('click', function () {
	$('.cupModal').css('display', 'block');
	$('.cupModal .slideBox a:first').addClass('active').siblings().removeClass('active');
	$('.cupModal .selectInfo:first').css('display', 'flex').nextUntil('.cupModal .slideBox').css('display', 'none');
});

const closeBtn = document.querySelectorAll('.closeBtn');

for (let i = 0; i < closeBtn.length; i++) {
	closeBtn[i].addEventListener('click', () => {
		const shopModal = document.querySelectorAll('.shopModal');

		for (let j = 0; j < shopModal.length; j++) {
			shopModal[j].style.display = 'none';
		}
	});
}

const modalSlideImg = document.querySelectorAll('.slideBox a img');

for (let i = 0; i < modalSlideImg.length; i++) {
	modalSlideImg[i].addEventListener('click', (e) => {
		for (let j = 0; j < modalSlideImg.length; j++) {
			modalSlideImg[j].parentElement.classList.remove('active');
		}
		e.target.parentElement.classList.add('active');

		const modalSelectInfo = document.querySelectorAll('.selectInfo');
		if (e.target == modalSlideImg[i]) {
			for (let k = 0; k < modalSelectInfo.length; k++) {
				modalSelectInfo[k].style.display = 'none';
			}
			modalSelectInfo[i].style.display = 'flex';
		}
	});
}

$('.slideRightBtn').on('click', function () {
	$('.barModal .slideBox a').animate({ left: '-44rem' }, 1000);
});

$('.slideLeftBtn').on('click', function () {
	$('.barModal .slideBox a').animate({ left: '0' }, 1000);
});
