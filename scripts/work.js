var active = 'all';

var options = [	document.getElementById('all'), 
				document.getElementById('shirts'),
				document.getElementById('hoods'),
				document.getElementById('pants'),
				document.getElementById('hats'),
				document.getElementById('accesories'),
				document.getElementById('search_input')];

var shirts = document.getElementsByClassName('shirt');
var hoods = document.getElementsByClassName('hood');
var pants = document.getElementsByClassName('pant');
var hats = document.getElementsByClassName('hat');
var accesories = document.getElementsByClassName('accesory');

var cards = document.querySelectorAll('.work-cards a');

var search_bar = document.getElementById("search_input");

function select_all() {
	document.getElementById('all').style.fontWeight = 'bold';
	document.getElementById('all').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'all';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'all') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'block';
	}

	// ENABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'block';
	}

	// ENABLE HOODS
	for (var i = 0; i < hoods.length; i++) {
		hoods[i].style.display = 'block';
	}

	// ENABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'block';
	}

	// ENABLE ACCESORIES
	for (var i = 0; i < accesories.length; i++) {
		accesories[i].style.display = 'block';
	}
}

function select_shirts() {
	document.getElementById('shirts').style.fontWeight = 'bold';
	document.getElementById('shirts').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'shirts';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'shirts') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'block';
	}

	// DISABLE HOODS
	for (var i = 0; i < hoods.length; i++) {
		hoods[i].style.display = 'none';
	}

	// DISABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'none';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE ACCESORIES
	for (var i = 0; i < accesories.length; i++) {
		accesories[i].style.display = 'none';
	}
}

function select_hoods() {
	document.getElementById('hoods').style.fontWeight = 'bold';
	document.getElementById('hoods').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'hoods';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'hoods') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE HOODS
	for (var i = 0; i < hoods.length; i++) {
		hoods[i].style.display = 'block';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}

	// DISABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'none';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE ACCESORIES
	for (var i = 0; i < accesories.length; i++) {
		accesories[i].style.display = 'none';
	}
}

function select_pants() {
	document.getElementById('pants').style.fontWeight = 'bold';
	document.getElementById('pants').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'pants';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'pants') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'block';
	}

	// DIABLE HOODS
	for (var i = 0; i < hoods.length; i++) {
		hoods[i].style.display = 'none';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE ACCESORIES
	for (var i = 0; i < accesories.length; i++) {
		accesories[i].style.display = 'none';
	}
}

function select_hats() {
	document.getElementById('hats').style.fontWeight = 'bold';
	document.getElementById('hats').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'hats';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'hats') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'block';
	}

	// DISABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'none';
	}

	// DIABLE HOODS
	for (var i = 0; i < hoods.length; i++) {
		hoods[i].style.display = 'none';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}

	// DISABLE ACCESORIES
	for (var i = 0; i < accesories.length; i++) {
		accesories[i].style.display = 'none';
	}
}

function select_accesories() {
	document.getElementById('accesories').style.fontWeight = 'bold';
	document.getElementById('accesories').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'accesories';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'accesories') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE ACCESORES
	for (var i = 0; i < accesories.length; i++) {
		accesories[i].style.display = 'block';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'none';
	}

	// DIABLE HOODS
	for (var i = 0; i < hoods.length; i++) {
		hoods[i].style.display = 'none';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}
}

function select_search() {
	active = 'search';

	for (var i = 0; i < options.length; i++) {
		options[i].style.fontWeight = 'normal';
	}

	var input = document.getElementById("search_input").value.toLowerCase();

	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i].querySelector(".work-cards .title").innerHTML);
		if (cards[i].querySelector(".work-cards .title").innerHTML.toLowerCase().includes(input) == false) {
			cards[i].style.display = 'none';
		}

		else {
			cards[i].style.display = 'block';
		}
	}
}

search_bar.addEventListener("input", e => {
	select_search();
})

select_all();