<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/puntosDeInteres.css">
    <title>Si y solo si</title>
</head>
<body>
    <section id="app">
        <interestpoint-page v-on:scroll.native="scrollNav"></interestpoint-page>

        <div id="gallery">
                <div id="arrows">
                    <div class="arrow prev"></div>
                    <div class="arrow next"></div>
                </div>
        </div>
        
        <div id="information">

        <div id="pointThumbnail">
            <div class="pointContent">
            </div>
        </div>

    </section>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>