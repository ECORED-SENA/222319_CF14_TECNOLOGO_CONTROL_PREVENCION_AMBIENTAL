<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span.text-white 2
      h1 Gestión Externa de la gestión integral de los residuos sólidos

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10.col-11.mb-4
        img(src='@/assets/curso/tema2/img01.svg')
      .col-lg-12
        p La organización deberá verificar que este manejo se realice adecuadamente y en cumplimiento de la normatividad ambiental vigente aplicable para cada caso.  Adicionalmente, debe solicitar a la empresa externa, encargada de gestionar los residuos peligrosos, una copia de las autorizaciones (permisos y licencias) otorgadas por la autoridad ambiental competente para el desarrollo de estas actividades.

    .row.BG04.p-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0  
            p <b>La gestión externa</b> tiene que ver con la recolección y transporte externo del gestor de residuos y del establecimiento de reciclaje, reutilización. Compostaje, tratamiento y/o disposición final de los residuos por parte del gestor ambiental. El manejo externo de los residuos sólidos incluye todas las actividades que se realizan cuando éstos salen de la organización. 
          .col-md-11.mb-4.mb-md-0 
            img(src='@/assets/curso/tema2/img02.png')
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0  
            p <b>Se debe identificar</b> y describir en el Manejo Integral de Residuos la información de la empresa contratada y el tipo de manejo que reciben los residuos al exterior de la organización, en qué tipo de vehículo se recolectan, con qué frecuencia se hace, entre otra información asociada a esta actividad. Todos los generadores de residuos peligrosos deben conservar, hasta por un tiempo de cinco (5) años, las certificaciones de almacenamiento, aprovechamiento, valorización, tratamiento o disposición final de sus residuos, emitidos por los respectivos receptores.
          .col-md-11.mb-4.mb-md-0 
            img(src='@/assets/curso/tema2/img03.png')
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0  
            p <b>Hay que recordar</b> que esta actividad se debe hacer para todos los residuos que se generen, incluyendo los peligrosos. Un ejemplo de esta actividad se presenta en la siguiente tabla 1:
          .col-md-11.mb-4.mb-md-0 
            h5 Tabla 1.
              span Modelo de registro para el manejo externo de los residuos
            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr.BG06
                    <th style="width: 80px;"> Número</th>
                    th Residuo
                    th Recolección Transporte
                    <th style="width: 70px;"> Cant Kg/mes </th>
                    th Tratamiento
                    <th style="width: 70px;"> Cant Kg/mes</th>
                    <th style="width: 130px;"> Aprovechamiento</th>
                    <th style="width: 70px;"> Cant Kg/mes</th>
                    th Disposición final
                    <th style="width: 70px;"> Cant Kg/mes</th>
                    th Certificados
                    <th style="width: 50px;"> Obs</th>
                tbody
                  tr.BG05
                    td 1
                    td Ordinario
                    td Empresas varias de Medellín ESP
                    td 
                    td No
                    td 
                    td No
                    td 1230
                    td Relleno sanitario La Pradera
                    td 
                    td Sí
                    td
                  tr
                    td 2
                    td Papel y cartón
                    td Papeles nacionales
                    td 
                    td No
                    td 
                    td Papeles nacionales
                    td 325
                    td No
                    td 
                    td Sí
                    td
                  tr.BG05
                    td 3
                    td Plásticos
                    td Plástico Berpa
                    td 
                    td No
                    td 
                    td Plástico Berpa
                    td 250
                    td No
                    td 
                    td Sí
                    td
                  tr
                    td 4  
                    td Resdiuos infecciosos
                    td ASEI Ltda
                    td 
                    td ASEI Ltda
                    td 
                    td 
                    td 10
                    td Relleno sanitario La Pradera
                    td 
                    td Sí
                    td
                  tr.BG05
                    td 5
                    td Estopas impregnadas con solventes  
                    td ASEI Ltda
                    td 
                    td ASEI Ltda
                    td 
                    td No
                    td 352
                    td Relleno sanitario La Pradera
                    td 
                    td Sí
                    td
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Transporte externo de residuos sólidos

    p.mb-5 Los vehículos que recolecten o transporten residuos infecciosos y químicos deben contar, como mínimo, con las características que, a continuación, se muestran. 
    
    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10.col-11.mb-3.BG06.p-1
        h4.text-center Equipamiento y dotación de los vehículos
      .col-lg-12
        p.text-center Los vehículos que estén al servicio del transporte de residuos, han de contar con:

    .row.justify-content-center.BG07.mb-5
      .col-lg-5.col-md-6.col-6.p-0.mb-5
        img(src='@/assets/curso/tema2/img04.png')
      .col-lg-10.col-md-11.col-12.p-4.mb-5
        img(src='@/assets/curso/tema2/img05.svg')
      .col-lg-10    
        SlyderF(columnas="col-12")
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 1
            p
              b Identificación del vehículo:
            p En los vehículos se utiliza señalización visible, indicando el tipo de residuos que transportan, especificando el nombre del municipio(s), el nombre de la empresa con dirección y teléfono. Acondicionamiento del vehículo: El transporte se realiza en vehículos cerrados, con adecuaciones necesarias para evitar el derrame o esparcimiento de residuos en vías y estacionamientos. 
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 2
            p
              b El vehículo recolector de residuos: 
            p Debe tener superficies internas lisas de bordes redondeados de forma que se facilite el aseo y estar provisto de ventilación adecuada. Dotado de un sistema de carga y descarga que no permita que se rompan los recipientes. Si es de carga manual, la altura desde el piso al punto de carga en el vehículo debe ser inferior a 1.20 m.
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 3
            p
              b Canastillas retornables: 
            p El vehículo estará dotado de canastillas retornables donde se depositan las bolsas con residuos, estos recipientes serán de material rígido e impermeable, evitando la compresión de los residuos al sobreponer bolsas. Los vehículos de recolección se lavarán y desinfectarán de manera apropiada únicamente en los lugares designados para tal fin dentro de las instalaciones del prestador del servicio especial de aseo, y el efluente proveniente del lavado y desinfección del vehículo debe ser objeto de tratamiento cumpliendo con lo establecido en el Decreto 1594 de 1984 o la norma que lo sustituya o modifique.
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 4
            p
              b Los horarios y frecuencias de recolección:  
            p Los establece el generador de acuerdo con su capacidad de almacenamiento y el volumen de generación de residuos. La frecuencia de recolección de los residuos infecciosos no podrá ser inferior a una vez semanal (7 días), debido a sus características y posible descomposición. No obstante, lo anterior, los pequeños generadores (farmacias, centros de pigmentación y/o tatuajes) podrán ampliar el tiempo de almacenamiento (en ningún caso superior a un mes), siempre y cuando no sean residuos anatomopatológicos o de animales.
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 5
            p
              b Sistemas de comunicación: 
            p Los vehículos dispondrán de sistemas de comunicación a fin de informar accidentes, daños en el vehículo que impidan su marcha y sea posible su desvare inmediato y deben estar provistos de drenaje con tapa hermética, la cual solo debe abrirse para el respectivo lavado interior del carro. 
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 6
            p
              b El manifiesto de transporte de residuos peligrosos:  
            p Es un documento donde se relacionan: tipo y cantidad de residuos transportados, nombre del generador, destino, fecha del transporte, firma de quien entrega, nombre del conductor, placa del vehículo, etc. Una copia del documento queda en poder del generador y el original en poder del prestador del servicio. Los manifiestos de residuos peligrosos serán implementados por las empresas prestadoras del servicio público especial de aseo. ¡Se prohíbe mezclar residuos peligrosos con no peligrosos; sólo se recogerán los residuos debidamente empacados, identificados y relacionados en el manifiesto de Transporte.
          .tarjeta-numerada.color-acento-botones.py-4.px-5
            .tarjeta-numerada__numero
              .h2 7
            p
              b Los vehículos destinados a la recolección de residuos hospitalarios y similares: 
            p Además de las anteriores características, cumplirán con lo establecido en la Resolución 2309 de 1986 y las normas vigentes. Siempre que los residuos lleguen a la instalación del prestador del servicio especial de aseo, deben pesarse y verificarse las condiciones de empaque en las cuales fueron entregadas por cada uno de los generadores, consignando estos datos, como también fecha, hora, y razón social del generador en el formulario RHPS si recoge residuos hospitalarios y similares. Las operaciones diarias serán consolidadas de manera mensual y cada seis meses el prestador del servicio público especial de aseo debe enviar el reporte consolidado mensual a la autoridad ambiental, conjuntamente con el informe de implementación del Plan de Gestión Integral de Residuos.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Empresas gestoras de los residuos sólidos

    p.mb-5 Se debe realizar seguimiento a las empresas gestoras para verificar su cumplimiento ambiental. Analizar la siguiente tabla 2 para que se identifiquen los elementos de tal seguimiento.

    .row.justify-content-center
      .col-lg-6.col-md-8.col-10
        img(src='@/assets/curso/tema2/img06.png')
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
          img(src='@/assets/curso/tema2/img08.png')

    .row.BG08.align-items-center
      .col-lg-12.mb-5
        p En este proceso de seguimiento a las empresas gestoras de los residuos es muy IMPORTANTE:
      .col-lg-4
        img(src='@/assets/curso/tema2/img09.png')
      .col-lg-8
        ul.lista-ul.mb-2
          li
            i.fas.fa-check 
            | Es indispensable tener los documentos de: licencia ambiental, permisos, cámara de comercio o documentos que garanticen que son los encargados de manejar ese tipo de residuo.
          li
            i.fas.fa-check 
            | Identificar que estos documentos estén al día y vigentes.
          li
            i.fas.fa-check 
            | Qué el gestor ambiental garantice la trazabilidad de los residuos en los certificados entregados, si el gestor ambiental es diferente al transportista de los residuos se debe garantizar en los documentos los nombres de las organizaciones involucradas y las cantidades entregadas para que pueda tener una trazabilidad de la empresa generadora, el transportista y los gestores ambientales hasta su reciclaje, tratamiento y/o disposición final.
          li
            i.fas.fa-check 
            | Velar que estén los registros con los datos que son cantidades exactas a las entregadas, fechas, garantizar la trazabilidad.
          li
            i.fas.fa-check 
            | Si el algún caso de los certificados entregados cuando tenemos varios gestores las cantidades disminuye porque hubo perdidas del residuo por ser no aprovechables como pasa en el despiece de RAEES, garantizar que la sumatoria de los certificados entregados del gestor ambiental sean exactas a las entregadas así algunos materiales se pesen para reciclar y otros para disposición final debo garantizar las cantidades entregadas a las cantidades de salida por el gestor ambiental.
          li
            i.fas.fa-check 
            | Sin el certificado del gestor no le es posible entregar la cantidad exacta de lo que le entregó porque maneja residuos de varios generadores y entrega un certificado de cantidades grandes por ser el total de lo recogido de varias empresas; se debe solicitar que entregue el detallado, no sirve uno general porque no se identifica la trazabilidad o que apodere un documento adicional que garantice lo que se le entregó y sea válido para la autoridad ambiental.

          

</template>

<script>
export default {
  name: 'Tema2',
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
