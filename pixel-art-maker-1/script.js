let pixelGrid = document.getElementById('pixelGrid');
let penColour = 'black';

function setPenColour(pen) {
  penColour = pen;
  let currentColourPen = document.getElementById('currentPen');
  currentColourPen.style.backgroundColor = penColour;
}

pixelGrid.addEventListener('mouseover', function() {
  event.target.style.backgroundColor = penColour;
});


function clearPixelGrid() {
  let pixels = document.getElementsByClassName('pixel');
  // console.log("Pixels foo", pixels);
  Array.from(pixels).forEach(function(pixel) {
    pixel.style.backgroundColor = 'white';
  });
  // for (var i = 0; i < pixels.length; i++) {
  //   let pixel = pixels[i];
  //   pixel.style.backgroundColor = 'white';
  // }
}

let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
  clearPixelGrid();
});
