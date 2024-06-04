<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-4 Estimado aprendiz bienvenido al componente formativo “Caracterización del territorio para realizar propuestas agroecológicas”, para iniciar se invita a consultar el siguiente video y conocer más:

    figure.mb-5
      .video
        <iframe width="853" height="480" src="https://www.youtube.com/embed/qvat4mf7xWk" title="Gestión de Sistemas Agroecológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
