import { dxTreeViewItem } from 'devextreme/ui/tree_view';

export const Reports: dxTreeViewItem[] = [
  {
    text: 'POZOS',
    expanded: true,
    items: [
      {
        text: 'Pozo CPE-2 EST1',
        expanded: true,
        items: [
          { text: 'Planeación', selected: true },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo CPE-2 EST2',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo CPE-2 EST3',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo CPE-2 EST1 ST1',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo CPE-2 EST2 ST2',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo CPE-2 EST4',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo CPE-2 EST5',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      },
      {
        text: 'Pozo MOCHIMA',
        items: [
          { text: 'Planeación' },
          { text: 'Perforación' },
          { text: 'Formas Operacionales' },
          { text: 'Registros' },
          { text: 'Producción' },
          { text: 'Otros Estudios' }
        ]
      }
    ]
  },
  {
    text: 'SÍSMICA',
    expanded: false,
    items: [
      { text: '2D', items: [{ text: 'Adquisición' }, { text: 'Procesacimiento' }, { text: 'Interpretación' }] },
      { text: '3D', items: [{ text: 'Adquisición' }, { text: 'Procesacimiento' }, { text: 'Interpretación' }] }
    ]
  },
  {
    text: 'OTROS INFORMES DEL CONTRATO',
    expanded: false,
    items: [
      { text: 'Informe Tecnico Anual ITA' },
      { text: 'Informe Semestral Unificado ISAU' },
      { text: 'Informe PLEX' },
      { text: 'Informe PTE' },
      { text: 'Informe PAO' },
      { text: 'Informes PD' },
      { text: 'Otros Informes Técnicos del Contrato' }
    ]
  },
  {
    text: 'FORMAS DE OPERACIÓN',
    items: [
      { text: 'Forma 4CR' },
      { text: 'Forma 5CR' },
      { text: 'Forma 6CR' },
      { text: 'Forma 7CR' },
      { text: 'Forma 8CR' },
      { text: 'Forma 10CR' },
      { text: 'Forma 10ACR' }
    ]
  },
  {
    text: 'FORMAS DE PRODUCCIÓN',
    items: [
      { text: 'Forma Cuadro 1' },
      { text: 'Forma Cuadro 4' },
      { text: 'Forma Cuadro 7' },
      { text: 'Forma 9' },
      { text: 'Forma 11' },
      { text: 'Forma 12' },
      { text: 'Forma 13' },
      { text: 'Forma 14' },
      { text: 'Forma 15' },
      { text: 'Forma 16' },
      { text: 'Forma 17' },
      { text: 'Forma 20' },
      { text: 'Forma 21' },
      { text: 'Forma 22' },
      { text: 'Forma 23' },
      { text: 'Forma 25' },
      { text: 'Forma 30' },
      { text: 'Forma 31' }
    ]
  }
];

export const FilesReport = [
  {
    REPORTE: '4.1. PLANEACIÓN',
    DOCUMENTO: 'FORMA 4CR - INTENCIÓN DE PERFORAR',
    ESTADO: 'OK',
    OBSERVACIONES: '',
    CODIGO: 'EPIS318-1509'
  },
  {
    REPORTE: '4.1. PLANEACIÓN',
    DOCUMENTO: 'PROGNOSIS GEOLÓGICA',
    ESTADO: 'PENDIENTE',
    OBSERVACIONES: '',
    CODIGO: 'EPIS318-1409'
  },
  {
    REPORTE: '4.1. PLANEACIÓN',
    DOCUMENTO: 'POSTER DEL POZO',
    ESTADO: 'DESACTIVADO',
    OBSERVACIONES: '',
    CODIGO: 'EPIS318-1409'
  },
  {
    REPORTE: '4.2.1. INFORMES PARCIALES DE PERFORACIÓN',
    DOCUMENTO: 'INFORME QUINCENAL DE PERFORACIÓN - FORMA 5CR',
    ESTADO: 'OK',
    OBSERVACIONES: 'INFORME QUINCENAL DE PERFORACIÓN - FORMA 5CR APROBADO MME',
    CODIGO: 'EPIS319-1782'
  },
  {
    REPORTE: '4.2.1. INFORMES PARCIALES DE PERFORACIÓN',
    DOCUMENTO: 'INFORME DIARIO DE PERFORACIÓN (GEOLOGÍA E INGENIERIA)',
    ESTADO: 'OK',
    OBSERVACIONES: '',
    CODIGO: 'EPIS319-1529 / EPIS319-2211'
  }
];

export const Tasks = [
  {
    id: 1,
    parentId: 0,
    title: '4.1. PLANEACIÓN',
    progress: 66
  },
  {
    id: 2,
    parentId: 1,
    title: 'FORMA 4CR - INTENCIÓN DE PERFORAR',
    start: new Date('2020-01-01'),
    end: new Date('2020-01-10'),
    progress: 100
  },
  {
    id: 3,
    parentId: 1,
    title: 'PROGNOSIS GEOLÓGICA',
    start: new Date('2020-01-10'),
    end: new Date('2020-01-25'),
    progress: 0
  },
  {
    id: 4,
    parentId: 1,
    title: 'POSTER DEL POZO',
    start: new Date('2020-01-21'),
    end: new Date('2020-02-15'),
    progress: 100
  },
  {
    id: 5,
    parentId: 0,
    title: '4.2.1. INFORMES PARCIALES DE PERFORACIÓN',
    progress: 100
  },
  {
    id: 6,
    parentId: 5,
    title: 'INFORME QUINCENAL DE PERFORACIÓN - FORMA 5CR',
    start: new Date('2020-02-15'),
    end: new Date('2020-03-01'),
    progress: 100
  },
  {
    id: 7,
    parentId: 5,
    title: '4.2.1. INFORMES PARCIALES DE PERFORACIÓN',
    start: new Date('2020-03-02'),
    end: new Date('2020-03-20'),
    progress: 100
  }
];

export const Capitulos = [
  {
    id: 1,
    title: 'Capitulo #1'
  },
  {
    id: 1.1,
    parentId: 1,
    title: 'SubCapitulo #1',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-01-02'),
    end: new Date('2020-01-5'),
    progress: 100
  },
  {
    id: 1.2,
    parentId: 1,
    title: 'SubCapitulo #2',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-01-05'),
    end: new Date('2020-01-12'),
    progress: 100
  },
  {
    id: 1.3,
    parentId: 1,
    title: 'SubCapitulo #3',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-01-10'),
    end: new Date('2020-01-15'),
    progress: 100
  },
  {
    id: 2,
    title: 'Capitulo #2'
  },
  {
    id: 2.1,
    parentId: 2,
    title: 'SubCapitulo #1',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-01-15'),
    end: new Date('2020-02-12'),
    progress: 100
  },
  {
    id: 2.2,
    parentId: 2,
    title: 'SubCapitulo #2',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-02-12'),
    end: new Date('2020-03-05'),
    progress: 100
  },
  {
    id: 3,
    title: 'Capitulo #3'
  },
  {
    id: 3.1,
    parentId: 3,
    title: 'SubCapitulo #1',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-03-01'),
    end: new Date('2020-03-10'),
    progress: 100
  },
  {
    id: 3.2,
    parentId: 3,
    title: 'SubCapitulo #2',
    responsable: 'Nombres y apellidos responsable',
    estado: 'OK',
    start: new Date('2020-03-11'),
    end: new Date('2020-03-23'),
    progress: 100
  },
  {
    id: 3.3,
    parentId: 3,
    title: 'SubCapitulo #3',
    responsable: 'Nombres y apellidos responsable',
    estado: 'INCOMPLETO',
    start: new Date('2020-03-20'),
    end: new Date('2020-04-05'),
    progress: 73
  },
  {
    id: 3.4,
    parentId: 3,
    title: 'SubCapitulo #4',
    responsable: 'Nombres y apellidos responsable',
    estado: 'INCOMPLETO',
    start: new Date('2020-04-01'),
    end: new Date('2020-04-30'),
    progress: 32
  },
  {
    id: 3.5,
    parentId: 3,
    title: 'SubCapitulo #5',
    responsable: 'Nombres y apellidos responsable',
    estado: 'PENDIENTE',
    start: new Date('2020-04-25'),
    end: new Date('2020-05-05'),
    progress: 0
  }
];
