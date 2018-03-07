let pixelGrid = document.getElementById('pixelGrid');


for (i = 0; i < 2418; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelGrid.appendChild(pixel);
}


let penColour = "black";

function setPenColour(pen) {
  penColour = pen;
  let currentColourPen = document.getElementById('currentPen');
  currentColourPen.style.backgroundColor = penColour;
}

pixelGrid.addEventListener('click', function(event) {
  if (event.target !== this) {
    event.target.style.backgroundColor = penColour;
  }
});

let isDown;

function paintBrushDown (pixels){
  isDown = true;
}

function paintBrushUp (){
  isDown = false;
}

function paintBrushMove (pixels){
  if (isDown){
    pixels.target.style.backgroundColor = penColour;
  }
}

pixelGrid.addEventListener('mousedown', paintBrushDown);
pixelGrid.addEventListener('mouseup', paintBrushUp);
pixelGrid.addEventListener('mouseover', paintBrushMove);




    function clearPixelGrid() {
      let pixels = document.getElementsByClassName('pixel');
      console.log("Pixels foo", pixels);
      Array.from(pixels).forEach(function(pixel) {
        pixel.style.backgroundColor = 'white';
      });
    }

    let clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
      clearPixelGrid();
    });
