var sidebar = document.getElementById('sidebar');
var show = false;

function showSidebar() {
	sidebar.style.transition = 'transform 0.5s';
	sidebar.style.transform = 'translate(0vw)';
	sidebar.style.zIndex = "-5";
	show = true;
}

function hideSidebar() {
	setTimeout(disableTransition, 500);
	sidebar.style.transform = 'translate(-100vw)';
	sidebar.style.zIndex = "-50";
	show = false;
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