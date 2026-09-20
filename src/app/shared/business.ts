export interface Telefono {
  readonly etiqueta: 'PBX' | 'Cel';
  /** Como se muestra en pantalla: '606 341 3352'. */
  readonly display: string;
  /** Como va en el href tel:, en formato E.164. */
  readonly tel: string;
}

export const NEGOCIO = {
  nombre: 'Restaurante Chopsuey Pereira',
  fundadoEn: 1973,
  direccion: {
    calle: 'Calle 20 No. 8-58',
    ciudad: 'Pereira',
    departamento: 'Risaralda',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calle%2020%20No.%208-58%20Pereira%20Risaralda',
  },
  horario: {
    dias: 'Todos los días',
    apertura: '10:00 a.m.',
    cierre: '9:00 p.m.',
    nota: 'Incluidos fines de semana y festivos',
  },
  telefonos: [
    { etiqueta: 'PBX', display: '606 341 3352', tel: '+576063413352' },
    { etiqueta: 'Cel', display: '320 320 9999', tel: '+573203209999' },
    { etiqueta: 'Cel', display: '321 321 3333', tel: '+573213213333' },
    { etiqueta: 'Cel', display: '313 666 6200', tel: '+573136666200' },
  ],
  instagram: {
    usuario: 'chopsuey.pereira',
    url: 'https://www.instagram.com/chopsuey.pereira',
  },
} as const satisfies {
  nombre: string;
  fundadoEn: number;
  direccion: Record<string, string>;
  horario: Record<string, string>;
  telefonos: readonly Telefono[];
  instagram: Record<string, string>;
};

export const TELEFONO_PRINCIPAL = NEGOCIO.telefonos[0];
