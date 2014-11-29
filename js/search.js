var searchIndex = undefined;

function showResult(id) {
	getAndParse('data/recipes/' + id + '.xml', function(xmlDocument) {
		var recipe;
		eval("recipe = " + xml2json(xmlDocument, "  ") + "[\"recipe\"];");

		var section = document.createElement('section');
		document.getElementById('search-results').appendChild(section);

		var grid = document.createElement('div');
		grid.setAttribute('class', 'pure-g');
		section.appendChild(grid);

		var imageContainer = document.createElement('div');
		imageContainer.setAttribute('class', 'pure-u-1-4');
		grid.appendChild(imageContainer);

		var imgUrl = recipe['images'];
		var image = document.createElement('img');
		image.setAttribute('src', imgUrl);
		image.setAttribute('class', 'pure-img')
		imageContainer.appendChild(image);

		var rightOuterContainer = document.createElement('div');
		rightOuterContainer.setAttribute('class', 'pure-u-3-4');
		grid.appendChild(rightOuterContainer);

		var rightContainer = document.createElement('div');
		rightContainer.setAttribute('class', 'result-text');
		rightOuterContainer.appendChild(rightContainer);

		var link = document.createElement('a');
		link.setAttribute('href', 'recipe.html?id=' + id);
		rightContainer.appendChild(link);

		var title = document.createElement('h3');
		title.textContent = recipe['name'];
		link.appendChild(title);

		var desc = document.createElement('p');
		desc.textContent = recipe['description'];
		rightContainer.appendChild(desc);
	});

}

function removeResults() {
	var results = document.getElementById('search-results').children;
	for (var i = results.length - 1; i >= 0; i--) {
		results[i].remove();
	};
}

function filter() {
	removeResults();

	var searchString = document.getElementById('search-text').value.toLowerCase();

	var tagMeat = document.getElementById('search-meat').checked;
	var tagFish = document.getElementById('search-fish').checked;
	var tagPasta = document.getElementById('search-pasta').checked;
	var tagBird = document.getElementById('search-bird').checked;
	var tagDessert = document.getElementById('search-dessert').checked;
	var tagBake = document.getElementById('search-bake').checked;

	var filterTags = tagMeat || tagFish || tagPasta || tagBird || tagDessert || tagBake;

	for (var i = searchIndex['recipe'].length - 1; i >= 0; i--) {
		var title = searchIndex['recipe'][i]["title"].toLowerCase();
		if (title.indexOf(searchString) < 0) {
			continue;
		}
		if (filterTags) {
			var tags = searchIndex['recipe'][i]["tags"].toLowerCase()
			if (tagMeat && tags.indexOf('meat') < 0) {
				continue;
			}
			if (tagFish && tags.indexOf('fish') < 0) {
				continue;
			}
			if (tagPasta && tags.indexOf('pasta') < 0) {
				continue;
			}
			if (tagBird && tags.indexOf('bird') < 0) {
				continue;
			}
			if (tagDessert && tags.indexOf('dessert') < 0) {
				continue;
			}
			if (tagBake && tags.indexOf('bake') < 0) {
				continue;
			}
		}
		showResult(searchIndex['recipe'][i]["id"]);
	};
};

function cb(xmlDocument) {
	eval("searchIndex = " + xml2json(xmlDocument, "  ") + "[\"index\"];");
	var button = document.getElementById('search-button');
	if (button.addEventListener) {
		button.addEventListener('click', filter);
	} else {
		button.attachEvent("click", filter);
	}
};

window.addEventListener('load', function() {
	getAndParse('data/recipes/index.xml', cb);
});