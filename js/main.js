// Слайдер
$(function(){
$('.slider__inner, .news__slider-inner').slick({
	nextArrow: '<button type="button" class=" slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class=" slick-btn slick-prev"></button>',
	infinite: false
});

// Форма
$('select').styler();

$('.header__btn-menu').on('click', function(){
	$('.menu ul').slideToggle();

});

});
// Навігаційне меню
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1250 мс
    $('body,html').animate({scrollTop: top}, 1250);
  });
});

