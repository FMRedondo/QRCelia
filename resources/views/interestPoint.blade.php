<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/puntoDeInteres.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
    <title>Si y solo si</title>
</head>
<body>
    <section id="app">
        <interestpoint-page v-on:scroll.native="scrollNav"></interestpoint-page>

        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://www.filmingalmeria.es/Servicios/Informacion/Informacion.nsf/1628D7278E7ADFCBC1257D8F0045E1BB/$file/almeria-cine-localizaciones-capital-celia-vi%C3%B1as-contemporaneo-5.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://www.filmingalmeria.es/Servicios/Informacion/Informacion.nsf/1628D7278E7ADFCBC1257D8F0045E1BB/$file/almeria-cine-localizaciones-capital-celia-vi%C3%B1as-contemporaneo-5.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="wrapper">
            <separador-component texto='información'></separador-component>
        </div>
        
        <div id="information">
            <div class="pointContent">
                <div class="contentHeader">
                    <div class="contentTitle">
                        <p id="type">Categoría: Tanques chulos</p>
                        <h1>Panzerkampwagen VI Tiger I</h1>
                        <p id="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores eum accusantium libero optio quos laborum deleniti necessitatibus vitae.</p>
                    </div>
                    <div class="contentThumbnail">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg" alt="Miniatura del punto">
                    </div>
                </div>
                <div class="contentText">
                    <div class="entryText">
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ab natus placeat ad dolores corrupti alias atque ut nesciunt quibusdam quas reiciendis doloremque fuga sed explicabo distinctio, consequuntur saepe vero.
                    Repudiandae inventore exercitationem tenetur, similique adipisci laborum veniam sed suscipit labore quia dolor et eligendi nam distinctio. Asperiores error nisi reprehenderit quasi ad adipisci exercitationem natus deleniti, voluptas, tempore architecto.
                    Impedit ea totam praesentium dolor aliquid cum id quaerat quae, error harum, repudiandae dolorum nulla similique reprehenderit assumenda. Error, est ad vel placeat reprehenderit minima. Nostrum dolores itaque repellendus adipisci.
                        </p>
                    </div>
                </div> 
            </div>
        </div>

        <div id="multimedia">
            <div class="videosPanel">

            </div>
            <div class="audioPanel">

            </div>
        </div>
    </section>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script>
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    </script>
</body>
</html>