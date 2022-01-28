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
  
  images[indexIMG-1].style.display = "block";
  images[indexIMG-1].className += " active";
}

/* SLIDE DE VIDEOS */
var indexVID = 1;
  showVideos(indexVID);

function plusVideos(n) {
  showVideos(indexVID += n);
}

function plusVideos(n) {
  showVideos(indexVID = n);
}

function showVideos(n) {
  let i = 0;
  var videos = document.getElementsByClassName("slide-videos");
  if (n > videos.length)
    indexVID = 1

  if (n < 1)
    indexVID = videos.length

  for (i = 0; i < videos.length; i++) {
    videos[i].style.display = "none";
  }

  for (i = 0; i < videos.length; i++) {
    videos[i].className = videos[i].className.replace(" active", "");
  }
  
  videos[indexVID-1].style.display = "block";
  videos[indexVID-1].className += " active";
}