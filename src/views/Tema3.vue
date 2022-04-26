<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span.text-white 3
      h1 Monitoreo de la gestión integral de los residuos sólidos

    p.mb-5 El seguimiento permite la verificación del cumplimiento de las medidas propuestas para el Manejo Integral de Residuos. De su correcta estructuración depende el control y la identificación de aspectos que afecten su adecuada implementación.  Se deben generar estrategias que faciliten el proceso de control a las diferentes etapas del Manejo Integral de los Residuos. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para el caso de los residuos o desechos peligrosos, el seguimiento debe considerar además las medidas tendientes a la recopilación de la información que se debe presentar a las autoridades ambientales, por medio del Sistema de Información diseñado para tal fin, en los términos dispuestos en la Resolución 1362 de 2007 expedida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial sobre el registro de generadores y sus reportes mensuales y presentación  de informes de acuerdo a políticas de la autoridad competente puede ser cada 6 meses o anual.

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Elaboración de un plan de seguimiento

    p.mb-5 El Plan de Seguimiento, permite la verificación del cumplimiento de las medidas propuestas en el Manejo Integral de Residuos. Se pueden utilizar herramientas como formatos de verificación, que pueden ser diligenciados por el Grupo de Gestión Ambiental o Gestor Ambiental, en visitas de seguimiento al interior de la organización, o por personal que se encuentre directamente relacionado con el manejo de los residuos, como el de aseo o de oficios generales.

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Personal de aseo o servicios generales")
        .col-md-11.mb-4.mb-md-0
          p Este talento humano, es un integrante de vital importancia para el seguimiento de la implementación del Manejo Integral de Residuos, debe ser el primer actor que se capacite; incluso, puede servir de multiplicador de la información al interior de la organización e independiente de su formación educativa, debe estar en capacidad de diligenciar formatos donde se indiquen en qué lugar de la organización, piso, zona, sector, oficina o planta, se perciben problemas relacionados con el mal manejo de residuos.
        .col-md-11.mb-4.mb-md-0
          img(src='@/assets/curso/tema3/img02.png')
      .row(titulo="Los formatos")
        .col-md-11.mb-4.mb-md-0
          p Las observaciones referenciadas en los formatos deben ser entregadas periódicamente al Grupo de Gestión Ambiental o al Gestor Ambiental, para realizar los análisis respectivos y acometer los ajustes necesarios al proceso.
        .col-md-11.mb-4.mb-md-0
          img(src='@/assets/curso/tema3/img03.png')
      .row(titulo="Lo mínimo que debe contener un informe de seguimiento es según la siguiente tabla 3:")
        .col-md-11.mb-4.mb-md-0
          img(src='@/assets/curso/tema3/img04.png')
      .row(titulo="Listas de chequeo")
        .col-md-11.mb-4.mb-md-0
          p Se requiere usar para el seguimiento, listas de chequeo, que pueden hacerse a manera de inspecciones planificadas cada cierto tiempo y mínimo una auditoría interna anual. Es recomendable visitar el material complementario <b>Anexo Tabla 6 y Tabla 7. Auditoría interna</b> para profundizar en ello.
        .col-md-11.mb-4.mb-md-0
          img(src='@/assets/curso/tema3/img05.png')

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Indicadores

    p.mb-5 Los indicadores de gestión son un conjunto de expresiones numéricas que representan los aspectos que son susceptibles de variar en el tiempo, permiten analizar la evolución y el cumplimiento de las metas propuestas para el Manejo Integral de Residuos. Para ello es necesario definir con antelación, aspectos tales como: qué es lo que se va a medir, quién va a realizar la medición, cuáles son los mecanismos de medición que se van a utilizar y para qué sirven los resultados. Los indicadores de gestión que debe calcular la organización como mínimo son los siguientes para la gestión integral de los residuos sólidos

    TabsA.color-acento-contenido.mb-5
      .tarjeta.BG09.p-4(titulo="Reducción en la cantidad <br> de residuos producidos:")  
        .row.justify-content-center
          .col-12.mb-4
            p Este indicador muestra la disminución en la cantidad total residuos generados por la organización incluyendo el material aprovechable y no aprovechable, peligroso o no peligroso, en otras palabras, es la sumatoria de todos los residuos generados, durante un periodo de tiempo determinado, el nivel de referencia se establece con el dato de generación de residuos aportado en el diagnóstico o con los datos del primer año de registros, comparado mes a mes.:
          .col-7
            img(src='@/assets/curso/tema3/img06.png')
      .tarjeta.BG09.p-4(titulo="Indicadores de destinación:")  
        .row.justify-content-center
          .col-12.mb-3
            p Es el cálculo de la cantidad de residuos sometidos a desactivación de alta eficiencia, incineración, reciclaje, disposición en rellenos sanitarios, u otros sistemas de tratamiento dividido entre la cantidad total de residuos que fueron generados.
          .col-9.mb-4
            img(src='@/assets/curso/tema3/img07.svg')
          .col-12
            p Para este último se debe especificar a qué otro tipo de sistemas se hace referencia, en caso de presentarse más de uno se debe realizar el cálculo para cada uno de estos.
      .tarjeta.BG09.p-4(titulo="Indicadores de Capacitaciones")  
        .row.mb-4
          .col-12
            p.mb-0 Porcentaje de avance del programa de formación y educación. 
            p Este indicador muestra el total de talleres que se han hecho efectivos, con relación al total programadas
        .row.justify-content-center  
          .col-7
            img(src='@/assets/curso/tema3/img08.svg')

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Hoja de vida del indicador

    p.mb-5 En consecuencia, con los indicadores de gestión, es recomendable que los mismos se manejen mediante un formato donde se observe claramente como en la figura 3, el nombre del indicador, la fórmula de cálculo, la unidad de medida y la frecuencia con la que se debe medir para agilizar el trabajo y su posterior análisis. 

    .cajon.color-secundario.p-4.mb-4
      p La organización, de acuerdo con sus metas planteadas, debe formular otro tipo de indicadores que le permitan medir su desempeño en términos cuantitativos. Es el caso del indicador de producción, que varía de acuerdo con cada organización y que es de vital importancia para medir la efectividad de sus procesos planteados.

    .row.justify-content-center 
      .col-lg-8.col-md-9.col-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3
          p.mb-0 Hoja de vida del indicador
        img(src='@/assets/curso/tema3/img09.svg')
      .col-lg-8.col-md-10.col-11.mb-3.BG06.p-1
        p Nota. Área metropolitana del Valle de Aburrá (2016).  
    .row.mb-5
      .col-lg-7.col-7
      .col-lg-2.col-md-4.col-4.p-2
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          img(src='@/assets/curso/tema2/img07.png')
          span Ampliar
          .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-lg-12
          img(src='@/assets/curso/tema3/img10.svg')

    .row.BGIMG01.p-0
      .col-lg-2.col-md-4.col-6.p-0
        img.img01(src='@/assets/curso/tema3/img11.png')
      .col-1
      .col-lg-8.py-4.px-4
        p Para cumplir con este propósito de seguimiento, los indicadores deben contar, metodológicamente, con una hoja de vida que los defina y sustente, la cual contenga:
        .row  
          .col-5
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-check 
                | Nombre del indicador
              li.mb-0
                i.fas.fa-check 
                | Objetivo del indicador
              li.mb-0
                i.fas.fa-check 
                | Tipo de indicador
              li.mb-0
                i.fas.fa-check 
                | Nivel del indicador
              li.mb-0
                i.fas.fa-check 
                | Fórmula
              li.mb-0
                i.fas.fa-check 
                | Periodicidad
              li.mb-0
                i.fas.fa-check 
                | Fuente de datos
          .col-7
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-check 
                | Responsable de generar los datos
              li.mb-0
                i.fas.fa-check 
                | Quién lo mide
              li.mb-0
                i.fas.fa-check 
                | Responsable de análisis del indicador
              li.mb-0
                i.fas.fa-check 
                | Interpretación
              li.mb-0
                i.fas.fa-check 
                | Límites de interpretación o rangos o criterio de análisis (condición crítica, normal y satisfactoria)
              li.mb-0
                i.fas.fa-check 
                | Meta establecida Creos Ltda. (2016)

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Solicitud de certificados

    .row.align-items-center
      .col-lg-7.col-md-8.col-12
        p La organización en cabeza del Grupo de Gestión Ambiental o el Gestor Ambiental debe asegurarse que las empresas prestadoras del servicio de aprovechamiento, almacenamiento, acopio, tratamiento y/o disposición final de residuos sólidos peligrosos y no peligrosos, cuenten con las respectivas licencias o permisos expedidos por la autoridad ambiental para realizar estas labores; así mismo, de solicitar a terceros, los documentos donde se verifique esta situación, junto con los certificados sobre la disposición adecuada de los residuos que la organización entrega.
        .cajon.color-secundario.p-4.mb-4
          p En el certificado que se solicite a la organización que preste el servicio debe quedar claramente establecida la cantidad de residuos entregados para su respectivo manejo.
      .col-lg-5.col-md-4.col-6.p-0
        img(src='@/assets/curso/tema3/img13.png')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
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
