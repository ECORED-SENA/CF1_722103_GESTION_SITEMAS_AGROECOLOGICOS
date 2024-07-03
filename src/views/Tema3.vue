<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Revisión documental 

    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p.mx-3 En la actualidad el flujo de información genera que diferentes bases de datos acepten información de todo tipo para su consulta y tratamiento. De esa manera, una técnica para poder gestionar, analizar, sintetizar y elaborar fichas de información y que esta sea conducente con el interés del investigador es la revisión documental. 
        p.mx-3 La revisión documental, es una herramienta que permite identificar de primera mano la información y de este modo, establecer la metodología cualitativa o cuantitativa de conveniencia académica y social para poder generar informes. Por tal razón, la revisión documental es un instrumento para organizar y darle uso a la información contenida en plataformas digitales y bibliotecas para el uso práctico y científico.
        .cajon.color-acento-contenido.p-4.ps-5.color2
          p.m-0 Esta información sirve como punto de partida y de contexto de temáticas que necesitan ser investigadas y se desea conocer información previa. En ese sentido, esta técnica permite identificar los diversos documentos que contienen las fuentes de información relacionada, así mismo, permite distinguir sí hace falta información relevante del tema a investigar y por ende establece una orientación hacia los posibles resultados. 
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img02.png', alt='Imagen Decorativa')

    .bg_13.p-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img04.svg', alt='Imagen Decorativa') 
        .col-lg-7.col-xl-8.col-xxl-7.mt-4
          p.m-0 La revisión documental se conoce como una manera de investigación técnica mediante un grupo de operaciones intelectuales enfocadas a detallar y representar los documentos de modo consolidado y sistemático y, así ayudar a su recuperación. Además, este procedimiento incorpora diversos apartados como el índice, las reseñas, las referencias y fuentes bibliográficas (Madrid y Ortiz, 2005).

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.1. Fuentes de información de sistemas agroecológicos

    p Las fuentes de información son instrumentos que permiten el acceso, conocimiento, gestión y búsqueda de información de calidad a través del análisis de información que forma parte de la investigación y la indagación en procesos de inteligencia y vigilancia tecnológica. El objetivo de las fuentes de información es la captación, evaluación, selección y síntesis de documentos para el análisis y tratamiento determinado (Suárez, Urdaneta y Jaimes, 2019). El análisis de información genera estrategias que contribuyen a la toma de decisiones a partir de la relevancia que pueden tener los documentos. 
    p.mb-5 Existen diferentes fuentes de información, que se encuentran tipificados en cinco recursos que son:

    .row.justify-content-evenly.align-items-lg-stretch.mb-5.m_tar-boton
      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img05.png',  alt='Imagen Decorativa')

          h4.mb-4.px-3 Obras de consulta:
          p.px-3 Enciclopedias, diccionarios, directorios, anuarios, índices, biografías, manuales, cronologías.

      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img06.png', alt='Imagen Decorativa')

          h4.mb-4.px-3 Obras literarias y científicas:
          p.px-3 Libros, tesis, artículos, folletos.

      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img07.png', alt='Imagen Decorativa')

          h4.mb-4.px-3 Audiovisuales:
          p.px-3 Películas, diapositivas, videos, documentales, audios. 

      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img08.png', alt='Imagen Decorativa')

          h4.mb-4.px-3 Publicaciones periódicas:
          p.px-3 Periódicos, diarios, revistas, boletines. 

      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img09.png', alt='Imagen Decorativa')

          h4.mb-4.px-3 Otros tipos:
          p.px-3 Informes técnicos y de investigación, patentes bibliografías, actas, normas, catálogos, literatura gris. 

    p.text-center.mb-5
      strong Además, las fuentes de información cuentan con una clasificación general en:

    TabsB.color-acento-contenido.mb-5.color_img-tab.bg_17
      .py-4.py-md-5(titulo="Fuentes primarias" :icono="require('@/assets/curso/tema3/img10.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Son las que suministran información directa, nueva y auténtica, publicada por primera vez y que no ha sido analizada por otra persona, como, por ejemplo, libros, manuscritos, entrevistas, discursos, cartas, diarios, revistas, videos, guías, testimonios, foros, tesis, documentales, informes, etc.    
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img10.png',  alt='Imagen Decorativa')
                      
      .py-4.py-md-5(titulo="Fuentes secundarias" :icono="require('@/assets/curso/tema3/img11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Contienen información obtenida de fuentes primarias que ha sido analizada, interpretada, ampliada, reorganizada y recapitulada, como por ejemplo las enciclopedias.      
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img11.png',  alt='Imagen Decorativa')
                
      .py-4.py-md-5(titulo="Fuentes terciarias" :icono="require('@/assets/curso/tema3/img12.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Sirven para tener una noción o idea general del tema ya que reúnen y depura la información primaria y secundaria, logrando facilitar su control y acceso como por ejemplo directorios, bibliografías, índices, listas de lectura.     
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img12.png',  alt='Imagen Decorativa')

    p Pero adicionalmente, como se observa en la figura 7, las fuentes de información cuentan con otras clasificaciones dependiendo de la procedencia u origen de la información, según su formato, el alcance geográfico. 

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 7.
      span <em>Clasificación fuentes de información</em>
    
    
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img.img-t.m-auto.d-none.d-lg-block(src='@/assets/curso/tema3/img13.svg', alt='Las fuentes de información se clasifican así: formato o soporte, procedencia u origen ,cobertura geográfica y tipo de información.')
        figure
          img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema3/img21.svg', alt='Las fuentes de información se clasifican así: formato o soporte, procedencia u origen ,cobertura geográfica y tipo de información.')             


    p En lo que tiene que ver con las fuentes de información de sistemas agroecológicos, estos contribuyen a resolver problemas por factores climáticos y sociales. Existen modelos como el propuesto por Calle Vara, y Cuéllar (2006) citado por Suarez, Urdaneta y Jaimes, (2019) denominado transición social agroecológica, que permite llevar a cabo el estudio y análisis del desarrollo de los sistemas agroecológicos (ver figura 8).
    p Este modelo establece una perspectiva del alcance con el objetivo de inducir a pensar y examinar en tres grandes dimensiones resultantes de la unión entre lo ecológico y lo social, que son:

    .bg_14.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-5
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img14.svg', alt='Imagen Decorativa')
        .col-lg-6.col-xl-7.col-xxl-6
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p.m-0 La dimensión micro-socio-cultural o de dinámicas de cooperación.
            li 
              i.fas.fa-check
              p.m-0 La dimensión socio-política donde se involucran las instituciones formales, informales de carácter social o públicas encargadas de formular políticas.
            li 
              i.fas.fa-check
              p La dimensión eco-estructural donde se manejan unidades productivas relacionados con los recursos tecnológicos y naturales.                     	           

    p.mb-5 Por tanto, las fuentes de información agroecológica para proporcionar información relacionada con el territorio y el espacio en el que la relación socioambiental está presente para la toma de decisiones, se basan en elementos de diversos sectores, como son sociales, económicos, culturales, ambientales, políticos, ecológicos y tecnológicos.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
      h5 Figura 8.
      span <em>Modelo de transición social agroecológica</em>     

    .bg_16.p-4
      .row.justify-content-center.mb-4
        .col-lg-12
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img15.svg', alt='El modelo de transición social agroecológica se fundamenta y se relaciona en la parte posterior de la imagen.')

        figcaption Nota. Modelo de transición social agroecológica. Calle, Vara, y Cuéllar. (2006).    

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.2. Uso de fuentes y análisis de la información

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-7.mb-3
        p Por su parte, el análisis de la información se enfoca en el tratamiento de los datos de un tema en específico y, tiene como objetivo ofrecer referencias y datos derivados de las fuentes bibliográficas. En concordancia las fuentes de información la resguardan para después ser analizada, con la finalidad de capturar, escoger, analizar y resumir los datos que obtienen de la recopilación, lectura y revisión documental.     
        .bg_15.p-4
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              img.img-t.mx-auto(src='@/assets/curso/tema3/img16.svg', alt='Imagen Decorativa')
            .col-lg-10.col-md-9.col-xl-9.col-xxl-10
              p.m-0 Si se realiza de manera eficiente y productiva permite que el conocimiento adquirido sea empleado de forma exitosa y así agilizar su ejecución y puesta en práctica, como también la toma de decisiones y la recuperación de información.  
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/tema3/img17.png', alt='Imagen Decorativa')

    p A pesar del análisis de la información se ocupa directamente del estudio del material de un ámbito específico, existen pautas básicas y generales  que se deben tener en cuenta a la hora de realizar el análisis de la información, las cuales van desde conocer el tipo de fuente es decir la tipología, como también el autor, la fecha, lugar y contexto histórico de publicación, para luego analizar la información, es decir, la idea central, los conceptos, los personajes y demás información obtenida, y, así lograr concluir y aportar desde su óptica y análisis. A continuación, se presentan en la infografía estas características: 

    .bg_color_secundario_blanco.p-3.p-lg-5.py-md-4.mb-5
      .row.justify-content-center
        .col-lg-12
          figure
            img.img-t.m-auto.d-none.d-lg-block(src='@/assets/curso/tema3/img18.svg', alt='Características del análisis de la información: contexto, tipo, autor, información y conclusión.')
          figure
            img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema3/img19.svg', alt='Características del análisis de la información: contexto, tipo, autor, información y conclusión.') 

    p.mb-5 Por tanto, juega un papel importante y decisivo la inteligencia, astucia y creatividad de la persona que realiza el proceso de análisis, ya que debe tener la capacidad de interpretar, analizar, argumentar, proponer y debatir, y no solo transcribir, resumir y referenciar.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/img20.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Enlace web
                  p.text-small Para poder buscar información específica en agroecología, existen diferentes bases de datos y revistas específicas en la disciplina, en el siguiente artículo se relacionan cada una de ellas.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Administrador-Paginas-Inicio.pdf')" target="_blank")
                    span Enlace
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
