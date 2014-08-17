function changeHeading() {
  var elHeading = document.getElementById('title');
  elHeading.textContent = 'Here\'s Your Fern!';
  elHeading.style.color = 'white';
  elHeading.style.fontSize = '6em';
}

function fernDisplay() {
  var elDivs = document.getElementsByClassName('fern-gallery__fern');
  for (i = 0; i < elImages.length; i++) {
    elDivs[i].style.display = 'none';
  }
  elDiv = this.parentNode;
  elDiv.style.display = 'inline-block';
  elDiv.className = elDiv.className + ' eight columns offset-by-three';
  elDiv.style.border = 'none';
  elDiv.style.marginLeft = '30px';
  elDiv.style.marginTop = '50px';
  elDiv.style.transform = 'scale(1.5)';
  elDiv.style.transition = 'transform 2s';
  this.style.border = '3px solid #415914';
  var elTree = document.getElementById('tree');
  elTree.style.display = 'none';
}

function displayStars() {
  document.body.style.background = 'url(images/star_2.gif) repeat';
  document.body.style.backgroundColor = '#d82b86';
}

function treeClick() {
  var elHeading = document.getElementById('title');
  elHeading.textContent = 'That\'s Not a Fern!';
  elHeading.style.color = 'white';
}

var elTree = document.getElementById('tree');
elTree.addEventListener('click', treeClick, false);

var elImages = document.getElementsByClassName('fern-image');
for (i = 0; i < elImages.length; i++) {
  elImages[i].addEventListener('click', changeHeading, false);
  elImages[i].addEventListener('click', fernDisplay, false);
  elImages[i].addEventListener('click', displayStars, false);
}






