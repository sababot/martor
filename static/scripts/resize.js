var products = document.getElementById("work-cards");

var premiere = document.getElementById("premiere");

var lookbook = document.getElementById("lookbook");

var background_desktop = document.getElementById("background-image-desktop");
var background_mobile = document.getElementById("background-image-mobile");

var newsletter = document.getElementById('newsletter');

var footer_desktop = document.getElementById('footer-desktop');
var footer_mobile = document.getElementById('footer-mobile');
var footer_logo = document.getElementById('footer-logo');

var lookbook_1 = document.getElementById('lookbook-1');
var lookbook_2 = document.getElementById('lookbook-2');

var header_desktop = document.getElementById('header-desktop');
var header_mobile = document.getElementById('header-mobile');

var seperators = [document.getElementById("new-collection"), document.getElementById("premiere-text"), document.getElementById("new-collection"), document.getElementById("lookbook-text")]

var sidebar_links = document.getElementById("sidebar").querySelectorAll('p');

var product_desktop = document.getElementById("product-desktop");
var product_mobile = document.getElementById("product-mobile");
var product_mobile_description = document.getElementById("product-mobile-description");

var shop_heading = document.getElementById("shop-heading");
var search_bar = document.getElementById("search_input");

var cart_desktop = document.getElementById("cart-desktop");
var cart_mobile = document.getElementById("cart-mobile");

width = window.innerWidth;
height = window.innerHeight;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	width = window.outerWidth;
	height = window.outerHeight;
}

function resize_elements(){
	if (shop_heading != null && shop_heading != null) {
		if (width <= 730) {
			shop_heading.style.justifyContent = "left";
			search_bar.value = '';
			search_bar.style.display = 'none';
		}

		else {
			shop_heading.style.justifyContent = "space-between";
			search_bar.style.display = 'flex';
		}
	}

	if ((width / height) < 0.5){
		newsletter.style.display = 'none';
		footer_mobile.style.display = 'block';
		footer_desktop.style.display = 'none';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';

		if (cart_mobile != null && cart_desktop != null) {
			cart_mobile.style.display = 'block';
			cart_desktop.style.display = 'none';
		}

		if (products != null){
			products.style.gridTemplateColumns = "repeat(2, 50%)";
			products.style.minHeight = "calc(100vh - 350px)";
		}
			
		if (premiere != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "92vw"; premiere.style.height = "50vw";
			background_desktop.style.display = 'none';
			background_mobile.style.display = 'block';
		}

		if (lookbook != null){
			lookbook.style.gridTemplateColumns = "repeat(3, auto)";
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'block';
		}

		if (seperators.length > 0)
		{
			for (var i = 0; i < seperators.length; i++){
				if (seperators[i] != null){
					seperators[i].style.marginTop = "60px"
				}
			}
		}
	}

	else if ((width / height) < 0.65){
		newsletter.style.display = 'none';
		footer_mobile.style.display = 'block';
		footer_desktop.style.display = 'none';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';

		if (cart_mobile != null && cart_desktop != null) {
			cart_mobile.style.display = 'block';
			cart_desktop.style.display = 'none';
		}

		if (products != null){
			products.style.gridTemplateColumns = "repeat(2, 50%)";
			products.style.minHeight = "calc(100vh - 350px)";
		}
			
		if (premiere != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "92vw"; premiere.style.height = "50vw";
			background_desktop.style.display = 'none';
			background_mobile.style.display = 'block';
		}

		if (lookbook != null){
			lookbook.style.gridTemplateColumns = "repeat(3, auto)";
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'block';
		}

		if (seperators.length > 0)
		{
			for (var i = 0; i < seperators.length; i++){
				if (seperators[i] != null){
					seperators[i].style.marginTop = "60px"
				}
			}
		}
	}

	else if ((width / height) < 0.75){
		newsletter.style.display = 'none';
		footer_mobile.style.display = 'block';
		footer_desktop.style.display = 'none';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';

		if (cart_mobile != null && cart_desktop != null) {
			cart_mobile.style.display = 'block';
			cart_desktop.style.display = 'none';
		}

		if (products != null){
			products.style.gridTemplateColumns = "repeat(2, 50%)";
			products.style.minHeight = "calc(100vh - 350px)";
		}
			
		if (premiere != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "92vw"; premiere.style.height = "50vw";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
		}

		if (lookbook != null){
			lookbook.style.gridTemplateColumns = "repeat(3, auto)";
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'block';
		}

		if (seperators.length > 0)
		{
			for (var i = 0; i < seperators.length; i++){
				if (seperators[i] != null){
					seperators[i].style.marginTop = "60px"
				}
			}
		}
	}

	else if ((width / height) < 0.9){
		newsletter.style.display = 'block';
		footer_mobile.style.display = 'none';
		footer_desktop.style.display = 'flex';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'none';
		header_desktop.style.display = 'flex';

		if (cart_mobile != null && cart_desktop != null) {
			cart_mobile.style.display = 'none';
			cart_desktop.style.display = 'block';
		}

		if (products != null){
			products.style.gridTemplateColumns = "repeat(3, 32%)";
			products.style.minHeight = "calc(100vh - 350px)";
		}

		if (premiere != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "75vw"; premiere.style.height = "40vw";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
		}

		if (lookbook != null){
			lookbook.style.gridTemplateColumns = "repeat(4, auto)";
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'none';
		}

		if (seperators.length > 0)
		{
			for (var i = 0; i < seperators.length; i++){
				if (seperators[i] != null){
					seperators[i].style.marginTop = "6vw";
				}
			}
		}
	}

	else if ((width / height) < 1.25){
		newsletter.style.display = 'block';
		footer_mobile.style.display = 'none';
		footer_desktop.style.display = 'flex';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'none';
		header_desktop.style.display = 'flex';

		if (cart_mobile != null && cart_desktop != null) {
			cart_mobile.style.display = 'none';
			cart_desktop.style.display = 'block';
		}

		if (products != null){
			products.style.gridTemplateColumns = "repeat(3, 32%)";
			products.style.minHeight = "calc(100vh - 350px)";
		}

		if (premiere != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "75vw"; premiere.style.height = "40vw";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
		}

		if (lookbook != null){
			lookbook.style.gridTemplateColumns = "repeat(4, auto)";
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'none';
		}

		if (seperators.length > 0)
		{
			for (var i = 0; i < seperators.length; i++){
				if (seperators[i] != null){
					seperators[i].style.marginTop = "6vw"
				}
			}
		}
	}

	else{
		newsletter.style.display = 'block';
		footer_mobile.style.display = 'none';
		footer_desktop.style.display = 'flex';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'none';
		header_desktop.style.display = 'flex';

		if (cart_mobile != null && cart_desktop != null) {
			cart_mobile.style.display = 'none';
			cart_desktop.style.display = 'block';
		}

		if (products != null){
			products.style.gridTemplateColumns = "repeat(4, 23%)";
			products.style.minHeight = "calc(100vh - 350px)";
		}

		if (premiere != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "55vw"; premiere.style.height = "30vw";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
		}

		if (lookbook != null){
			lookbook.style.gridTemplateColumns = "repeat(5, auto)";
			lookbook_1.style.display = 'block';
			lookbook_2.style.display = 'block';
		}

		if (seperators.length > 0)
		{
			for (var i = 0; i < seperators.length; i++){
				if (seperators[i] != null){
					seperators[i].style.marginTop = "6vw"
				}
			}
		}

	}

	if (product_mobile != null && product_desktop != null && product_mobile_description != null){
		if ((width / height) < 0.9){
			product_mobile.style.display = 'block';
			product_desktop.style.display = 'none';
		}

		else{
			product_mobile.style.display = 'none';
			product_desktop.style.display = 'flex';
		}

		if (width < 450){
			product_mobile_description.style.width = '100%';
		}

		else{
			product_mobile_description.style.width = '400px';
		}
	}
}

resize_elements();

window.addEventListener('resize', function(){
	width = window.innerWidth;
	height = window.innerHeight;

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		width = window.outerWidth;
		height = window.outerHeight;
	}

	resize_elements();
});