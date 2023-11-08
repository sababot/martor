var collections = document.getElementById("collection-cards");

width = window.innerWidth;
height = window.innerHeight;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	width = window.outerWidth;
	height = window.outerHeight;
}

function resize_col(){
	if ((width / height) < 0.6)
		collections.style.gridTemplateColumns = "repeat(1, 98%)";
	else if ((width / height) < 0.9)
		collections.style.gridTemplateColumns = "repeat(2, 49%)";
	else if ((width / height) < 1.25)
		collections.style.gridTemplateColumns = "repeat(3, 32%)";
	else 
		collections.style.gridTemplateColumns = "repeat(4, 24%)";
}

resize_col();

window.addEventListener('resize', function(){
	width = window.innerWidth;
	height = window.innerHeight;

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		width = window.outerWidth;
		height = window.outerHeight;
	}

	resize_col();
});