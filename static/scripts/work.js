var active = 'all';

var options = [	document.getElementById('all'), 
				document.getElementById('shirts'),
				document.getElementById('hoodies'),
				document.getElementById('pants'),
				document.getElementById('hats'),
				document.getElementById('accessories')];
				//document.getElementById('search_input')];

var shirts = document.getElementsByClassName('shirt');
var hoodies = document.getElementsByClassName('hoodie');
var pants = document.getElementsByClassName('pant');
var hats = document.getElementsByClassName('hat');
var accessories = document.getElementsByClassName('accessory');

var cards = document.querySelectorAll('.work-cards a');

var search_bar = document.getElementById("search_input");

var search_heading_input = document.getElementById("search-header-input");

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

	// ENABLE hoodies
	for (var i = 0; i < hoodies.length; i++) {
		hoodies[i].style.display = 'block';
	}

	// ENABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'block';
	}

	// ENABLE accessoRIES
	for (var i = 0; i < accessories.length; i++) {
		accessories[i].style.display = 'block';
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

	// DISABLE hoodies
	for (var i = 0; i < hoodies.length; i++) {
		hoodies[i].style.display = 'none';
	}

	// DISABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'none';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE accessoRIES
	for (var i = 0; i < accessories.length; i++) {
		accessories[i].style.display = 'none';
	}
}

function select_hoodies() {
	document.getElementById('hoodies').style.fontWeight = 'bold';
	document.getElementById('hoodies').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'hoodies';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'hoodies') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE hoodies
	for (var i = 0; i < hoodies.length; i++) {
		hoodies[i].style.display = 'block';
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

	// DISABLE accessoRIES
	for (var i = 0; i < accessories.length; i++) {
		accessories[i].style.display = 'none';
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

	// DIABLE hoodies
	for (var i = 0; i < hoodies.length; i++) {
		hoodies[i].style.display = 'none';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE accessoRIES
	for (var i = 0; i < accessories.length; i++) {
		accessories[i].style.display = 'none';
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

	// DIABLE hoodies
	for (var i = 0; i < hoodies.length; i++) {
		hoodies[i].style.display = 'none';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}

	// DISABLE accessoRIES
	for (var i = 0; i < accessories.length; i++) {
		accessories[i].style.display = 'none';
	}
}

function select_accessories() {
	document.getElementById('accessories').style.fontWeight = 'bold';
	document.getElementById('accessories').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'accessories';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'accessories') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE accessoRES
	for (var i = 0; i < accessories.length; i++) {
		accessories[i].style.display = 'block';
	}

	// DISABLE HATS
	for (var i = 0; i < hats.length; i++) {
		hats[i].style.display = 'none';
	}

	// DISABLE PANTS
	for (var i = 0; i < pants.length; i++) {
		pants[i].style.display = 'none';
	}

	// DIABLE hoodies
	for (var i = 0; i < hoodies.length; i++) {
		hoodies[i].style.display = 'none';
	}

	// DISABLE SHIRTS
	for (var i = 0; i < shirts.length; i++) {
		shirts[i].style.display = 'none';
	}
}

function select_search(input_option) {
	active = 'search';

	for (var i = 0; i < options.length; i++) {
		options[i].style.fontWeight = 'normal';
	}

	var input = "";

	if (input_option != null)
		input = input_option;
	else if (input_option == null)
		input = document.getElementById("search_input").value.toLowerCase();

	for (var i = 0; i < cards.length; i++) {
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

search_heading_input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    select_search(search_heading_input.value);
    document.getElementById("search-button").click();
  }
});

select_all();