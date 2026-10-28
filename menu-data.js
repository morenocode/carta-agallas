/*
 * AGALLAS · EDITAR LA CARTA AQUÍ
 *
 * Cada plato tiene tres campos:
 *   nombre:      texto que aparece en la carta.
 *   descripcion: ingredientes o detalles. Usa "" si no tiene descripción.
 *   precio:      número en soles, sin S/ ni comillas. Ejemplo: 20 o 20.50.
 *
 * Cambia solo los textos entre comillas y los números de los precios.
 * Conserva las comas, comillas, llaves { } y corchetes [ ].
 * Para agregar un plato, copia un bloque completo, incluida su coma final.
 * Para quitar un plato, elimina su bloque completo.
 *
 * Categorías: name es el título e intro es su descripción.
 * Grupos: name es el subtítulo y label es el precio general (si existe).
 * No cambies id, groups ni items: organizan el funcionamiento de la carta.
 * Guarda el archivo y súbelo a GitHub para actualizar la carta pública.
 */

const MENU = [

  // ============================================================
  // CATEGORÍA: PARA PICAR
  // ============================================================
  {
    id: "picar",
    name: "Para picar",
    intro: "Para abrir el apetito y empezar como se debe.",
    groups: [
      {
        name: "El primer antojo",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Tequeños de queso",
            descripcion: "8 unidades.",
            precio: 20,
          },
          {
            nombre: "Tequeños de atún",
            descripcion: "8 unidades.",
            precio: 25,
          },
          {
            nombre: "Tortillas de choclo chiclayanas",
            descripcion: "Acevichado: ceviche de pescado, pota o langostinos.",
            precio: 30,
          },
          {
            nombre: "Conchitas a la parmesana u orientales",
            descripcion: "Toque peruano.",
            precio: 30,
          },
          {
            nombre: "Chalacas · Choritos",
            descripcion: "",
            precio: 20,
          },
          {
            nombre: "Chalacas · Choritos mariscos",
            descripcion: "Mix de verduras y leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Pulpo parmesano",
            descripcion: "",
            precio: 30,
          },
          {
            nombre: "Sándwiches marinos",
            descripcion: "Chicharrón de pejerrey o pescado. Salsa criolla y tártara.",
            precio: 25,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: LECHES DE TIGRE
  // ============================================================
  {
    id: "leches",
    name: "Leches de tigre",
    intro: "Todas nuestras leches están preparadas con una rica base cevichera y limón del norte.",
    groups: [
      {
        name: "Leche (para tigres)",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Leche Carretillero",
            descripcion: "Pota y pescado, acompañado de chicharrón de pota.",
            precio: 17,
          },
          {
            nombre: "Leche Huancueño",
            descripcion: "Leche + papa rellena.",
            precio: 17,
          },
          {
            nombre: "Leche a lo Agallas",
            descripcion: "Pescado y langostino en crema de ají amarillo + chicharrón de pota.",
            precio: 20,
          },
          {
            nombre: "Leche Afrodisiaca",
            descripcion: "Mix de mariscos y pescado, acompañado de chicharrón de pota.",
            precio: 25,
          },
          {
            nombre: "Leche a lo Chalaco (Copón)",
            descripcion: "En copa grande con pescado y mixtura + chicharrón de pota.",
            precio: 30,
          },
          {
            nombre: "Leche Pantera",
            descripcion: "Conchas tumbesinas, limón, sal, ají limo + chicharrón de pota.",
            precio: 30,
          },
          {
            nombre: "Leche con Langostinos",
            descripcion: "Langostinos sazonados en leche de tigre + chicharrón de pota.",
            precio: 28,
          },
          {
            nombre: "Trío lechero",
            descripcion: "Amarillo (crema de rocoto) y clásico, con toque de ají y culantro.",
            precio: 40,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: CARRETILLEROS
  // ============================================================
  {
    id: "carretilleros",
    name: "Carretilleros",
    intro: "La combinación perfecta de dos sabores en un solo plato.",
    groups: [
      {
        name: "Los clásicos",
        label: "S/ 35",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Carretillero 1",
            descripcion: "Ceviche de pescado + chicharrón de pota.",
            precio: 35,
          },
          {
            nombre: "Carretillero 2",
            descripcion: "Ceviche de pescado + arroz con mariscos.",
            precio: 35,
          },
          {
            nombre: "Carretillero 3",
            descripcion: "Ceviche de pescado + chaufa de mariscos.",
            precio: 35,
          },
          {
            nombre: "Carretillero 4",
            descripcion: "Leche de tigre + arroz con mariscos.",
            precio: 35,
          },
          {
            nombre: "Carretillero 5",
            descripcion: "Leche de tigre + chicharrón de pescado.",
            precio: 35,
          },
          {
            nombre: "Carretillero 6",
            descripcion: "Leche de tigre + chicharrón de pota.",
            precio: 35,
          },
          {
            nombre: "Carretillero 7",
            descripcion: "Leche de tigre + chaufa de mariscos.",
            precio: 35,
          },
          {
            nombre: "Carretillero 8",
            descripcion: "Ceviche de pescado + causa.",
            precio: 35,
          },
        ],
      },
      {
        name: "Los favoritos",
        label: "S/ 40",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Carretillero 9",
            descripcion: "Ceviche de pescado + chicharrón de pescado.",
            precio: 40,
          },
          {
            nombre: "Carretillero 10",
            descripcion: "Chaufa de mariscos + chicharrón de pescado.",
            precio: 40,
          },
          {
            nombre: "Carretillero 11",
            descripcion: "Arroz con mariscos + chicharrón de pescado.",
            precio: 40,
          },
          {
            nombre: "Carretillero 12",
            descripcion: "Ceviche mixto + arroz con mariscos.",
            precio: 40,
          },
          {
            nombre: "Carretillero 13",
            descripcion: "Ceviche de pescado + chicharrón mixto.",
            precio: 40,
          },
          {
            nombre: "Carretillero 14",
            descripcion: "Causa acevichada + arroz con mariscos.",
            precio: 40,
          },
          {
            nombre: "Carretillero 15",
            descripcion: "Ceviche de pescado + chaufa de pescado.",
            precio: 40,
          },
          {
            nombre: "Carretillero 16",
            descripcion: "Leche de tigre + arroz con langostinos.",
            precio: 40,
          },
          {
            nombre: "Carretillero 17",
            descripcion: "Ceviche mixto + chaufa de mariscos.",
            precio: 40,
          },
          {
            nombre: "Carretillero 18",
            descripcion: "Ceviche de pescado + chicharrón de pejerrey.",
            precio: 40,
          },
        ],
      },
      {
        name: "Los especiales",
        label: "S/ 45",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Carretillero 19",
            descripcion: "Ceviche de pescado + chicharrón de langostinos.",
            precio: 45,
          },
          {
            nombre: "Carretillero 20",
            descripcion: "Ceviche de pescado + chicharrón de calamar.",
            precio: 45,
          },
          {
            nombre: "Carretillero 21",
            descripcion: "Ceviche de conchas negras + arroz con mariscos.",
            precio: 45,
          },
          {
            nombre: "Carretillero 22",
            descripcion: "Causa acevichada con pulpa de cangrejo + arroz con mariscos.",
            precio: 45,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: FESTIVAL DE CAUSAS
  // ============================================================
  {
    id: "causas",
    name: "Festival de causas",
    intro: "La causa de siempre, con el toque de la casa.",
    groups: [
      {
        name: "Las clásicas del barrio",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Pura palta",
            descripcion: "",
            precio: 15,
          },
          {
            nombre: "Causa del Barrio",
            descripcion: "Con leche de tigre.",
            precio: 28,
          },
          {
            nombre: "Causa Acevichada",
            descripcion: "Con ceviche y crema de la casa.",
            precio: 28,
          },
          {
            nombre: "Causa Achorada",
            descripcion: "Con ceviche y chicharrón de pescado.",
            precio: 28,
          },
          {
            nombre: "Causa Bien Peruana",
            descripcion: "Montada en chicharrón de pescado, salsa golf y shot.",
            precio: 28,
          },
        ],
      },
      {
        name: "Especialidades de la casa",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Causa de Tigres",
            descripcion: "Con leche de tigre de pescado, langostinos o conchas negras.",
            precio: 30,
          },
          {
            nombre: "Causa con Pota Anticuchera",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Causa con Escabeche de Pescado",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Causa Orientales",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Causa Acevichada con Pulpa de Cangrejo",
            descripcion: "",
            precio: 35,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: DEL MAR Y LA PARRILLA
  // ============================================================
  {
    id: "mar",
    name: "Del mar y la parrilla",
    intro: "El mar se luce. Tú eliges cómo disfrutarlo.",
    groups: [
      {
        name: "Del mar y la parrilla",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Pulpa de Cangrejo",
            descripcion: "Coronada con pulpa de cangrejo y shot.",
            precio: 30,
          },
          {
            nombre: "Frutos del Mar",
            descripcion: "Con rico ceviche de langostinos.",
            precio: 30,
          },
          {
            nombre: "Crocante",
            descripcion: "Al panko con ceviche de pulpo y langostinos.",
            precio: 40,
          },
          {
            nombre: "Salsa de Mariscos",
            descripcion: "Bañada en nuestra salsa especial.",
            precio: 35,
          },
          {
            nombre: "Pulpo a la Parrilla",
            descripcion: "Coronado con pulpo parrillero y su criolla.",
            precio: 40,
          },
          {
            nombre: "Pulpo al Olivo",
            descripcion: "Láminas de pulpo bañadas en salsa olivada.",
            precio: 37,
          },
        ],
      },
      {
        name: "Langostinos",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Langostinos al Panko",
            descripcion: "Acompañados de langostinos y salsa de casa.",
            precio: 35,
          },
          {
            nombre: "Langostinos al Agallas",
            descripcion: "Bañados en salsa a lo Agallas golf.",
            precio: 35,
          },
        ],
      },
      {
        name: "Pescados a lo macho",
        label: "S/ 45",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Filete a lo macho",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Cabrilla a lo macho",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Trambollo a lo macho",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Chita a lo macho",
            descripcion: "",
            precio: 45,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: PARA COMPARTIR
  // ============================================================
  {
    id: "rondas",
    name: "Para compartir",
    intro: "Porque lo bueno sabe mejor en compañía.",
    groups: [
      {
        name: "Al centro de la mesa",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Trío de causas",
            descripcion: "Pulpo al olivo, pulpa de cangrejo y langostinos acevichados.",
            precio: 45,
          },
          {
            nombre: "Ronda a los Agallas",
            descripcion: "Causa, arroz con mariscos, chicharrón, leche de tigre y ceviche.",
            precio: 90,
          },
          {
            nombre: "Ronda Fría",
            descripcion: "Ceviche de pescado, leche de tigre, causa, conchas negras y tiradito.",
            precio: 90,
          },
        ],
      },
    ],
  },
];
