var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var item = document.getElementsByTagName('li');
	
	element.innerHTML = 'item ' + item.length;
	
	list.appendChild(element);
});