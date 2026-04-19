export interface MenuItemSize {
  label: 'Grande' | 'Mediana' | 'Pequeña';
  price: number;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  sizes?: MenuItemSize[];
}

export interface MenuCategory {
  id: string;
  title: string;
  shortTitle?: string;
  note?: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'sopas-y-cremas',
    title: 'Sopas y Cremas',
    items: [
      {
        name: 'Sopas Chop Suey',
        description:
          'Sopa con huevo, pollo, cerdo, jamón, camarón, verduras (cidra, cebolla, zanahoria, apio) y espaguettis.',
        price: 16000,
      },
      {
        name: 'Consomé de Pescado',
        description: 'Sopa de pescado, merluza y verduras (cidra, cebolla, zanahoria y apio).',
        price: 13000,
      },
      {
        name: 'Consomé de Pollo',
        description: 'Sopa con pollo y verduras (cidra, cebolla, zanahoria y apio).',
        price: 13000,
      },
      {
        name: 'Crema de Pollo',
        description: 'Crema a base de leche preparada con trozos de pollo.',
        price: 15000,
      },
      {
        name: 'Crema de Pescado',
        description: 'Crema a base de leche, preparada con trozos de pescado merluza.',
        price: 15000,
      },
      {
        name: 'Crema de Camarones',
        description: 'Crema a base de leche, preparada con camarones.',
        price: 18000,
      },
      {
        name: 'Crema de Pollo y Camarón',
        description: 'Crema a base de leche, preparada con trozos de pollo y camarones.',
        price: 18000,
      },
      {
        name: 'Crema de Cebolla',
        description: 'Crema a base de cebolla.',
        price: 10000,
      },
    ],
  },
  {
    id: 'arroces',
    title: 'Arroces',
    note: 'El arroz puede ser negro (con salsa de soya) o amarillo (con salsa de tomate).',
    items: [
      {
        name: 'Chow Fan (Arroz oriental)',
        description:
          'Arroz frito con pechugas de pollo, trozos de cerdo, jamón y camarones, acompañado de verduras salteadas (raíces, habichuela, cebolla y zanahoria).',
        sizes: [
          { label: 'Grande', price: 61000 },
          { label: 'Mediana', price: 59000 },
          { label: 'Pequeña', price: 32000 },
        ],
      },
      {
        name: 'Arroz a la Valenciana',
        description:
          'Arroz frito con trozos de cerdo, jamón, camarones y verduras salteadas (raíces, habichuela, cebolla y zanahoria), viene acompañado de pollo frito crujiente por fuera y jugoso por dentro.',
        sizes: [
          { label: 'Grande', price: 72000 },
          { label: 'Mediana', price: 59000 },
          { label: 'Pequeña', price: 32000 },
        ],
      },
      {
        name: 'Arroz con Pollo',
        description:
          'Arroz frito con pechugas de pollo, acompañado de verduras salteadas (raíces, habichuela, cebolla y zanahoria).',
        sizes: [
          { label: 'Grande', price: 61000 },
          { label: 'Mediana', price: 59000 },
          { label: 'Pequeña', price: 32000 },
        ],
      },
      {
        name: 'Arroz con Camarones',
        description:
          'Arroz frito con camarones, acompañado de verduras salteadas (raíces, habichuela, cebolla y zanahoria).',
        sizes: [
          { label: 'Grande', price: 79000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Arroz con Pollo y Camarón',
        description:
          'Arroz frito con pechugas de pollo y camarones, acompañado de verduras salteadas (raíces, habichuela, cebolla y zanahoria).',
        sizes: [
          { label: 'Grande', price: 74000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Arroz con Mariscos',
        description:
          'Arroz frito con camarones, pescado, calamar, langostinos y palmitos de cangrejo, acompañado de verduras salteadas (raíces, habichuela, cebolla y zanahoria).',
        sizes: [{ label: 'Grande', price: 79000 }],
      },
    ],
  },
  {
    id: 'especiales',
    title: 'Especiales',
    note: 'Todos los pedidos traen arroz frito (negro con salsa de soya o amarillo con salsa de tomate).',
    items: [
      {
        name: 'Chop Suey',
        description:
          'Surtido de verduras (cidra, apio, cebolla, zanahoria) cocinadas al vapor con trozos de pollo, cerdo, jamón y camarones.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Chop Suey con Camarón',
        description:
          'Surtido de verduras (cidra, apio, cebolla, zanahoria) cocinadas al vapor con camarones.',
        sizes: [
          { label: 'Grande', price: 79000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Chop Suey con Pollo',
        description:
          'Surtido de verduras (cidra, apio, cebolla, zanahoria) cocinadas al vapor con trozos de pollo.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Chop Suey con Pollo y Camarón',
        description:
          'Surtido de verduras (cidra, apio, cebolla, zanahoria) cocinadas al vapor con trozos de pollo y camarones.',
        sizes: [
          { label: 'Grande', price: 74000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Spaguettis a la Chop Suey',
        description:
          'Preparado en salsa a base de tomate, con trozos de pollo, cerdo, jamón y camarones acompañado de tiras de verdura fresca (cebolla, habichuela, zanahoria).',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Spaguettis con Camarón',
        description:
          'Preparado en salsa de tomate con camarones acompañado de tiras de verduras frescas (cebolla, habichuela y zanahoria).',
        sizes: [
          { label: 'Grande', price: 79000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Spaguettis con Pollo',
        description:
          'Preparado en salsa de tomate con trozos de pollo, acompañado de tiras de verduras frescas (cebolla, habichuela y zanahoria).',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Spaguettis con Pollo y Camarón',
        description:
          'Preparado en salsa de tomate con trozos de pollo y camarones, acompañado de tiras de verduras frescas (cebolla, habichuela y zanahoria).',
        sizes: [
          { label: 'Grande', price: 74000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Tortillas con Pollo',
        description:
          'Tortillas esponjosas a base de huevo, con trozos de pollo acompañadas de verduras frescas (cebolla, habichuela, zanahoria). Viene con papas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Tortillas con Pollo y Camarón',
        description:
          'Tortillas esponjosas a base de huevo, con trozos de pollo y camarones acompañadas de verduras frescas (cebolla, habichuela, zanahoria). Viene con papas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 74000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Tortilla con Camarones',
        description:
          'Tortillas esponjosas a base de huevo, con camarones acompañada de verduras frescas (cebolla, habichuela, zanahoria). Viene con papas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 79000 },
          { label: 'Mediana', price: 64000 },
        ],
      },
      {
        name: 'Tortilla Chop Suey',
        description:
          'Tortillas esponjosas a base de huevo, con trozos de pollo, cerdo, jamón y camarones acompañada de verduras frescas (cebolla, habichuela, zanahoria). Viene con papas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Pollo a la Fricase',
        description:
          'Pollo frito, bañado en salsa, estilo fricase, preparada con verduras gruesas (cebolla, apio, pimentón, zanahoria, cidra y coliflor).',
        sizes: [
          { label: 'Grande', price: 71000 },
          { label: 'Mediana', price: 61000 },
        ],
      },
      {
        name: 'Pollo a la Chop Suey',
        description:
          'Pollo frito, bañado en salsa negra, acompañado de papitas fritas en casco.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
    ],
  },
  {
    id: 'chuletas-y-platos-fuertes',
    title: 'Chuletas y Platos Fuertes',
    shortTitle: 'Platos Fuertes',
    note: 'Todos los pedidos traen arroz frito (negro con salsa de soya o amarillo con salsa de tomate).',
    items: [
      {
        name: 'Chuleta de Cerdo',
        description: 'Filete de cerdo apanado, acompañado de papitas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Chuleta de Pescado',
        description: 'Filete de pescado merluza apanado, acompañado de papitas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Chuleta de Pollo',
        description: 'Filete de pollo apanado, acompañado de papitas fritas en cascos.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Agridulce de Pollo',
        description: 'Deliciosos trozos de pollo rebozados, bañados en salsa agridulce con piña.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
      {
        name: 'Beefsteak Chop Suey',
        description:
          'Solomo de res a la plancha, bañado en salsa de tu elección (salsa negra o criolla), acompañado de papita frita en casco.',
        sizes: [
          { label: 'Grande', price: 69000 },
          { label: 'Mediana', price: 59000 },
        ],
      },
    ],
  },
  {
    id: 'combo',
    title: 'Combo',
    note: 'Todos los pedidos traen arroz frito (negro con salsa de soya o amarillo con salsa de tomate).',
    items: [
      {
        name: 'Pollo entero',
        description:
          'Arroz frito con pollo y medio, papas en casco, ensalada de repollo y zanahoria.',
        price: 86000,
      },
    ],
  },
  {
    id: 'acompanantes',
    title: 'Acompañantes',
    note: 'Todos los pedidos traen arroz frito (negro con salsa de soya o amarillo con salsa de tomate).',
    items: [
      {
        name: 'Lumpias',
        description:
          'Rollito de primavera preparado con repollo y carne molida, acompañada de salsa agridulce.',
        price: 6000,
      },
      {
        name: 'Ensalada',
        description: 'Ensalada preparada con repollo y zanahoria con un toque de acidez.',
        price: 5000,
      },
      {
        name: 'Papas',
        description: 'Papitas fritas crujientes en casco.',
        price: 5000,
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      { name: 'Coca-Cola 1.5 L', description: 'Original o Zero', price: 10000 },
      { name: 'Manzana 2.5 L', description: '', price: 10000 },
      {
        name: 'Jugo en leche',
        description: 'Mango, Maracuyá, Mora, Guanábana',
        price: 8000,
      },
      {
        name: 'Jugo en agua',
        description: 'Mango, Maracuyá, Mora, Guanábana, Limonada',
        price: 6000,
      },
      {
        name: 'Gaseosas 350 ml',
        description: 'Coca-cola, Coca-cola cero, Manzana Postobón, Bretaña, Naranja',
        price: 5000,
      },
      { name: 'Agua 600 ml', description: '', price: 5000 },
      {
        name: 'Jugo Hit 350 ml',
        description: 'Mango, Mora',
        price: 5000,
      },
    ],
  },
];
