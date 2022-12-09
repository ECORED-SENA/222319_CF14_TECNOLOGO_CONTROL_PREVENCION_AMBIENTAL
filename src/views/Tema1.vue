<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos Generales

    p.mb-5 Es importante reconocer algunos de los elementos conceptuales que favorecerán un mejor estudio y comprensión de este componente y todo lo relacionado con la gestión y manejo de los residuos en la organización. Es así como es recomendable tomar nota de cada concepto para favorecer su comprensión y asimilación.

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs
    .row.align-items-star.justify-content-center
      .col-lg-6(data-aos="fade-right") 
        .jumbotron-1.p-5.h-100
          h.mb-3 Manejo integral de residuos: 
          p.mb-3 Como se observa en la figura 1, “es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.”

          p.mb-3 (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4)

      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_1.png').mb-3

    .row.justify-content-center.align-items-center.my-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Manejo integral de residuos
      .col-lg-10(data-aos="fade-left") 
        .jumbotron-2.p-4
          img(src='@/assets/curso/images/tema1/fig_1.svg').mb-3
        .row.mt-3
          .col-lg-12
            .jumbotron-3.p-2
              p.mb-0 Nota. Imagen tomada del Viceministerio de turismo de Colombia (s.f.). 

    h4.mb-3 Gestión Integral de residuos

    p.mb-3 De manera diferenciada, aunque en el mismo sentido y enfoque, gestión integral de residuos sólidos “es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final.” (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.3)

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    .row.align-items-star.justify-content-center
      .col-lg-6(data-aos="fade-right") 
        .jumbotron-1.p-5.h-100
          h.mb-3 El Manejo Integral  
          p.mb-3 El manejo integral de Residuos implica la planeación y cobertura de las actividades relacionadas con los residuos, desde la generación hasta la disposición final, incluyendo los aspectos de segregación, movimiento interno, almacenamiento, desactivación, recolección, transporte y tratamiento, con lo cual se pretende evitar y minimizar la generación de residuos e incrementar el aprovechamiento de éstos, de tal suerte que cada vez sea menor la cantidad de residuos a disponer, como se puede observar en el esquema de jerarquización en la figura 2 de la gestión de los residuos. (Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra, 2008)


      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_2.png').mb-3

    .row.justify-content-center.align-items-center.my-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Jerarquía en la gestión de residuos
      .col-lg-11(data-aos="fade-left") 
        .jumbotron-2.p-4
          img(src='@/assets/curso/images/tema1/fig_2.svg').mb-3
        .row.mt-3
          .col-lg-12
            .jumbotron-3.p-2
              p.mb-0 Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11)

    h4.mb-3 Gestión

    p.mb-3 “Se trata del conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo.” (Área de salud de Cáceres, 2015, p.2).

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h4.mb-3 Gestión Interna de residuos: 
            p.mb-3 “Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización.
              .row.mb-3
                .col-sm.mb-5.mb-sm-0
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span(style='color:black') 1
                      | Dotación de contenedores donde depositar los residuos. 
                    li 
                      .lista-ol--cuadro__vineta
                        span(style='color:black') 2
                      | Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje. 
                    li 
                      .lista-ol--cuadro__vineta
                        span(style='color:black') 3
                      | Transporte de los residuos al almacén central de residuos sanitarios del centro.” (Área de salud de Cáceres, 2015, p.2).

          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_3.png").mb-3
        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h4.mb-3 Gestión Externa de residuos
            p.mb-3 “Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 
            .row.mb-3
              .col-sm.mb-5.mb-sm-0
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span(style='color:black') 1
                    | Recogida y transporte a Plantas de Transferencia o Tratamiento. 
                  li 
                    .lista-ol--cuadro__vineta
                      span(style='color:black') 2
                    | Tratamiento y eliminación.” (Área de salud de Cáceres, 2015, p.2). 

            p.mb-3 “Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.” (Área de salud de Cáceres, 2015, p.2). 

          .col-lg-8
            img(src="@/assets/curso/images/tema1/img_4.png").mb-3

       


























































</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
