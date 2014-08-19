$(function() {

  $('html').on('click', '.fern-image', function() {
    $('.page-title').html('<h1>Here\'s Your Fern!</h1>');
    $('.page-title').css({'color': 'white', 'font-size': '3em'});

    $('body').css({'background': 'url(images/star_2.gif) repeat', 'background-color': '#d82b86'});

    $('#fern_music').get(0).play();

  });

  $('html').on('click', '#tree', function() {
     $('.page-title').html('That\'s Not a Fern!');
     $('.page-title').css({'color': 'white'});
  });

});


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
  elDiv.style.transform = 'scale(1.6)';
  elDiv.style.transition = 'transform 50s';
  this.style.border = '3px solid #415914';
  var elTree = document.getElementById('tree');
  elTree.style.display = 'none';
}


var elImages = document.getElementsByClassName('fern-image');
for (i = 0; i < elImages.length; i++) {
  elImages[i].addEventListener('click', fernDisplay, false);
}





    

  







