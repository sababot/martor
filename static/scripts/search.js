var search = document.getElementById('search-header');
var show = false;

function showSearch() {
	search.style.transform = 'translate(0vw)';
	search.style.zIndex = "-10";
	show = true;

	document.getElementById('search-header-input').value = '';
	document.getElementById('search-header-input').focus();

	document.body.style.overflow = "hidden";
}

function hideSearch() {
	search.style.transform = 'translate(100vw)';
	search.style.zIndex = "-10";
	show = false;

	document.body.style.overflow = "auto";
	document.getElementById('search-header-input').focus();
}

function toggleSearch() {
	if (document.getElementById('header-mobile').style.display == 'flex') {
		if (show == false) {
			showSearch();
		}

		else {
			hideSearch();
		}
	}

	else {
		document.getElementById('search_input').focus();
	}
}