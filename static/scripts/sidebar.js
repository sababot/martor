var sidebar = document.getElementById('sidebar');
var show = false;

function showSidebar() {
	sidebar.style.transition = 'transform 0.25s';
	sidebar.style.transform = 'translate(0vw)';
	sidebar.style.zIndex = "-5";
	show = true;

	document.body.style.overflow = "hidden";
}

function hideSidebar() {
	setTimeout(disableTransition, 500);
	sidebar.style.transform = 'translate(-100vw)';
	sidebar.style.zIndex = "-50";
	show = false;

	document.body.style.overflow = "auto";
}

function disableTransition () {
	sidebar.style.transition = '';
}

function toggleSidebar() {
	if (show == false) {
		showSidebar();
	}

	else {
		hideSidebar();
	}
}