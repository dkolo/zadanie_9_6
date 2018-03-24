var list = document.getElementById('list'),
	 add = document.getElementById('addElem'),
	 liNumber = document.getElementsByTagName('li');

add.addEventListener('click', function () {
  var element = document.createElement('li');
  element.innerHTML = 'item ' + liNumber.length;
  list.appendChild(element);
});