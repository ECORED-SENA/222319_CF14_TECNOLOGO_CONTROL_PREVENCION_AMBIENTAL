<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mt-4(data-aos="fade-right")
        p Para la gestión integral del manejo de residuos y, en la perspectiva de la normativa vigente, se hace fundamental y necesario la generación de un diagnóstico responsable y, en consecuencia, realizar la planeación e implementación de la gestión ambiental para el manejo de los residuos desde las acciones de mejora encontradas en tal diagnóstico. En cuanto al plan de gestión integral de residuos, este se divide en dos procesos fundamentales: gestión interna y gestión externa. Durante el estudio de este componente se tendrá muy en cuenta la gestión externa requerida en la #[strong gestión integral de los residuos y el seguimiento y medición del plan de gestión integral de residuos] (Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburra, 2008, p.28)
        .cajon.color-acento-contenido
            .row.p-4
              .col-lg-12
                p Téngase en cuenta que el plan de gestión integral de residuos, en lo relacionado con la gestión externa, hace referencia a:
                .col-md-12
                  ul.lista-ul.mb-2
                    li
                      i.fas.fa-check 
                      | Recolección y transporte externo.
                    li
                      i.fas.fa-check 
                      | Reciclaje, tratamiento y/o disposición final con un gestor ambiental externo autorizado.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/intro01.png') 

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
