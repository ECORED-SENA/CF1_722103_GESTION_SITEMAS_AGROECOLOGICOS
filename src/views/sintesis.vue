<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En este componente se establecen las metodologías participativas que permiten comprender la dinámica de los actores sociales mediante técnicas y herramientas que facilitan realizar un análisis y evaluación a los grupos y actores sociales que tienen presencia directa o indirecta en los territorios, y así, se busca entender la percepción de los actores frente a los roles que estas cumplen. Comprender las dinámicas de los actores propicia la cohesión, la resistencia y los procesos organizativos tendientes al desarrollo comunitario. En lo referente a las metodologías para el análisis de acciones se sostiene que éstas pretenden investigar las acciones y medidas de fuerza aplicadas contra las comunidades, como también las reacciones y respuestas de resistencia organizada que impiden las agresiones o afectaciones comunitarias. Siendo importante el tratamiento de la información documental y la participación ciudadana para generar desarrollo social, puesto que la identidad cultural está íntimamente con el territorio y las prácticas, costumbres y conocimientos tradicionales, brindan una amplia información y experiencia que es fundamental para encontrar soluciones agroecológicas a las problemáticas actuales, ya que por ejemplo, la agroecología juega un papel vital en la búsqueda de alcanzar el balance entre las tradiciones y los nuevos alimenticios.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
