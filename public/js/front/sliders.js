/* SLIDE DE IMAGENES */
var indexIMG = 1;
  showIMG(indexIMG);

function plusIMG(n) {
  showIMG(indexIMG += n);
}

function currentIMG(n) {
  showIMG(indexIMG = n);
}  

function showIMG(n) {
  let i = 0;
  var images = document.getElementsByClassName("slide-images");
  if (n > images.length)
    indexIMG = 1

  if (n < 1)
    indexIMG = images.length

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(" active", "");
  }
  
  if (images.length > 1) {
    images[indexIMG-1].style.display = "block";
    images[indexIMG-1].className += " active";
  }
}