var active = 'all';

var options = [	document.getElementById('all'), 
				document.getElementById('projects'),
				document.getElementById('repositories'),
				document.getElementById('games'),
				document.getElementById('publications'),
				document.getElementById('search_input')];

var projects = document.getElementsByClassName('card-project');
var repositories = document.getElementsByClassName('card-repository');
var games = document.getElementsByClassName('card-game');
var publications = document.getElementsByClassName('card-publication');

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

	// ENABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'block';
	}

	// ENABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'block';
	}

	// ENABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'block';
	}

	// ENABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'block';
	}
}

function select_projects() {
	document.getElementById('projects').style.fontWeight = 'bold';
	document.getElementById('projects').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'projects';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'projects') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'block';
	}

	// DISABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'none';
	}

	// DISABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'none';
	}

	// DISABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'none';
	}
}

function select_repositories() {
	document.getElementById('repositories').style.fontWeight = 'bold';
	document.getElementById('repositories').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'repositories';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'repositories') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'block';
	}

	// DISABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'none';
	}

	// DISABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'none';
	}

	// DISABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'none';
	}
}

function select_games() {
	document.getElementById('games').style.fontWeight = 'bold';
	document.getElementById('games').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'games';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'games') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'block';
	}

	// DIABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'none';
	}

	// DISABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'none';
	}

	// DISABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'none';
	}
}

function select_publications() {
	document.getElementById('publications').style.fontWeight = 'bold';
	document.getElementById('publications').style.borderColor = 'rgba(84, 7, 249, 1)';
	active = 'publications';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'publications') {
			options[i].style.fontWeight = 'normal';
		}
	}

	// ENABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'block';
	}

	// DISABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'none';
	}

	// DIABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'none';
	}

	// DISABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'none';
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