var categoryIndex=undefined;

function showCategory(id) {
	getAndParse('data/recipes/' + id + '.xml', function(xmlDocument) {
		var section = document.createElement('section');
		document.getElementById('category-result').appendChild(section);

		var grid = document.createElement('div');
		grid.setAttribute('class', 'pure-g');
		section.appendChild(grid);

		var imageContainer = document.createElement('div');
		imageContainer.setAttribute('class', 'pure-u-1-4');
		grid.appendChild(imageContainer);

		var imgUrl = xmlDocument.getElementsByTagName('images')[0].innerHTML;
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
		title.innerHTML = xmlDocument.getElementsByTagName('name')[0].innerHTML;
		link.appendChild(title);

		var desc = document.createElement('p');
		desc.innerHTML = xmlDocument.getElementsByTagName('description')[0].innerHTML;
		rightContainer.appendChild(desc);
	});

}

function filterCategory() {
	var cat = getQueryVariable('cat');

	for (var i = categoryIndex['recipe'].length - 1; i >= 0; i--) { 
		var category = categoryIndex['recipe'][i]["category"].toLowerCase();
		if (category==cat){
			showCategory(categoryIndex['recipe'][i]["id"]);	

		}
		
	};
};
function cc(xmlDocument) {
	eval("categoryIndex = " + xml2json(xmlDocument, "  ") + "[\"index\"];");

	filterCategory();


}
window.addEventListener('load', function() {
	getAndParse('data/recipes/index.xml', cc);
});