<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.justify-content-center.mb-5  
      .col-lg-12(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_1_intro.png')

    p.mb-3 Para la gestión integral del manejo de residuos y, en la perspectiva de la normativa vigente, se hace fundamental y necesario la generación de un diagnóstico responsable y, en consecuencia, realizar la planeación e implementación de la gestión ambiental para el manejo de los residuos desde las acciones de mejora encontradas en tal diagnóstico. En cuanto al plan de gestión integral de residuos, este se divide en dos procesos fundamentales: gestión interna y gestión externa. Durante el estudio de este componente se tendrá muy en cuenta la gestión externa requerida en la gestión integral de los residuos y el seguimiento y medición del plan de gestión integral de residuos (Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburra, 2008, p.28)

    p.mb-3 Téngase en cuenta que el plan de gestión integral de residuos, en lo relacionado con la gestión externa, hace referencia a:

    .row.align-items-star.justify-content-center
      .col-lg-6(data-aos="fade-right")  
        img(src='@/assets/curso/images/tema1/img_2_intro.png').mb-3
      .col-lg-6(data-aos="fade-left")
        .jumbotron.p-5.h-100
          ul.lista-ul
            li.mb-0 
                i.fas.fa-check.c-check
                p.mb-0 Recolección y transporte externo.   
            li.mb-0 
                i.fas.fa-check.c-check
                p.mb-0 Reciclaje, tratamiento y/o disposición final con un gestor ambiental externo autorizado.

       
    


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
