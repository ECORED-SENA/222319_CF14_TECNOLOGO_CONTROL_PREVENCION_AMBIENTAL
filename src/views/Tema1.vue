<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Conceptos Generales
  
    p Es importante reconocer algunos de los elementos conceptuales que favorecerán un mejor estudio y comprensión de este componente y todo lo relacionado con la gestión y manejo de los residuos en la organización. Es así como es recomendable tomar nota de cada concepto para favorecer su comprensión y asimilación.

    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .p-5.BG01(titulo="Manejo integral de residuos")
        .row.justify-content-evenly.align-items-center      
          .col-md-12
            h4 Manejo integral de residuos 
            p.mb-4 Como se observa en la figura 1, “es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.” <br>(Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4)
          .col-lg-9
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 1
              p.mb-0 Manejo integral de residuos
            img(src='@/assets/curso/tema1/img02.svg', alt='')   
      .p-5.BG01(titulo="Gestión Integral de residuos")
        .row.justify-content-center.align-items-center      
          .col-8
            h4 Gestión Integral de residuos
            p.mb-4 De manera diferenciada, aunque en el mismo sentido y enfoque, #[strong gestión integral de residuos sólidos]
            .col-lg-12
              i.fas.fa-quote-left
              p.text-regular Es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final.
                i.fas.fa-quote-right
              h3.text-center (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.3)
          .col-lg-4
            img(src='@/assets/curso/tema1/img03.svg', alt='') 
      .p-5.BG01(titulo="El Manejo Integral")
        .row.justify-content-evenly.align-items-center      
          .col-md-12
            h4 El Manejo Integral 
            p.mb-4 El manejo integral de Residuos implica la planeación y cobertura de las actividades relacionadas con los residuos, desde la generación hasta la disposición final, incluyendo los aspectos de segregación, movimiento interno, almacenamiento, desactivación, recolección, transporte y tratamiento, con lo cual se pretende evitar y minimizar la generación de residuos e incrementar el aprovechamiento de éstos, de tal suerte que cada vez sea menor la cantidad de residuos a disponer, como se puede observar en el esquema de jerarquización en la figura 2 de la gestión de los residuos. (Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra, 2008)
          .col-lg-9
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 2
              p.mb-5 Jerarquía en la gestión de residuos
            img(src='@/assets/curso/tema1/img04.svg', alt='')
          caption.text-center.P-3 #[strong Nota.] Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008).
      .p-5.BG01(titulo="Gestión")
        .row.justify-content-evenly.align-items-center      
          .col-md-8
            h4 Gestión
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular Se trata del conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo.
                  i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.text-center Área de salud de Cáceres, 2015, p.2  
          .col-lg-3    
            img(src='@/assets/curso/tema1/img05.png', alt='')
      .p-5.BG01(titulo="Gestión Interna de residuos")
        .row.justify-content-evenly.align-items-center      
          .col-md-7
            h4 Gestión Interna de residuos
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización.
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      | Dotación de contenedores donde depositar los residuos. 
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje.
                    li 
                      .lista-ol--cuadro__vineta
                        span 3
                      | Transporte de los residuos al almacén central de residuos sanitarios del centro.” (Área de salud de Cáceres, 2015, p.2).
                    i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5 Área de salud de Cáceres, 2015, p.2                 
          .col-lg-4    
            img(src='@/assets/curso/tema1/img06.svg', alt='')

      .p-5.BG01(titulo="Gestión Externa de residuos")
        .row.justify-content-evenly.align-items-center.BG02.p-4
          .col-lg-12.mb-5
            h4 Gestión Externa de residuos:
          .col-lg-5
            .row.justify-content-center.BG03.py-5.px-4
              .col-lg-2
                i.fas.fa-quote-left
              .col-lg-10
                p Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 
              .col-12
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Recogida y transporte a Plantas de Transferencia o Tratamiento. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Tratamiento y eliminación.” (Área de salud de Cáceres, 2015, p.2).
                    i.fas.fa-quote-right
          .col-lg-6
            .row.justify-content-center.BG03.py-4
              .col-lg-2
                i.fas.fa-quote-left
              .col-lg-9
                p Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.” 
                i.fas.fa-quote-right
              .col-4
              .col-lg-8
                h4 - Área de salud de Cáceres, 2015, p.2.
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
