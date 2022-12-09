<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo de la gestión integral de los residuos sólidos

    p.mb-3 El seguimiento permite la verificación del cumplimiento de las medidas propuestas para el Manejo Integral de Residuos. De su correcta estructuración depende el control y la identificación de aspectos que afecten su adecuada implementación.  Se deben generar estrategias que faciliten el proceso de control a las diferentes etapas del Manejo Integral de los Residuos. 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Para el caso de los residuos o desechos peligrosos, el seguimiento debe considerar además las medidas tendientes a la recopilación de la información que se debe presentar a las autoridades ambientales, por medio del Sistema de Información diseñado para tal fin, en los términos dispuestos en la Resolución 1362 de 2007 expedida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial sobre el registro de generadores y sus reportes mensuales y presentación  de informes de acuerdo a políticas de la autoridad competente puede ser cada 6 meses o anual.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 Para el caso de los residuos o desechos peligrosos, el seguimiento debe considerar además las medidas tendientes a la recopilación de la información que se debe presentar a las autoridades ambientales, por medio del Sistema de Información diseñado para tal fin, en los términos dispuestos en la Resolución 1362 de 2007 expedida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial sobre el registro de generadores y sus reportes mensuales y presentación  de informes de acuerdo a políticas de la autoridad competente puede ser cada 6 meses o anual.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema3/img_1.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    Separador

    #t_3_1.titulo-segundo
      .h2 3.1 Elaboración de un plan de seguimiento

    p.mb-5 El Plan de Seguimiento, permite la verificación del cumplimiento de las medidas propuestas en el Manejo Integral de Residuos. Se pueden utilizar herramientas como formatos de verificación, que pueden ser diligenciados por el Grupo de Gestión Ambiental o Gestor Ambiental, en visitas de seguimiento al interior de la organización, o por personal que se encuentre directamente relacionado con el manejo de los residuos, como el de aseo o de oficios generales.

    .row.align-items-star.justify-content-center
      .col-lg-6(data-aos="fade-right") 
        .jumbotron-3.p-5.h-100
          h.mb-3 Personal de aseo o servicios generales
          p.mb-3 Este talento humano, es un integrante de vital importancia para el seguimiento de la implementación del Manejo Integral de Residuos, debe ser el primer actor que se capacite; incluso, puede servir de multiplicador de la información al interior de la organización e independiente de su formación educativa, debe estar en capacidad de diligenciar formatos donde se indiquen en qué lugar de la organización, piso, zona, sector, oficina o planta, se perciben problemas relacionados con el mal manejo de residuos.


      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_2.png').mb-3

    h4.mb-3 Los formatos

    p.mb-3 Las observaciones referenciadas en los formatos deben ser entregadas periódicamente al Grupo de Gestión Ambiental o al Gestor Ambiental, para realizar los análisis respectivos y acometer los ajustes necesarios al proceso.

    p.mb-3 Lo mínimo que debe contener un informe de seguimiento es según la siguiente tabla 3:

    .row.justify-content-center.align-items-center.mb-0
      .col-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr.th-2
                th.text-center Componente
                th.text-center Actividades de Seguimiento
                th.text-center Responsable
            tbody
              tr.th-4
                td.text-center Capacitación
                td Verificar el cumplimiento de las capacitaciones programadas
                td Coordinador general Grupo de Gestión Ambiental
              tr.th-4
                td.text-center Separación en la fuente
                td Identificar y verificar si se están separando adecuadamente los residuos generados en cada sector de la organización. <br> Visitas a cada sector Entrevista al personal de servicios generales
                td Grupo de Gestión Ambiental
              tr.th-4
                td.text-center Almacenamiento
                td Revisar si los sitios de almacenamiento cumplen con los requerimientos establecidos, mediante visitas programadas en compañía del personal de oficios varios. <br> Determinar pesos de material entregado, así como los cambios que puedan generarse. <br> Verificar los certificados de las empresas encargadas del tratamiento a los residuos de la organización.
                td Grupo de Gestión Ambiental
              tr.th-4
                td.text-center Tratamiento
                td Verificar la entrega oportuna de los residuos a los entes externos encargados de su tratamiento.
                td Coordinador general Grupo de Gestión Ambiental
              tr.th-4
                td.text-center Disposición final
                td Verificar entrega oportuna de residuos que se disponen en relleno. <br> Determinar pesos de material entregado a la empresa de aseo encargada del transporte de los residuos. <br> Verificar los certificados de las empresas encargadas del tratamiento a los residuos de la organización.
                td Grupo de Gestión Ambiental
              tr.th-4
                td.text-center Análisis de indicadores, elaboración de declaratoria
                td Verificar rutas resolución interna y de horarios establecidos. <br> Cantidad de residuos separados por tipo <br> Cantidad de residuos tratados <br> Cantidad de residuos dispuestos en relleno sanitarios <br> Cantidad de residuos reciclados y/o reutilizados.
                td Grupo de Gestión Ambiental
    
        .row.mb-3
          .col-lg-12
            .jumbotron-3.p-2
              p.mb-0 Nota. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008).

        h4.mb-3 Listas de chequeo

        p.mb-3 Se requiere usar para el seguimiento, listas de chequeo, que pueden hacerse a manera de inspecciones planificadas cada cierto tiempo y mínimo una auditoría interna anual. Es recomendable visitar el material complementario Anexo Tabla 6 y Tabla 7. Auditoría interna para profundizar en ello.


    Separador

    #t_3_2.titulo-segundo
      .h2 3.2 Listas de chequeo

    p.mb-3 Los indicadores de gestión son un conjunto de expresiones numéricas que representan los aspectos que son susceptibles de variar en el tiempo, permiten analizar la evolución y el cumplimiento de las metas propuestas para el Manejo Integral de Residuos. Para ello es necesario definir con antelación, aspectos tales como: qué es lo que se va a medir, quién va a realizar la medición, cuáles son los mecanismos de medición que se van a utilizar y para qué sirven los resultados. Los indicadores de gestión que debe calcular la organización como mínimo son los siguientes para la gestión integral de los residuos sólidos


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-up").d-none.d-lg-block
      div(titulo="Reducción en la cantidad de residuos producidos")
        .row.align-items-center.justify-content-center.p-4
          .col-10.col-lg-2
            img(src='@/assets/curso/images/tema3/ico_2.svg' alt='', style="width:100px; display:block; margin:0 auto ;").mb-3
          .col-lg-10
            p.mb-3 Este indicador muestra la disminución en la cantidad total residuos generados por la organización incluyendo el material aprovechable y no aprovechable, peligroso o no peligroso, en otras palabras, es la sumatoria de todos los residuos generados, durante un periodo de tiempo determinado, el nivel de referencia se establece con el dato de generación de residuos aportado en el diagnóstico o con los datos del primer año de registros, comparado mes a mes.:
        .row.align-items-center.justify-content-center
          .col-lg-7
            .jumbotron-5.p-3
              p.mb-0.text-center % de reducción =  <u>Cant. RS Año 1 - Cant. RS Año 0</u> &nbsp  X 100
              p.text-center  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Cant. RS Año 1

      div(titulo="Indicadores de destinación")
        .row.align-items-center.justify-content-center.p-4
          .col-10.col-lg-2
            img(src='@/assets/curso/images/tema3/ico_3.svg' alt='', style="width:100px; display:block; margin:0 auto ;").mb-3
          .col-lg-10
            p.mb-3 Es el cálculo de la cantidad de residuos sometidos a desactivación de alta eficiencia, incineración, reciclaje, disposición en rellenos sanitarios, u otros sistemas de tratamiento dividido entre la cantidad total de residuos que fueron generados.
        .row.align-items-center.justify-content-center.mb-3
          .col-lg-7
            .jumbotron-5.p-3.mb-3
              p.mb-0.text-center % Destinación Relleno Sanitario =  <u>Residuos ordinarios e inertes (ton/mes)</u> &nbsp  X 100
              p.text-center  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Total de residuos generados (ton/mes)
            .jumbotron-5.p-3.mb-3
              p.mb-0.text-center % Destinación para reciclaje =  <u>Residuos reciclables (ton/mes)</u> &nbsp  X 100
              p.text-center  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Total de residuos generados (ton/mes)
            .jumbotron-5.p-3.mb-3
              p.mb-0.text-center % Destinación incineración =  <u>Residuos peligrosos (ton/mes)</u> &nbsp  X 100
              p.text-center  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Total de residuos generados (ton/mes)
            .jumbotron-5.p-3
              p.mb-0.text-center % Destinación otros sistemas =  <u>Residuos otros sistemas (ton/mes)</u> &nbsp  X 100
              p.text-center  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Total de residuos generados (ton/mes)
        .row.align-items-center.justify-content-center
          .col-lg-8
            p.mb-0 Para este último se debe especificar a qué otro tipo de sistemas se hace referencia, en caso de presentarse más de uno se debe realizar el cálculo para cada uno de estos.

      div(titulo="Indicadores de Capacitaciones")
        .row.align-items-center.justify-content-center.p-4
          .col-10.col-lg-2
            img(src='@/assets/curso/images/tema3/ico_1.svg' alt='', style="width:100px; display:block; margin:0 auto ;").mb-3
          .col-lg-10
            p.mb-3 Porcentaje de avance del programa de formación y educación. 
            p.mb-0 Este indicador muestra el total de talleres que se han hecho efectivos, con relación al total programadas
        .row.align-items-center.justify-content-center
          .col-lg-7
            .jumbotron-5.p-3
              p.mb-0.text-center % avance en los programas de formación y educación=  <u># Talleres realizados</u> &nbsp  X 100
              p.text-center  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp   # Talleres planteados


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-up").d-block.d-lg-none
      div(titulo="Reducción en la cantidad de residuos producidos")
        .row.align-items-center.justify-content-center.p-4
          .col-10.col-lg-2
            img(src='@/assets/curso/images/tema3/ico_2.svg' alt='', style="width:100px; display:block; margin:0 auto ;").mb-3
          .col-lg-10
            p.mb-3 Este indicador muestra la disminución en la cantidad total residuos generados por la organización incluyendo el material aprovechable y no aprovechable, peligroso o no peligroso, en otras palabras, es la sumatoria de todos los residuos generados, durante un periodo de tiempo determinado, el nivel de referencia se establece con el dato de generación de residuos aportado en el diagnóstico o con los datos del primer año de registros, comparado mes a mes.:
        .row.align-items-center.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/images/tema3/form_2.svg')

      div(titulo="Indicadores de destinación")
        .row.align-items-center.justify-content-center.p-4
          .col-10.col-lg-2
            img(src='@/assets/curso/images/tema3/ico_3.svg' alt='', style="width:100px; display:block; margin:0 auto ;").mb-3
          .col-lg-10
            p.mb-3 Es el cálculo de la cantidad de residuos sometidos a desactivación de alta eficiencia, incineración, reciclaje, disposición en rellenos sanitarios, u otros sistemas de tratamiento dividido entre la cantidad total de residuos que fueron generados.
        .row.align-items-center.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/images/tema3/form_3.svg').mb-1
            img(src='@/assets/curso/images/tema3/form_4.svg').mb-1
            img(src='@/assets/curso/images/tema3/form_5.svg').mb-1
            img(src='@/assets/curso/images/tema3/form_6.svg').mb-1
        .row.align-items-center.justify-content-center
          .col-lg-8
            p.mb-0 Para este último se debe especificar a qué otro tipo de sistemas se hace referencia, en caso de presentarse más de uno se debe realizar el cálculo para cada uno de estos.

      div(titulo="Indicadores de Capacitaciones")
        .row.align-items-center.justify-content-center.p-4
          .col-10.col-lg-2
            img(src='@/assets/curso/images/tema3/ico_1.svg' alt='', style="width:100px; display:block; margin:0 auto ;").mb-3
          .col-lg-10
            p.mb-3 Porcentaje de avance del programa de formación y educación. 
            p.mb-0 Este indicador muestra el total de talleres que se han hecho efectivos, con relación al total programadas
        .row.align-items-center.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/images/tema3/form_1.svg').mb-3

    Separador

    #t_3_3.titulo-segundo
      .h2 3.3 Hoja de vida del indicador

    p.mb-3 En consecuencia, con los indicadores de gestión, es recomendable que los mismos se manejen mediante un formato donde se observe claramente como en la figura 3, el nombre del indicador, la fórmula de cálculo, la unidad de medida y la frecuencia con la que se debe medir para agilizar el trabajo y su posterior análisis. 

    p.mb-3 En consecuencia, con los indicadores de gestión, es recomendable que los mismos se manejen mediante un formato donde se observe claramente como en la figura 3, el nombre del indicador, la fórmula de cálculo, la unidad de medida y la frecuencia con la que se debe medir para agilizar el trabajo y su posterior análisis. 


    .row.justify-content-center.align-items-center.my-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Hoja de vida del indicador
      .col-lg-11(data-aos="fade-left") 
        .jumbotron-2.p-4
          img(src='@/assets/curso/images/tema3/fig_3.svg').mb-3
        .row.mt-3
          .col-lg-12
            .jumbotron-3.p-2
              p.mb-0 Nota. Área metropolitana del Valle de Aburrá (2016).

    p.mb-3 Para cumplir con este propósito de seguimiento, los indicadores deben contar, metodológicamente, con una hoja de vida que los defina y sustente, la cual contenga:

    .row.justify-content-center.align-items-center.my-5
      .col-lg-12
        .jumbotron-6.p-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 1
              p.text-white Nombre del indicador
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 2
              p.text-white Objetivo del indicador
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 3
              p.text-white Tipo de indicador 
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 4
              p.text-white Nivel del indicador
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 5
              p.text-white Fórmula
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 6
              p.text-white Periodicidad
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 7
              p.text-white Fuente de datos
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 8
              p.text-white Responsable de generar los datos
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 9
              p.text-white Quién lo mide
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 10
              p.text-white Responsable de análisis del indicador
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 11
              p.text-white Interpretación
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 12
              p.text-white Límites de interpretación o rangos o criterio de análisis (condición crítica, normal y satisfactoria)
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 13
              p.text-white Meta establecida Creos Ltda. (2016)
          
    Separador

    #t_3_4.titulo-segundo
      .h2 3.4 Solicitud de certificados


    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_5.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 La organización en cabeza del Grupo de Gestión Ambiental o el Gestor Ambiental debe asegurarse que las empresas prestadoras del servicio de aprovechamiento, almacenamiento, acopio, tratamiento y/o disposición final de residuos sólidos peligrosos y no peligrosos, cuenten con las respectivas licencias o permisos expedidos por la autoridad ambiental para realizar estas labores; así mismo, de solicitar a terceros, los documentos donde se verifique esta situación, junto con los certificados sobre la disposición adecuada de los residuos que la organización entrega. 

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 La organización en cabeza del Grupo de Gestión Ambiental o el Gestor Ambiental debe asegurarse que las empresas prestadoras del servicio de aprovechamiento, almacenamiento, acopio, tratamiento y/o disposición final de residuos sólidos peligrosos y no peligrosos, cuenten con las respectivas licencias o permisos expedidos por la autoridad ambiental para realizar estas labores; así mismo, de solicitar a terceros, los documentos donde se verifique esta situación, junto con los certificados sobre la disposición adecuada de los residuos que la organización entrega. 
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema3/img_5.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    p.mb-0 En el certificado que se solicite a la organización que preste el servicio debe quedar claramente establecida la cantidad de residuos entregados para su respectivo manejo.























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
