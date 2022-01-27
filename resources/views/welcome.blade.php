<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/home.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>QRCelia</title>
</head>
<body>
    <section id="app" class="home">
        <header-component v-on:scroll.native="scrollNav"></header-component>
        <div class="datos" id="datosHome">
            <div class="wrapper">
                <p class="datosBanner">
                    Descubre la historia del <br><span class="negrita"> I.E.S Celia Viñas </span>
                </p>
                <p class="textoBanner">
                    En su caso siglo de historia, dentro de sus paredes han ocurrido multitud de historias y aún existen pruebas 
                    y restos de dichas ocurrencias. Aunque este edificio, fue construido en 1923, comenzó a ser instituto en 1951. 
                    ¿Sabías que antes de ese año, en 1937, sufrió daños por parte de un bombardeo alemán?
                </p>
                <div class="botones">
                    <a href="/puntosInteres" class="boton"><span>Descubre más</span></a>
                    <a href="/QRMisterioso" class="boton"><span>QR Misterioso</span></a>
                </div>
            </div>
        </div>

    </section>
    
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
</body>
</html>