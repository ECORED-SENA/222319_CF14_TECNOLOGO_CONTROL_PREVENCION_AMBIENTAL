export default {
  global: {
    componenteFormativo:
      'Gestionar integralmente el manejo de residuos, según normativa vigente.',
    descripcionCurso:
      'En este componente formativo, partiendo de una base teórica-conceptual se realizará la explicación de la gestión externa en la empresa con relación al plan de gestión integral de residuos y el monitoreo de la gestión integral de residuos, necesarios en los procesos de mejora continua de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos Generales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Gestión Externa de la gestión integral de los residuos sólidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Transporte externo de residuos sólidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Empresas gestoras de los residuos sólidos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Monitoreo de la gestión integral de los residuos sólidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elaboración de un plan de seguimiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Indicadores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Hoja de vida del indicador',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Solicitud de certificados',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto: 'Gómez, P. (2017). Plan de negocio de empresa de reciclaje',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=T1TZ2OpdC1w',
    },
    {
      texto: 'Lito S.A.S. (2014).  Video Institucional Lito SAS',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=J0AIEDkUVlk',
    },
    {
      texto:
        'Transporte residuos peligrosos soluciones de saneamiento ambiental. (2013). Transporte residuos peligrosos',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=PjUOEpTLbBg',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento y/o valorización',
      significado:
        '“Es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración”. (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2015).',
    },
    {
      termino: 'Disposición final',
      significado:
        '“Es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2015).',
    },
    {
      termino: 'Gestión Interna de residuos',
      significado:
        '“Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización. 1) Dotación de contenedores donde depositar los residuos. 2) Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje. 3) Transporte de los residuos al almacén central de residuos sanitarios del centro.”  (Área de salud de Cáceres, 2015).',
    },
    {
      termino: 'Gestión Externa de residuos',
      significado:
        '“Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 4) Recogida y transporte a Plantas de Transferencia o Tratamiento. 5) Tratamiento y eliminación. Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.”  (Área de salud de Cáceres, 2015).',
    },
    {
      termino: 'Indicador',
      significado:
        '“Un indicador es una comparación entre dos o más tipos de datos que sirve para elaborar una medida cuantitativa o una observación cualitativa. Esta comparación arroja un valor, una magnitud o un criterio, que tiene significado para quien lo analiza.” (OIT, 2011).',
    },
    {
      termino: 'Manejo integral de residuos',
      significado:
        '“Es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.” (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Residuo sólido o desecho',
      significado:
        '“Es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        '“Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización. 1) Dotación de contenedores donde depositar los residuos. 2) Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje. 3) Transporte de los residuos al almacén central de residuos sanitarios del centro.”  (Área de salud de Cáceres, 2015).',
    },
    {
      termino: 'Residuos Especiales',
      significado:
        '“Son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles.” (Área metropolitana del Valle de Aburrá, 2016).',
    },
    {
      termino: 'Reciclaje',
      significado:
        '“Es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Reutilización',
      significado:
        '“Es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002).',
    },
  ],
  referencias: [
    {
      referencia:
        'Área de Salud de Cáceres. (2015). Manual de gestión interna y externa de residuos.',
      link: 'https://www.areasaludcaceres.es/docs/files/1195img.pdf',
    },
    {
      referencia:
        'Área metropolitana del Valle de Aburrá (2016). Manual para el manejo integral de residuos sólidos en el Valle de Aburrá.',
      link: 'https://asei.com.co/files/28_08_2013_02_43_59__upload.pdf',
    },
    {
      referencia:
        'Área Metropolitana Valle de Aburrá. (2013). Plan de gestión integral de desechos o residuos peligrosos.',
      link:
        'https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/FORMATOS%20GUIA%20RESPEL.pdf ',
    },
    {
      referencia: 'Creos Ltda (2016) Indicadores tablas unificadas de mando.',
      link: 'https://www.creosltda.com/creos2/index.php/sogc/indicadores.html',
    },
    {
      referencia:
        'Decreto 1713 de 2002. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos". Agosto 6 de 2002.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2002decreto1713.pdf',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se expide el Decreto Único Reglamentario del sector Ambiente y Desarrollo Sostenible. Mayo 26 de 2015.',
      link:
        'http://www.ideam.gov.co/documents/11769/46844622/Dec+1076_2015.pdf/8c28b13e-0937-42bd-b4a2-4b99114f9362',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2010). Indicadores de gestión.',
      link: 'https://es.slideshare.net/albacora_48/indicadores-de-gestion-mme',
    },
    {
      referencia: 'OIT. (2011) ¿Qué son y cómo se construyen los indicadores?',
      link:
        '? https://guia.oitcinterfor.org/como-evaluar/como-se-construyen-indicadores',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana. (2011). Guía para la gestión de residuos peligrosos.',
      link:
        'https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/GUIA_RESPEL.pdf',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana y Área Metropolitana del Valle de Aburrá. (2008). Guía para el manejo integral de residuos.',
      link:
        'https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
