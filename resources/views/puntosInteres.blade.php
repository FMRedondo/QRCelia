<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/puntosInteres.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Puntos de interes | QRCelia</title>
</head>
<body>
    <section id="app">
        <header-component v-on:scroll.native="scrollNav"></header-component>
        <section id="puntosInteres">
            <div class="wrapper">
                <div class="primerElemento"></div>
                <separador-component texto='Puntos de interés'></separador-component>
                <p class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta perferendis animi hic, eum voluptates maiores sed praesentium dolores inventore aspernatur dolorem. Molestias at beatae voluptate praesentium corporis quas minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima libero a, nisi quibusdam hic, delectus adipisci eaque rem quia modi sunt molestias similique dolorem vel asperiores recusandae et. Quibusdam!</p>
                <div class="puntosInteres">

                    @php
                        $puntos = DB::select("SELECT * FROM interest_points");
                        foreach ($puntos as $punto) {
                            $name           = $punto -> name;
                            $description    = $punto -> description;
                            $text           = $punto -> text;
                            $poster         = $punto -> poster;

                            echo "<punto-interes titulo='$name' imagen='$poster' texto='$text' descripcion='$description'></punto-interes>";
                        }
                    @endphp
                </div>
            </div>
        </section>
    </section>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
</body>
</html>