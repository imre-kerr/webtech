function fillDocument(xmlDocument) {
	console.log(xmlDocument);
}

window.addEventListener('load', function() {
	var recipeID = getQueryVariable('id');
	var recipeURL = "data/recipes/" + recipeID + ".xml";
	var recipeXML = getAndParse(recipeURL);
});