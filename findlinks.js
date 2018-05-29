var category = document.querySelector('.category');
var links = Array.from(category.querySelectorAll('a'));

for (i = 0; i < links.length; i++) {
  var trueUrl = links[i].attributes.length;
  if (trueUrl = 2) {
    var url = links[i].attributes[1].ownerElement.attributes[0].textContent;
    var url = links[i].attributes.title;
    console.log(url);
  }
}
