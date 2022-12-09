<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión Externa de la gestión integral de los residuos sólidos

    p.mb-3 La organización deberá verificar que este manejo se realice adecuadamente y en cumplimiento de la normatividad ambiental vigente aplicable para cada caso.  Adicionalmente, debe solicitar a la empresa externa, encargada de gestionar los residuos peligrosos, una copia de las autorizaciones (permisos y licencias) otorgadas por la autoridad ambiental competente para el desarrollo de estas actividades.

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        .jumbotron-4.p-5.h-100
          p.mb-3 <b>La gestión externa</b> tiene que ver con la recolección y transporte externo del gestor de residuos y del establecimiento de reciclaje, reutilización. Compostaje, tratamiento y/o disposición final de los residuos por parte del gestor ambiental. El manejo externo de los residuos sólidos incluye todas las actividades que se realizan cuando éstos salen de la organización. 

      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_1.png').mb-3

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_2.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Se debe identificar y describir en el Manejo Integral de Residuos la información de la empresa contratada y el tipo de manejo que reciben los residuos al exterior de la organización, en qué tipo de vehículo se recolectan, con qué frecuencia se hace, entre otra información asociada a esta actividad. Todos los generadores de residuos peligrosos deben conservar, hasta por un tiempo de cinco (5) años, las certificaciones de almacenamiento, aprovechamiento, valorización, tratamiento o disposición final de sus residuos, emitidos por los respectivos receptores

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0 Se debe identificar y describir en el Manejo Integral de Residuos la información de la empresa contratada y el tipo de manejo que reciben los residuos al exterior de la organización, en qué tipo de vehículo se recolectan, con qué frecuencia se hace, entre otra información asociada a esta actividad. Todos los generadores de residuos peligrosos deben conservar, hasta por un tiempo de cinco (5) años, las certificaciones de almacenamiento, aprovechamiento, valorización, tratamiento o disposición final de sus residuos, emitidos por los respectivos receptores
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema2/img_2.png' alt='', style="width:400px; display:block; margin:-2rem -0rem ;").mb-3

    p.mb-3 Hay que recordar que esta actividad se debe hacer para todos los residuos que se generen, incluyendo los peligrosos. Un ejemplo de esta actividad se presenta en la siguiente tabla 1:


    .row.justify-content-center.align-items-center.mb-0
      .col-12
        .tabla-a.color-acento-botones.mb-5
          table(style="min-width:1212px;").tg
            tbody
              tr.th-2
                td.text-center.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Número</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(width='120px')
                  span(style='background-color:#D9D9D9')                   
                  span(style='color:black') <b>Residuo</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(width='120px')
                  span(style='background-color:#D9D9D9')                   
                  span(style='color:black') <b>Recolección Transporte</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')            
                  span(style='color:black') <b>Cant<br>Kg/mes</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(width='120px')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Tratamiento</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Cant<br>Kg/mes</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(width='150px')
                  span(style='background-color:#D9D9D9')                   
                  span(style='color:black') <b>Aprovechamiento</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                   
                  span(style='color:black') <b>Cant<br>Kg/mes</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(width='120px')
                  span(style='background-color:#D9D9D9')            
                  span(style='color:black') <b>Disposición<br>final</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Cant<br>Kg/mes</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(width='120px')
                  span(style='background-color:#D9D9D9')            
                  span(style='color:black') <b>Certificados</b>
                  span(style='background-color:#D9D9D9') 
                td.text-center.tg-0lax(rowspan='2')
                  span(style='background-color:#D9D9D9')                  
                  span(style='color:black') <b>Obs</b>
                  span(style='background-color:#D9D9D9') 
            tr.th-4.text-center 
              td.tg-0lax
                br
                p.text-center 1
                p.mb-0.text-center 
              td.tg-0lax.text-center   Ordinario               
              td.tg-0lax.text-center  Empresas varias de Medellín ESP                
              td.tg-0lax                  
              td.tg-0lax.text-center   No                 
              td.tg-0lax  
                p.mb-0.text-center 
              td.tg-0lax.text-center   No     
                p.mb-0.text-center 
              td.tg-0lax.text-center 1230
                p.mb-0.text-center 
              td.tg-0lax.text-center 1230
                p.mb-0.text-center  Relleno sanitario La Pradera
              td.tg-0lax.text-center     
                p.mb-0.text-center 
              td.tg-0lax.text-center Si
                p.mb-0.text-center 
              td.tg-0lax.text-center
                p.mb-0.text-center  
              tr.th-4.text-center 
                td.tg-0lax
                  br
                  p.text-center 2
                td.tg-0lax Papel y cartón
                  p.mb-0.text-center 
                td.tg-0lax   Papeles nacionales               
                td.tg-0lax                  
                td.tg-0lax     No             
                td.tg-0lax                  
                td.tg-0lax  Papeles nacionales
                  p.mb-0.text-center 
                td.tg-0lax 325
                  p.mb-0.text-center 
                td.tg-0lax No
                  p.mb-0.text-center 
                td.tg-0lax 
                  p.mb-0.text-center 
                td.tg-0lax Si 
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
              tr.th-4
                td.tg-0lax
                  br
                  p.text-center 3
                td.tg-0lax.text-center Plástico
                  p.mb-0.text-center 
                td.tg-0lax.text-center  Plástico Berpa                
                td.tg-0lax                  
                td.tg-0lax.text-center No                  
                td.tg-0lax                  
                td.tg-0lax.text-center Plástico Berpa
                  p.mb-0.text-center 
                td.tg-0lax.text-center 250
                  p.mb-0.text-center 
                td.tg-0lax.text-center No 
                  p.mb-0.text-center 
                td.tg-0lax.text-center 
                  p.mb-0.text-center 
                td.tg-0lax.text-center Si
                  p.mb-0.text-center 
                td.tg-0lax.text-center 
                  p.mb-0.text-center 
              tr.th-4
                td.tg-0lax
                  br
                  p.text-center 4
                td.tg-0lax.text-center Residuos infecciosos
                  p.mb-0.text-center 
                td.tg-0lax.text-center ASEI Ltda                  
                td.tg-0lax                  
                td.tg-0lax.text-center ASEI Ltda                  
                td.tg-0lax                  
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax.text-center 10
                  p.mb-0.text-center 
                td.tg-0lax.text-center Relleno sanitario La Pradera
                  p.mb-0.text-center 
                td.tg-0lax
                  p.mb-0.text-center 
                td.tg-0lax.text-center Si
                  p.mb-0.text-center 
                td.tg-0lax.text-center
                  p.mb-0.text-center 
              tr.th-4
                td.tg-0lax
                  br
                  p.text-center 5
                td.tg-0lax.text-center Estopas impregnadas con solventes
                  p.mb-0.text-center 
                td.tg-0lax.text-center ASEI Ltda                 
                td.tg-0lax                  
                td.tg-0lax.text-center ASEI Ltda                  
                td.tg-0lax                  
                td.tg-0lax.text-center No
                  p.mb-0.text-center 
                td.tg-0lax.text-center 352
                  p.mb-0.text-center 
                td.tg-0lax.text-center Relleno sanitario La Pradera
                  p.mb-0.text-center 
                td.tg-0lax.text-center
                  p.mb-0.text-center 
                td.tg-0lax.text-center Si
                  p.mb-0.text-center 
                td.tg-0lax.text-center 
                  p.mb-0.text-center 

    .row
      .col-lg-12
        .jumbotron-3.p-2
          p.mb-0 Nota. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p. 18)



    Separador

    #t_2_1.titulo-segundo
      .h2 2.1  Transporte externo de residuos sólidos

    p.mb-3 FALTA INFORMACION EN EL XD 

    p.mb-3 Se debe realizar seguimiento a las empresas gestoras para verificar su cumplimiento ambiental. Analizar la siguiente tabla 2 para que se identifiquen los elementos de tal seguimiento.

    .row.justify-content-center.align-items-center.mb-0
      .col-10
        .jumbotron-3
          .tabla-a.color-acento-contenido.mb-5
            .tabla-b__header
              h4.mb-0(style='color:black') Auditoria interna
            table(style="min-width:1000px;")
              tr
                td Realizar inspecciones de control al interior de la organización con el fin de verificar el adecuado manejo de los residuos peligrosos, las medidas de seguridad y el control de los registros, entre otros.
            .tabla-b__header
              h4.mb-0(style='color:black') Fecha de la auditoria interna
            table(style="min-width:1000px;")
              tr
                td Fecha: ______________________________________________________________________________________ Hora: _____________________________
            .tabla-b__header
              h4.mb-0(style='color:black') Datos de quien realiza la auditoria
            table(style="min-width:1000px;")
              tr
                td 
                  p.mb-3 Nombre: ______________________________________________________________________________________________________________________________
                  p.mb-3 Cargo: ______________________________________________________________________________________________________________________________
                  p.mb-3 Tipo Documento de identidad: __________________________________ No. Documento de identidad: ________________________________
                  p.mb-0 Firma: _______________________________________________________________________________________________________________________________
            .tabla-b__header
              h4.mb-0(style='color:black') Gestión Interna
            table(style="min-width:1000px;")
              tr
                td 
                  p A continuación se presenta una lista de chequeo general para la verificación de la gestión interna
              tr
                td 
                  p Aspecto &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp   Cumple  &nbsp &nbsp &nbsp   No. Cumple
              tr 
                td 
                  p Capacitaciones periódicas a todo el personal de la organización en matería de RESPEL.

              tr 
                td 
                  p El plan RESPEL esta a disposición para la consulta por parte de todo el personal de la organización.

              tr 
                td 
                  p Estrategias y acciones de minimización documentadas.

              tr 
                td 
                  p Estrategias y acciones de minimización implementadas

              tr 
                td 
                  p Inventario de sustancias químicas documentado y actualizado

              tr 
                td 
                  p Se actualiza los registros para sacar los indicadores.

              tr 
                td 
                  p Inventario de RESPEL documentado y actualizado

              tr 
                td 
                  p Todo los RESPEL clasificados de acuerdo al código de las corrientes y A de los Anexos I Y ii DEL DECRETO 4741 DE 2005

              tr 
                td 
                  p Hay recipientes suficientes para la separación de RESPEL

              tr 
                td 
                  p Todos los RESPEL están debidamente etiquetados

              tr 
                td 
                  p El sitio de almacenamiento de RESPEL cumple con las condiciones expuestas en la guía.

              tr 
                td 
                  p El sitio de almacenamiento de sustancias químicas cumple con las condiciones expuestas en la guía

              tr 
                td 
                  p Se cuenta con implemento de seguridad para la manipulación RESPEL y sustancias químicas.

              tr 
                td 
                  p El plan de contigencia esta documentado y disponible para la consulta de todos los empleados

              tr 
                td 
                  p Las estrategias planteadas en el Plan, se desarrollan de acuerdo a la programación del cronograma.

              tr 
                td 
                  p Se declaran los RESPEL ante la Autoridad Ambiental en el Registro de  Generadores.
        .row.mb-5
          .col-lg-12
            .jumbotron-3.p-2
              p.mb-0 Nota. Área metropolitana Valle de Aburra (2013).

      
        p.mb-5 En este proceso de seguimiento a las empresas gestoras de los residuos es muy IMPORTANTE:


    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in-down")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="1")
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/img_2_1.svg",  alt='', style="width:160px; display:block; margin:auto 0 ;").mb-3
          .col-md-6.lg-6
            p <b>Es indispensable tener los documentos de: </b> licencia ambiental, permisos, cámara de comercio o documentos que garanticen que son los encargados de manejar ese tipo de residuo.
            
        .row.justify-content-center.align-items-center(titulo="2")
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/img_3.svg",  alt='', style="width:160px; display:block; margin:auto 0 ;")
          .col-md-6.lg-6
            p <b>Identificar que estos documentos estén al día y vigentes.</b>
                  
        .row.justify-content-center.align-items-center(titulo="3")
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/img_4.svg",  alt='', style="width:160px; display:block; margin:auto 0 ;")
          .col-md-6.lg-6
            p Qué el gestor ambiental garantice la trazabilidad de los residuos en los certificados entregados, si el gestor ambiental es diferente al transportista de los residuos se debe garantizar en los documentos los nombres de las organizaciones involucradas y las cantidades entregadas para que pueda tener una trazabilidad de la empresa generadora, el transportista y los gestores ambientales hasta su reciclaje, tratamiento y/o disposición final.

        .row.justify-content-center.align-items-center(titulo="4")
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/img_5.svg",  alt='', style="width:160px; display:block; margin:auto 0 ;")
          .col-md-6.lg-6
            p <b>Velar que estén los registros con los datos que son cantidades exactas</b> a las entregadas, fechas, garantizar la trazabilidad.

        .row.justify-content-center.align-items-center(titulo="5")
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/img_6.svg",  alt='', style="width:160px; display:block; margin:auto 0 ;")
          .col-md-6.lg-6
            p <b>Si el algún caso de los certificados entregados cuando tenemos varios gestores las cantidades disminuye porque hubo perdidas del residuo por ser no aprovechables como pasa en el despiece de RAEES,</b> garantizar que la sumatoria de los certificados entregados del gestor ambiental sean exactas a las entregadas así algunos materiales se pesen para reciclar y otros para disposición final debo garantizar las cantidades entregadas a las cantidades de salida por el gestor ambiental.
                  
        .row.justify-content-center.align-items-center(titulo="6")
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/img_7.svg",  alt='', style="width:160px; display:block; margin:auto 0 ;")

          .col-md-6.lg-6
            p <b>Sin el certificado del gestor no le es posible entregar la cantidad exacta de lo que le entregó porque maneja residuos de varios generadores y entrega un certificado de cantidades grandes por ser el total de lo recogido de varias empresas;</b> se debe solicitar que entregue el detallado, no sirve uno general porque no se identifica la trazabilidad o que apodere un documento adicional que garantice lo que se le entregó y sea válido para la autoridad ambiental.
          
     




















































































































































</template>

<script>
export default {
  name: 'Tema2',
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
