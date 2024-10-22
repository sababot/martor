var products = document.getElementById("work-cards");

var newsletter = document.getElementById('newsletter');

var footer_desktop = document.getElementById('footer-desktop');
var footer_mobile = document.getElementById('footer-mobile');
var footer_logo = document.getElementById('footer-logo');

var header_desktop = document.getElementById('header-desktop');
var header_mobile = document.getElementById('header-mobile');

function resize_elements(){
	if ((window.innerWidth / window.innerHeight) < 0.5){
		products.style.gridTemplateColumns = "repeat(2, 50%)";
		newsletter.style.display = 'none';
		footer_mobile.style.display = 'block';
		footer_desktop.style.display = 'none';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';
			
		if (premiere != null && lookbook != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "92vw"; premiere.style.height = "50vw";
			lookbook.style.gridTemplateColumns = "repeat(3, auto)";
			background_desktop.style.display = 'none';
			background_mobile.style.display = 'block';
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'block';
		}

		for (var i = 0; i < seperators.length; i++){
			seperators[i].style.marginTop = "60px"
		}

	}

	else if ((window.innerWidth / window.innerHeight) < 0.65){
		products.style.gridTemplateColumns = "repeat(2, 50%)";
		newsletter.style.display = 'none';
		footer_mobile.style.display = 'block';
		footer_desktop.style.display = 'none';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';
			
		if (premiere != null && lookbook != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "92vw"; premiere.style.height = "50vw";
			lookbook.style.gridTemplateColumns = "repeat(3, auto)";
			background_desktop.style.display = 'none';
			background_mobile.style.display = 'block';
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'block';
		}

		for (var i = 0; i < seperators.length; i++){
			seperators[i].style.marginTop = "60px"
		}

	}

	else if ((window.innerWidth / window.innerHeight) < 0.75){
		products.style.gridTemplateColumns = "repeat(2, 50%)";
		newsletter.style.display = 'none';
		footer_mobile.style.display = 'block';
		footer_desktop.style.display = 'none';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';
			
		if (premiere != null && lookbook != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "92vw"; premiere.style.height = "50vw";
			lookbook.style.gridTemplateColumns = "repeat(3, auto)";
			background_desktop.style.display = 'none';
			background_mobile.style.display = 'block';
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'block';
		}

		for (var i = 0; i < seperators.length; i++){
			seperators[i].style.marginTop = "60px"
		}
	}

	else if ((window.innerWidth / window.innerHeight) < 0.9){
		products.style.gridTemplateColumns = "repeat(3, 32%)";
		newsletter.style.display = 'block';
		footer_mobile.style.display = 'none';
		footer_desktop.style.display = 'flex';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'flex';
		header_desktop.style.display = 'none';

		if (premiere != null && lookbook != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "75vw"; premiere.style.height = "40vw";
			lookbook.style.gridTemplateColumns = "repeat(4, auto)";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'none';
		}

		for (var i = 0; i < seperators.length; i++){
			seperators[i].style.marginTop = "6vw"
		}
	}

	else if ((window.innerWidth / window.innerHeight) < 1.25){
		products.style.gridTemplateColumns = "repeat(3, 32%)";
		newsletter.style.display = 'block';
		footer_mobile.style.display = 'none';
		footer_desktop.style.display = 'flex';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'none';
		header_desktop.style.display = 'flex';

		if (premiere != null && lookbook != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "75vw"; premiere.style.height = "40vw";
			lookbook.style.gridTemplateColumns = "repeat(4, auto)";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
			lookbook_1.style.display = 'none';
			lookbook_2.style.display = 'none';
		}

		for (var i = 0; i < seperators.length; i++){
			seperators[i].style.marginTop = "6vw"
		}
	}

	else{
		products.style.gridTemplateColumns = "repeat(4, 23%)";
		newsletter.style.display = 'block';
		footer_mobile.style.display = 'none';
		footer_desktop.style.display = 'flex';
		footer_logo.style.display = 'none';
		header_mobile.style.display = 'none';
		header_desktop.style.display = 'flex';

		if (premiere != null && lookbook != null && background_mobile != null && background_desktop != null){
			premiere.style.width = "55vw"; premiere.style.height = "30vw";
			lookbook.style.gridTemplateColumns = "repeat(5, auto)";
			background_desktop.style.display = 'block';
			background_mobile.style.display = 'none';
			lookbook_1.style.display = 'block';
			lookbook_2.style.display = 'block';
		}

		for (var i = 0; i < seperators.length; i++){
			seperators[i].style.marginTop = "6vw"
		}
	}
}

resize_elements();

window.addEventListener('resize', function(){
	resize_elements();
});