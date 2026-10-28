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
            descripcion: "8 unidades. Salsa guacamole.",
            precio: 20,
          },
          {
            nombre: "Tequeños de atún",
            descripcion: "8 unidades. Salsa guacamole.",
            precio: 25,
          },
          {
            nombre: "Tortillas de Choclo Chiclayanas",
            descripcion: "Acevichado: ceviche de pescado, pota o langostinos.",
            precio: 30,
          },
          {
            nombre: "Conchitas a la parmesana",
            descripcion: "Toque peruano y quesos.",
            precio: 30,
          },
          {
            nombre: "Chalacas · Choritos",
            descripcion: "",
            precio: 20,
          },
          {
            nombre: "Mariscos a la Chalaca",
            descripcion: "Mix de verduras y leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Pulpo Gratinado y quesos",
            descripcion: "",
            precio: 30,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: LECHE (PARA TIGRES)
  // ============================================================
  {
    id: "leches",
    name: "Leche (para tigres)",
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
            nombre: "Leche Huanaqueño",
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
      {
        name: "Pescados a lo macho",
        label: "S/ 45",
        recuadro: true,
        descripcion: "Pescado frito bañado en salsa de mariscos, con yuca frita y shot de leche de tigre.",
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
  // CATEGORÍA: CEVICHES Y TIRADITOS
  // ============================================================
  {
    id: "frios",
    name: "Ceviches y tiraditos",
    intro: "Frialdad: ceviches de la casa, especiales, tiraditos y láminas.",
    groups: [
      {
        name: "Ceviches de la casa",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Huanaqueño",
            descripcion: "Con papa rellena, pescado y pota.",
            precio: 17,
          },
          {
            nombre: "Huanaqueño",
            descripcion: "Papa rellena y puro pescado.",
            precio: 22,
          },
          {
            nombre: "De la Esquina",
            descripcion: "Pescado y pota + chicharrón.",
            precio: 35,
          },
          {
            nombre: "Pescado",
            descripcion: "Clásico con camote y choclo.",
            precio: 40,
          },
          {
            nombre: "Mixto",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Pulpo y Langostino",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Universitario y Alianza",
            descripcion: "Conchas negras y pescado.",
            precio: 40,
          },
        ],
      },
      {
        name: "Ceviches especiales",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Norteño",
            descripcion: "Limón, ají y culantro. Acompañado de tortilla de choclo.",
            precio: 40,
          },
          {
            nombre: "Conchas Negras",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Ceviche Apaltado",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Ceviche de Pulpo",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Ceviche de Pota",
            descripcion: "",
            precio: 38,
          },
        ],
      },
      {
        name: "Tiraditos y láminas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Tiradito Clásico",
            descripcion: "Filete en leche de tigre.",
            precio: 40,
          },
          {
            nombre: "Pulpo al Olivo",
            descripcion: "Láminas en salsa olivada.",
            precio: 45,
          },
          {
            nombre: "Tiradito a lo Agalla",
            descripcion: "Pescado, pulpo y langostino.",
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
            descripcion: "Leche de tigre + arroz con langostino.",
            precio: 40,
          },
          {
            nombre: "Carretillero 17",
            descripcion: "Ceviche mixto + chaufa de mariscos.",
            precio: 40,
          },
          {
            nombre: "Carretillero 18",
            descripcion: "Causa acevichada + chaufa de mariscos.",
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
            descripcion: "Ceviche de pescado + arroz norteño.",
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
  // CATEGORÍA: TRÍO AGALLAS
  // ============================================================
  {
    id: "trios",
    name: "Trío Agallas",
    intro: "La combinación perfecta en tres tiempos.",
    groups: [
      {
        name: "Los clásicos",
        label: "S/ 45",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Trío Agallas 1",
            descripcion: "Ceviche de pescado + arroz con mariscos + chicharrón de pescado.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 2",
            descripcion: "Ceviche de pescado + chaufa de mariscos + causa.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 3",
            descripcion: "Leche de tigre + causa + arroz con mariscos.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 4",
            descripcion: "Ceviche de pescado + causa + arroz con mariscos.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 5",
            descripcion: "Ceviche de conchas negras + causa + arroz con mariscos.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 6",
            descripcion: "Ceviche de pescado + leche de tigre + chicharrón de pota.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 7",
            descripcion: "Ceviche de pescado + chaufa de mariscos + chicharrón de pescado.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 8",
            descripcion: "Leche de tigre + causa + chaufa de pescado.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 9",
            descripcion: "Leche de tigre + chicharrón de pota + arroz con mariscos.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 10",
            descripcion: "Chicharrón de pescado + causa + arroz con mariscos.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 11",
            descripcion: "Ceviche de pescado + arroz de conchas negras + chicharrón de pescado.",
            precio: 45,
          },
          {
            nombre: "Trío Agallas 12",
            descripcion: "Chaufa de pescado + leche de tigre + chicharrón de pescado.",
            precio: 45,
          },
        ],
      },
      {
        name: "Los especiales",
        label: "S/ 48",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Trío Agallas 13",
            descripcion: "Chicharrón de camarón + leche de tigre + arroz con mariscos.",
            precio: 48,
          },
          {
            nombre: "Trío Agallas 14",
            descripcion: "Ceviche de langostinos + causa + arroz con mariscos.",
            precio: 48,
          },
          {
            nombre: "Trío Agallas 15",
            descripcion: "Ceviche de conchas negras + causa + chicharrón de pescado.",
            precio: 48,
          },
          {
            nombre: "Trío Agallas 16",
            descripcion: "Ceviche de pescado + arroz norteño + chicharrón de pescado.",
            precio: 48,
          },
          {
            nombre: "Trío Agallas 17",
            descripcion: "Leche de tigre + chicharrón mixto + chaufa de mariscos.",
            precio: 48,
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
            precio: 30,
          },
          {
            nombre: "Causa Bien Peruana",
            descripcion: "Montada en chicharrón de pescado y shot.",
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
            nombre: "Causa Acevichada con Pulpa de Cangrejo",
            descripcion: "",
            precio: 35,
          },
        ],
      },
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
        name: "Trío de causas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Trío de causas",
            descripcion: "Pulpo al olivo, pulpa de cangrejo y langostinos acevichados.",
            precio: 45,
          },
        ],
      },
      {
        name: "Rondas (para compartir)",
        id: "rondas",
        label: "S/ 90",
        recuadro: true,
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
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

  // ============================================================
  // CATEGORÍA: PASTAS
  // ============================================================
  {
    id: "pastas",
    name: "Pastas",
    intro: "",
    groups: [
      {
        name: "Pastas",
        label: "S/ 45",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Spaguetti en Salsa de Mariscos",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Rigatoni en Salsa de Chupe con Langostinos",
            descripcion: "",
            precio: 45,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: CHICHARRONES Y JALEAS
  // ============================================================
  {
    id: "chicharrones",
    name: "Chicharrones y jaleas",
    intro: "Acompañados de yuca frita y shot de leche de tigre.",
    groups: [
      {
        name: "Chicharrones y jaleas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Chicharrón de Pota",
            descripcion: "",
            precio: 30,
          },
          {
            nombre: "Chicharrón de Pescado",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Jalea de Pescado",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Langostinos",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Camarones",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Mariscos",
            descripcion: "",
            precio: 38,
          },
          {
            nombre: "Calamar",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Pulpo",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Jalea Mixta",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Mixto · Pescado y mariscos",
            descripcion: "",
            precio: 40,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: PLATOS CRIOLLOS
  // ============================================================
  {
    id: "criollos",
    name: "Platos criollos",
    intro: "",
    groups: [
      {
        name: "Platos criollos",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Tacu tacu con lomo al jugo",
            descripcion: "",
            precio: 48,
          },
          {
            nombre: "Lomo Saltado",
            descripcion: "Papas fritas y arroz.",
            precio: 45,
          },
          {
            nombre: "Arroz con pato",
            descripcion: "Arroz húmedo, salsa criolla.",
            precio: 48,
          },
          {
            nombre: "Pescado a la plancha con frejoles",
            descripcion: "Salsa criolla y yuca sancochada.",
            precio: 40,
          },
          {
            nombre: "Pechuga a la plancha",
            descripcion: "Papas fritas y ensalada.",
            precio: 35,
          },
          {
            nombre: "Apanado de pescado",
            descripcion: "Yuca frita y ensalada.",
            precio: 35,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: ARROCES Y CHAUFAS
  // ============================================================
  {
    id: "arroces",
    name: "Arroces y chaufas",
    intro: "",
    groups: [
      {
        name: "Arroces",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Arroz con Mariscos",
            descripcion: "Mixtura en salsa madre, flameado y bien húmedo. Shot de leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Arroz Norteño",
            descripcion: "Mixtura en salsa madre, flameado y bien húmedo. Shot de leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Arroz con Langostinos",
            descripcion: "Mixtura en salsa madre, flameado y bien húmedo. Shot de leche de tigre.",
            precio: 40,
          },
          {
            nombre: "Arroz con Pescado",
            descripcion: "Mixtura en salsa madre, flameado y bien húmedo. Shot de leche de tigre.",
            precio: 40,
          },
          {
            nombre: "Arroz Chupero",
            descripcion: "Mixtura en salsa madre, flameado y bien húmedo. Shot de leche de tigre.",
            precio: 40,
          },
          {
            nombre: "Arroz con Conchas Negras",
            descripcion: "Mixtura en salsa madre, flameado y bien húmedo. Shot de leche de tigre.",
            precio: 40,
          },
        ],
      },
      {
        name: "Chaufas",
        label: "S/ 35",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Chaufa de Mariscos",
            descripcion: "Salteado al wok con aliños orientales. Shot de leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Chaufa de Pescado",
            descripcion: "Salteado al wok con aliños orientales. Shot de leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Chaufa de Langostinos",
            descripcion: "Salteado al wok con aliños orientales. Shot de leche de tigre.",
            precio: 35,
          },
          {
            nombre: "Chaufa Mixto",
            descripcion: "Salteado al wok con aliños orientales. Shot de leche de tigre.",
            precio: 35,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: PLATOS A LO AGALLAS
  // ============================================================
  {
    id: "agallas",
    name: "Platos a lo Agallas",
    intro: "",
    groups: [
      {
        name: "Platos a lo Agallas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Pulpo a la Parrilla",
            descripcion: "",
            precio: 55,
          },
          {
            nombre: "Cabrilla, tramboyo o chita en salsa de mariscos",
            descripcion: "",
            precio: 48,
          },
          {
            nombre: "Cabrilla, tramboyo o chita al ajo",
            descripcion: "",
            precio: 48,
          },
          {
            nombre: "Brochetas de pescado",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Tacu tacu en Salsa de Mariscos",
            descripcion: "",
            precio: 45,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: PESCADOS FRITOS
  // ============================================================
  {
    id: "fritos",
    name: "Pescados fritos",
    intro: "Yuca frita y shot de leche de tigre.",
    groups: [
      {
        name: "Pescados fritos",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Filete frito",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Cabrilla",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Tramboyo",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Chita",
            descripcion: "",
            precio: 48,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: SOPAS
  // ============================================================
  {
    id: "sopas",
    name: "Sopas",
    intro: "",
    groups: [
      {
        name: "Sopas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Chilcano de Filete",
            descripcion: "",
            precio: 30,
          },
          {
            nombre: "Chilcano de Cabrilla",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Chilcano de Tramboyo",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Chupe de Pescado",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Chupe de Camarones",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Chupe de Langostinos",
            descripcion: "",
            precio: 35,
          },
          {
            nombre: "Sudado de Cabrilla",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Sudado de Tramboyo",
            descripcion: "",
            precio: 40,
          },
          {
            nombre: "Sudado de Chita",
            descripcion: "",
            precio: 46,
          },
          {
            nombre: "Parihuela de Filete",
            descripcion: "",
            precio: 38,
          },
          {
            nombre: "Parihuela de Cabrilla",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Parihuela de Tramboyo",
            descripcion: "",
            precio: 45,
          },
          {
            nombre: "Parihuela de Chita",
            descripcion: "",
            precio: 50,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: PARA NIÑOS
  // ============================================================
  {
    id: "ninos",
    name: "Para niños",
    intro: "",
    groups: [
      {
        name: "Para niños",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Chicharrón de pollo",
            descripcion: "Papas fritas y tártara.",
            precio: 28,
          },
          {
            nombre: "Deditos de pescado",
            descripcion: "Papas fritas.",
            precio: 30,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: GUARNICIONES
  // ============================================================
  {
    id: "guarniciones",
    name: "Guarniciones",
    intro: "",
    groups: [
      {
        name: "Guarniciones",
        label: "S/ 6",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Porción de Arroz",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "Yuca frita",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "Yuca sancochada",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "Choclo",
            descripcion: "",
            precio: 6,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: BEBIDAS
  // ============================================================
  {
    id: "bebidas",
    name: "Bebidas",
    intro: "",
    groups: [
      {
        name: "Para refrescar",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "La Moradita · Jarra",
            descripcion: "",
            precio: 15,
          },
          {
            nombre: "La Moradita · Media jarra",
            descripcion: "",
            precio: 7.5,
          },
          {
            nombre: "Agua San Luis",
            descripcion: "Con o sin gas.",
            precio: 3,
          },
          {
            nombre: "Frozen · Jarra",
            descripcion: "Maracumango o limón.",
            precio: 20,
          },
          {
            nombre: "Refresco de maracuyá · Jarra",
            descripcion: "",
            precio: 17,
          },
        ],
      },
      {
        name: "Gaseosas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Gaseosa Personal",
            descripcion: "Inca Kola, Coca-Cola o Fanta.",
            precio: 4,
          },
          {
            nombre: "Inca Kola Gordita",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "Gaseosa 1 L",
            descripcion: "Inca Kola, Coca-Cola o Fanta.",
            precio: 8.5,
          },
          {
            nombre: "Gaseosa 1.5 L",
            descripcion: "Inca Kola, Coca-Cola o Fanta.",
            precio: 10,
          },
          {
            nombre: "Gaseosa 2 L",
            descripcion: "Inca Kola, Coca-Cola o Fanta.",
            precio: 17,
          },
          {
            nombre: "Gaseosa 3 L",
            descripcion: "Inca Kola, Coca-Cola o Fanta.",
            precio: 20,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: CÓCTELES
  // ============================================================
  {
    id: "cocteles",
    name: "Cócteles",
    intro: "",
    groups: [
      {
        name: "Chilcanos",
        label: "S/ 20",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Chilcano Clásico",
            descripcion: "",
            precio: 20,
          },
          {
            nombre: "Chilcano de Maracuyá",
            descripcion: "",
            precio: 20,
          },
        ],
      },
    ],
  },

  // ============================================================
  // CATEGORÍA: CERVEZAS
  // ============================================================
  {
    id: "cervezas",
    name: "Cervezas",
    intro: "",
    groups: [
      {
        name: "Cervezas",
        // EDITAR PLATOS DE ESTE GRUPO AQUÍ
        items: [
          {
            nombre: "Cusqueña 620 ml",
            descripcion: "",
            precio: 12.5,
          },
          {
            nombre: "Cusqueña 310 ml",
            descripcion: "",
            precio: 8,
          },
          {
            nombre: "Corona 350 ml",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "Coronita 210 ml",
            descripcion: "",
            precio: 4.5,
          },
          {
            nombre: "Tropical",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "San Juan 620 ml",
            descripcion: "",
            precio: 8,
          },
          {
            nombre: "San Juan 355 ml",
            descripcion: "",
            precio: 4.5,
          },
          {
            nombre: "Cristal 650 ml",
            descripcion: "",
            precio: 10,
          },
          {
            nombre: "Heineken",
            descripcion: "",
            precio: 7.5,
          },
          {
            nombre: "Pilsen 350 ml",
            descripcion: "",
            precio: 6,
          },
          {
            nombre: "Budweiser",
            descripcion: "",
            precio: 7,
          },
          {
            nombre: "Stella Artois",
            descripcion: "",
            precio: 7,
          },
        ],
      },
    ],
  },
];
