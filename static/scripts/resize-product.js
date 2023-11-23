var product_desktop = document.getElementById("product-desktop");
var product_mobile = document.getElementById("product-mobile");
var product_mobile_description = document.getElementById("product-mobile-description");

width = window.innerWidth;
height = window.innerHeight;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	width = window.outerWidth;
	height = window.outerHeight;
}

function resize_elements(){
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