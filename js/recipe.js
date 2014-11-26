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
	var name = xmlDocument.getElementsByTagName('name')[0].innerHTML;
	var desc = xmlDocument.getElementsByTagName('description')[0].innerHTML;
	var size = xmlDocument.getElementsByTagName('size')[0].innerHTML;
	var time = xmlDocument.getElementsByTagName('time')[0].innerHTML;
	var diff = xmlDocument.getElementsByTagName('difficulty')[0].innerHTML;
	var ingredients = xmlDocument.getElementsByTagName('ingredients')[0].innerHTML;
	var steps = xmlDocument.getElementsByTagName('steps')[0].innerHTML;
	var image = xmlDocument.getElementsByTagName('images')[0].innerHTML;

	document.getElementById('recipe-title').innerHTML = name;
	document.getElementById('ingredient-list-container').innerHTML = ingredients;
	document.getElementById('recipe-description').innerHTML = desc;
	document.getElementById('recipe-steps').innerHTML = steps;
	document.getElementById('food-image').setAttribute('src', image);
	document.getElementById('size').innerHTML = size;
	document.getElementById('time').innerHTML = time;
	document.getElementById('diff').innerHTML = getDiffString(diff);
	document.getElementById('diff-icon').setAttribute('src', getDiffImage(diff));

}

window.addEventListener('load', function() {
	var recipeID = getQueryVariable('id');
	var recipeURL = "data/recipes/" + recipeID + ".xml";
	var recipeXML = getAndParse(recipeURL, fillDocument);
});