function getDiffString (diff) {
	var string;
	switch(diff) {
		case "0":
			string = "Trivielt";
			break;
		case "1":
			string = "Lett";
			break;
		case "2":
			string = "Middels";
			break;
		case "3":
			string = "Vanskelig";
			break;
		case "4":
			string = "Dritvanskelig";
			break;
	}
	return string;
}

function getDiffImage (diff) {
	var img;
	switch(diff) {
		case "0":
			img = "media/static/ikoner/vanskelighetsgrad/barneskirenn.png";
			break;
		case "1":
			img = "media/static/ikoner/vanskelighetsgrad/lett.png";
			break;
		case "2":
			img = "media/static/ikoner/vanskelighetsgrad/middels.png";
			break;
		case "3":
			img = "media/static/ikoner/vanskelighetsgrad/utfordrende.png";
			break;
		case "4":
			img = "media/static/ikoner/vanskelighetsgrad/dark_souls.png";
			break;
	}
	return img;
}

function fillDocument(xmlDocument) {
	var recipe;
	eval("recipe = " + xml2json(xmlDocument, "  ") + "[\"recipe\"];");
	document.getElementById('recipe-title').textContent = recipe['name'];
	document.title += ' - ' + recipe['name'];

	var ingredients = str2DOMElement(recipe['ingredients']['#cdata']);
	document.getElementById('ingredient-list-container').appendChild(ingredients);

	var description;
	if (recipe['description']['#cdata']) {
		description = str2DOMElement(recipe['description']['#cdata']);
	} else {
		description = document.createTextNode(recipe['description']);
	}
	document.getElementById('recipe-description').appendChild(description);

	while (document.getElementById('recipe-steps').firstChild) {
		document.getElementById('recipe-steps').firstChild.remove();
	}
	var steps = str2DOMElement(recipe['steps']['#cdata']);
	document.getElementById('recipe-steps').appendChild(steps);

	document.getElementById('food-image').setAttribute('src', recipe['images']);
	document.getElementById('size').textContent = recipe['size'];
	document.getElementById('time').textContent = recipe['time'];
	document.getElementById('diff').textContent = getDiffString(recipe['difficulty']);
	document.getElementById('diff-icon').setAttribute('src', getDiffImage(recipe['difficulty']));
}



window.addEventListener('load', function() {
	var recipeID = getQueryVariable('id');
	var recipeURL = "data/recipes/" + recipeID + ".xml";
	getAndParse(recipeURL, fillDocument);

	var linearNav = document.createElement('div');
	document.getElementsByClassName('recipe-right')[0].appendChild(linearNav);
	linearNav.appendChild(document.createElement('hr'));
	linearNav.setAttribute('class', 'pure-g');

	var prevID = parseInt(recipeID)-1;
	recipeURL = "data/recipes/" + prevID + ".xml";
	var prevDiv = document.createElement('div');
	prevDiv.setAttribute('class', 'pure-u-1-2');
	getAndParse(recipeURL, function (xml) {
		var prevTitle = xml.getElementsByTagName('name')[0].firstChild.data;
		var prevLink = document.createElement('a');
		var prevLinkText = document.createTextNode('< ' + prevTitle);
		prevLink.appendChild(prevLinkText);
		prevLink.setAttribute('href', 'recipe.html?id='+prevID);
		prevDiv.appendChild(prevLink);
		prevDiv.style.textAlign = 'left';
		prevDiv.style.fontSize = 'small';
		linearNav.appendChild(prevDiv);
	});

	var nextID = parseInt(recipeID)+1;
	recipeURL = "data/recipes/" + nextID + ".xml";
	var nextDiv = document.createElement('div');
	nextDiv.setAttribute('class', 'pure-u-1-2');
	getAndParse(recipeURL, function (xml) {
		var nextTitle = xml.getElementsByTagName('name')[0].firstChild.data;
		var nextLink = document.createElement('a');
		nextLink.appendChild(document.createTextNode(nextTitle + ' >'));
		nextLink.setAttribute('href', 'recipe.html?id='+nextID);
		nextDiv.appendChild(nextLink);
		nextDiv.style.textAlign = 'right';
		nextDiv.style.fontSize = 'small';
		linearNav.appendChild(nextDiv);
	});
});