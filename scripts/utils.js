function header_ticker_1(){
	document.getElementById('ticker').innerHTML = 'world wide shipping';
	document.getElementById('ticker').style.marginLeft = '0vw';

	setTimeout(header_ticker_2, 5000);
}

function header_ticker_2(){
	document.getElementById('ticker').innerHTML = 'fall to rise out now';
	document.getElementById('ticker').style.marginLeft = '89vw';

	setTimeout(header_ticker_1, 5000);
}

header_ticker_1();

//

function hover_must_fall_shirt_1(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-shirt-1-back.webp');
}

function unhover_must_fall_shirt_1(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-shirt-1-front.webp');
}

//

function hover_must_fall_shirt_2(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-shirt-2-back.webp');
}

function unhover_must_fall_shirt_2(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-shirt-2-front.webp');
}

//

function hover_must_fall_hat_1(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-hat-1.webp');
}

function unhover_must_fall_hat_1(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-hat-1.webp');
}

//

function hover_must_fall_hat_2(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-hat-2.webp');
}

function unhover_must_fall_hat_2(element) {
	element.setAttribute('src', 'images/collections/fall-to-rise/fall-to-rise-hat-2.webp');
}