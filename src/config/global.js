export default {
  global: {
    componenteFormativo:
      'Caracterización del territorio para propuestas agroecológicas',
    descripcionCurso:
      'En este componente formativo se abordan temáticas relacionadas con las propuestas comunitarias participativas desde un enfoque agroecológico, las cuales, desde métodos y técnicas como la investigación y acción participativa, permiten conocer de forma interdisciplinaria el territorio, es decir usos, relaciones humanas, ambientales, conocimientos tradicionales, actores y hábitos de consumo; para así lograr el tratamiento de la información documental para generar desarrollo social desde una visión socioambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        titulo: 'Metodologías participativas para desarrollo comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métodos y Técnicas para el análisis',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos y formas de organización en comunidades',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características de actores comunitarios',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Conceptos y normativa del enfoque diferencial y género',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Usos del suelo y contexto histórico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características biofísicas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Revisión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fuentes de información de sistemas agroecológicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Uso de fuentes y análisis de la información',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conocimiento tradicional y actores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Tipos, necesidades e intereses de los actores conceptos y generalidades',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Hábitos y costumbres alimenticias',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Participación ciudadana',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      tema: 'Metodologías participativas para desarrollo comunitario',
      referencia:
        'López, M., Alberich, T., Aviñó, D., García, F., Ruiz, A., y Villasante, T. (2018). Herramientas y métodos participativos para la acción comunitaria. Informe SESPAS 2018. Gaceta Sanitaria, 32, 32-40.',
      tipo: 'Artículo',
      link:
        'https://www.sciencedirect.com/science/article/pii/S0213911118301614',
    },
    {
      tema: 'Metodologías participativas para desarrollo comunitario',
      referencia:
        'IFC (2007). Relaciones con la comunidad y otros actores sociales: Manual de prácticas recomendadas para las empresas que hacen negocios en mercados emergentes.',
      tipo: 'Cartilla',
      link:
        'https://www.ifc.org/wps/wcm/connect/eeb4bf63-90b7-43c5-9b45-41b30b6955f4/IFC_StakeholderEngagement_Spanish.pdf?MOD=AJPERES&CVID=jqetHux',
    },
    {
      tema: 'Metodologías participativas para desarrollo comunitario',
      referencia: 'MinTrabajo. (s.f.). El ABC del enfoque diferencial.',
      tipo: 'Cartilla',
      link:
        'https://www.ssf.gov.co/documents/20127/479441/CARTILLA+ENFOQUE+DIFERENCIAL.pdf/84503f8e-3a4b-729e-39c6-78b301360712',
    },
    {
      tema: 'Territorio',
      referencia:
        'Hernández, J. R. V. (2017). El Territorio como una Construcción Cultural: Entre realidades y significaciones. REICE: Revista Electrónica de Investigación en Ciencias Económicas. 5 (9), 51-64.',
      tipo: 'Artículo',
      link: 'https://www.camjol.info/index.php/REICE/article/view/4362',
    },
    {
      tema: 'Conocimientos tradicionales y actores',
      referencia:
        'FAO. (2018). Los 10 elementos de la agroecología. Guía para la transición hacia sistemas alimentarios y agrícolas sostenibles.',
      tipo: 'Cartilla',
      link: 'https://www.fao.org/3/i9037es/i9037es.pdf ',
    },
    {
      tema: 'Conocimientos tradicionales y actores',
      referencia:
        'Lillo-Crespo, M., & Vizcaya-Moreno, M. F. (2002). Origen y desarrollo de los hábitos y costumbres alimentarias como recurso sociocultural del ser humano: una aproximación a la historia y antropología de los cuidados en la alimentación. Cultura de los cuidados, Año VI, n. 11 (1. semestre 2003); pp. 61-65.',
      tipo: 'Artículo',
      link: 'https://rua.ua.es/dspace/bitstream/10045/4892/1/CC_11_11.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actor',
      significado:
        'Personas, grupos u organizaciones que intervienen de manera activa en los procesos políticos, culturales y de desarrollo de una comunidad o país.',
    },
    {
      termino: 'Desarrollo comunitario',
      significado:
        'Capacidades referidas a máximos niveles de igualdad y libertad que produzca bienestar a un grupo poblacional, a partir de la oportunidad de escoger entre distintas opciones de desarrollo.',
    },
    {
      termino: 'Diversidad',
      significado: 'Respeto y apreciación verdaderos de la diferencia.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'Adopción de una serie de medidas encaminadas a enfrentar la situación de vulnerabilidad acentuada de algunas víctimas debido a su edad, género, orientación sexual y situación de discapacidad.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'Recurso que responda a una demanda de información por parte de los usuarios, incluyendo productos y servicios de información, personas, programas de computadora, etc.',
    },
    {
      termino: 'Metodologías participativas',
      significado:
        'Métodos y enfoques que contribuyen a que los habitantes de una comunidad generen procesos de cambio social a través de la participación activa desde lo local.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Proceso de involucramiento de los actores de manera activa en las diferentes fases de un proyecto, permitiendo un trabajo democrático y sustentable.',
    },
    {
      termino: 'Territorio',
      significado:
        'es el espacio físico ocupado por una población en el que se llevan a cabo relaciones sociales que establecen los seres humanos en los ámbitos cultural, social, político y económico. ',
    },
    {
      termino: 'Uso del suelo',
      significado:
        'manera en que una superficie física del territorio es tomada en función de su capacidad agroecológica y utilidad para el desarrollo humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bozzano, R., Carut, B., Barbetti, C., Cirio, W., y Arrivillaga, N. (2008). Usos del suelo y lugares: Criterios teórico-metodológicos. Revista Universitaria de Geografía.',
      link: '',
    },
    {
      referencia:
        'Calle, A., Vara, I., y Cuéllar, M. (2006). Soberanía alimentaria. La  transición social agroecológica. Icaria.',
      link: '',
    },
    {
      referencia:
        'Figueroa, I., y Franco, N. (2020). El marco jurídico del enfoque diferencial en políticas públicas para mujeres indígenas en Colombia. Estudios Políticos. 57, 71-90.',
      link: '',
    },
    {
      referencia:
        'Gurtler, G., Bain, C., y Shikiya, H. (2010). Glosario de términos para el fortalecimiento de capacidades en procesos estratégicos.  Centro Regional Ecuménicos de Asesoría y Servicio.',
      link: '',
    },
    {
      referencia:
        'Lugo, R., Ramírez, J., Navarro, H., y Estrella, N. (2008). Etnocompetitividad del sistema artesanal textil Mitla, el papel del territorio y la innovación. Economía, sociedad y territorio, 8(28), 981-1006.',
      link: '',
    },
    {
      referencia:
        'Madrid, A., y Ortiz, L. (2005). Análisis y síntesis en cartografía: Algunos procedimientos. Geografía.',
      link: '',
    },
    {
      referencia:
        'Merino, M. (1997). La participación ciudadana en la democracia (Vol. 4). Instituto Federal Electoral México.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Interior. (2015). El enfoque diferencial y étnico en la política de víctimas del conflicto armado. Ministerio del Interior.',
      link:
        'https://gapv.mininterior.gov.co/sites/default/files/cartilla_enfoque_diferencial_fin_1.pdf ',
    },
    {
      referencia:
        'Pírez, P. (1995). Actores sociales y gestión de la ciudad. Revista Ciudades, 28, 8-14.',
      link: '',
    },
    {
      referencia:
        'Ramírez, B. y López, L. (2015). Espacio, paisaje, región, territorio y lugar: La diversidad en el pensamiento contemporáneo.',
      link: '',
    },
    {
      referencia:
        'Saquet, M. (2017). Territorio, clase social y lugar: Premisas fundamentales del desarrollo territorial de base local, ecológica y cultural. Arquetipo, 15, 39-70.',
      link: '',
    },
    {
      referencia:
        'Soberón, U., y Acosta, Z. (2009). Fuentes de información para la recolección de información cuantitativa y cualitativa. Universidad Nacional San Luis Gonzaga de Ica.',
      link: '',
    },
    {
      referencia:
        'Soliz, F., y  Maldonado, A. (2012). Guía de metodologías comunitarias participativas. Clínica Ambiental, Save the Children y Agencia Española de Cooperación Internacional al Desarrollo (AECID)',
      link:
        'https://repositorio.uasb.edu.ec/bitstream/10644/3997/1/Soliz,%20F-CON008-Guia5.pdf',
    },
    {
      referencia:
        'Suarez, M., Urdaneta, F., y Jaimes, E. (2019). Desarrollo de sistemas de producción agroecológica: Dimensiones e indicadores para su estudio. Revista de ciencias sociales, 25(3), 172-185.',
      link: '',
    },
    {
      referencia:
        'Tavares, R. y Fitch, J. (2019). Planejamento comunitário em bairros socialmente vulneráveis. Identificação dos atores sociais em uma comunidade. Revista de Arquitectura, 21(2), 22-32.',
      link: '',
    },
    {
      referencia:
        'UNAM. (2018). Revista de Investigación Agraria y Ambiental. 9;2.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Tatiana Villamil',
        cargo: 'Responsable del equipo',
        centro: 'Dirección General',
      },
      {
        nombre: 'Miguel de Jesús Paredes Maestre',
        cargo: 'Responsable de línea de producción',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Yisela Andrea Vidales Vásquez',
        cargo: 'Experta temática',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación de diseño',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseñador de contenidos digitales',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
      {
        nombre: 'Álvaro Guillermo Araújo Angarita',
        cargo: 'Desarrollo Fullstack',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Evaluación de contenidos inclusivos y accesibles',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
      {
        nombre: 'Luz Karime Amaya Cabra',
        cargo: 'Evaluador para contenidos inclusivos y accesibles',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
      {
        nombre: 'Juan Carlos Cardona Acosta',
        cargo: 'Validación de recursos digitales ',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
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
