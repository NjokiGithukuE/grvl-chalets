const rooms = [
  {
    name: "A28",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 2, twin: 1 },
    enSuite: true,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
    sleeps: 6,
  },
  {
    name: "A26 Njoki",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 1, twin: 2 },
    enSuite: true,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
    sleeps: 6,
  },
  {
    name: "A25 Savannah Up",
    duplexType: "Upper",
    cost: 22000,
    bedrooms: { double: 2 },
    ensuite: false,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
    sleeps: 4,
  },
  {
    name: "A25 Savannah Down",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 2, twin: 1 },
    ensuite: false,
    washrooms: 3,
    amenities: ["Gas Cooker", "Microwave", "Fridge", "TV with DSTV"],
    sleeps: 6,
  },
  {
    name: "A23 Rainbow",
    duplexType: "Stand Alone",
    cost: 38250,
    bedrooms: { double: 5 },
    ensuite: false,
    washrooms: 4,
    amenities: ["Cooker", "Fridge", "Toaster", "BBQ Jiko", "TV with DSTV"],
    sleeps: 10,
  },
  {
    name: "A22 Dhanji",
    duplexType: "Stand Alone",
    cost: 27000,
    bedrooms: { double: 1, twin: 2 },
    ensuite: false,
    washrooms: 2,
    amenities: ["Cooker", "Microwave", "Fridge", "TV with DSTV", "BBQ Jiko"],
    sleeps: 6,
  },
  {
    name: "A21 Baseline",
    duplexType: "Stand Alone",
    cost: 40250,
    bedrooms: { double: 5 },
    enSuite: true,
    amenities: [
      "Gas Cooker",
      "Fridge",
      "Microwave",
      "TV with DSTV",
      "BBQ Jiko",
    ],
    sleeps: 10,
  },
  {
    name: "A19 Chalet",
    duplexType: "Stand Alone",
    cost: 27000,
    bedrooms: { double: 3, bunk: 1 },
    enSuite: true,
    amenities: ["Cooker", "Fridge", "TV with DSTV"],
    sleeps: 6,
    additionalInfo: "2 children sharing",
  },
  {
    name: "A18 Jimana",
    duplexType: "Stand Alone",
    cost: 38250,
    bedrooms: { double: 1, twin: 3, single: 1 },
    ensuite: false,
    washrooms: 4,
    amenities: [
      "Cooker",
      "Fridge",
      "Microwave",
      "TV with DSTV",
      "BBQ Jiko",
      "Toaster",
    ],
    sleeps: 9,
  },
  {
    name: "A16B Charity down",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 1, twin: 2 },
    enSuite: true,
    amenities: ["Fridge", "Cooker", "BBQ Jiko", "Microwave", "TV with DSTV"],
    sleeps: 6,
  },
  {
    name: "A16A Charity Up",
    duplexType: "Upper",
    cost: 22000,
    bedrooms: { double: 1, twin: 1 },
    enSuite: true,
    amenities: ["Fridge", "Cooker", "BBQ Jiko", "Microwave", "TV with DSTV"],
    sleeps: 4,
  },
  {
    name: "A15 Kiriira",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: { double: 4 },
    ensuite: false,
    washrooms: 3,
    amenities: ["Cooker", "Fridge", "BBQ Jiko", "Microwave", "TV with DSTV"],
    sleeps: 8,
  },
  {
    name: "A13 Serengeti",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: { double: 1, twin: 2, bunk: 1 },
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
    sleeps: 6,
    additionalInfo: "2 children",
  },
  {
    name: "A12 Shali",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 3 },
    enSuite: true,
    amenities: [
      "Gas Cooker",
      "Fridge",
      "Microwave",
      "BBQ Jiko",
      "TV with DSTV",
    ],
    sleeps: 6,
  },
  {
    name: "A11 Villa Kena Up",
    duplexType: "Upper",
    cost: 26000,
    bedrooms: { double: 2, twin: 1 },
    enSuite: true,
    amenities: ["Cooker", "Fridge", "TV with DSTV"],
    sleeps: 6,
  },
  {
    name: "A11 Villa Kena Down",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 3 },
    enSuite: true,
    amenities: ["Cooker", "Fridge", "TV with DSTV"],
    sleeps: 6,
  },
  {
    name: "A9 Manyatta",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 2, twin: 1 },
    ensuite: false,
    washrooms: 3,
    amenities: ["Cooker", "Fridge", "Microwave", "BBQ Jiko", "TV with DSTV"],
    sleeps: 6,
  },
  {
    name: "A2 Bliss",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 2, twin: 1 },
    enSuite: true,
    amenities: [
      "Gas Cooker",
      "Fridge",
      "Microwave",
      "BBQ Jiko",
      "TV with DSTV",
    ],
    sleeps: 6,
  },
  {
    name: "B59 Silver Line Up",
    duplexType: "Upper",
    cost: 23000,
    bedrooms: { double: 1, twin: 1 },
    enSuite: true,
    amenities: [
      "Electric Cooker",
      "Microwave",
      "Fridge",
      "Electric Kettle",
      "TV with DSTV",
      "Lake View",
    ],
    sleeps: 4,
  },
  {
    name: "B59 Silver Line Down",
    duplexType: "Lower",
    cost: 22000,
    bedrooms: { double: 1, twin: 1 },
    enSuite: true,
    amenities: [
      "Electric Cooker",
      "Microwave",
      "Fridge",
      "Electric Kettle",
      "TV with DSTV",
    ],
    sleeps: 4,
  },
  {
    name: "B51 Lefam",
    duplexType: "Lower",
    cost: 26000,
    bedrooms: { double: 1, twin: 2 },
    ensuite: false,
    washrooms: 3,
    amenities: ["Cooker", "Fridge", "Microwave", "BBQ Jiko", "TV with DSTV"],
    sleeps: 6,
  },
  {
    name: "C5 Villa Kosmos",
    duplexType: "Stand Alone",
    cost: 46000,
    bedrooms: { double: 6 },
    enSuite: true,
    amenities: ["Cooker", "Fridge", "Microwave", "TV with DSTV", "BBQ Jiko"],
    sleeps: 12,
  },
  {
    name: "C3 Villa Madaraka",
    duplexType: "Stand Alone",
    cost: 46000,
    bedrooms: { double: 6 },
    enSuite: true,
    amenities: ["Cooker", "Fridge", "Microwave", "TV with DSTV", "BBQ Jiko"],
    sleeps: 12,
  },
  {
    name: "B25 Valley View",
    duplexType: "Stand Alone",
    cost: 30000,
    bedrooms: { double: 1, twin: 2 },
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Fridge",
      "Microwave",
      "TV with DSTV",
      "BBQ Jiko",
    ],
    sleeps: 6,
  },
  {
    name: "B57 Masai",
    duplexType: "Stand Alone",
    cost: 27000,
    bedrooms: {
      double: 1,
      twin: 2,
    },
    sleeps: 6,
    ensuite: true,
    washrooms: 3,
    amenities: [
      "Cooker",
      "Fridge",
      "Toaster",
      "Microwave",
      "BBQ Jiko",
      "TV with DSTV in lounge",
    ],
  },
  {
    name: "B56 Geopet Upper",
    duplexType: "Duplex Upper",
    cost: 23000,
    bedrooms: {
      double: 1,
      twin: 1,
    },
    sleeps: 4,
    ensuite: true,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "B56 Geopet Lower",
    duplexType: "Duplex Lower",
    cost: 22000,
    bedrooms: {
      double: 1,
      twin: 1,
    },
    sleeps: 4,
    ensuite: true,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "C79 Hornby",
    duplexType: "Stand Alone",
    cost: 27000,
    bedrooms: {
      double: 2,
      twin: 1,
    },
    sleeps: 6,
    ensuite: false,
    washrooms: 2,
    amenities: [
      "Cooker",
      "Fridge",
      "Toaster",
      "Sandwich toaster",
      "BBQ Jiko",
      "TV with DSTV",
    ],
  },
  {
    name: "B31 Chalet",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: {
      double: 2,
      twin: 2,
    },
    sleeps: 8,
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "Kettle",
      "Coffee maker",
      "TV with DSTV",
      "Jacuzzi in master bedroom",
    ],
  },
  {
    name: "B35 Tausi",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: {
      double: 1,
      twin: 2,
      single: 1,
    },
    sleeps: 7,
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Fridge",
      "Cooker",
      "Microwave",
      "Toaster",
      "TV with DSTV",
      "Lounge with Deck View and Resting Place",
    ],
  },
  {
    name: "B36 Fireside",
    duplexType: "Stand Alone",
    cost: 38250,
    bedrooms: {
      double: 4,
      twin: 1,
    },
    sleeps: 10,
    ensuite: true,
    washrooms: 5,
    amenities: [
      "Cooker",
      "Fridge",
      "Toaster",
      "Coffee Maker",
      "BBQ Jiko",
      "TV with DSTV",
    ],
  },
  {
    name: "B44 Eburu",
    duplexType: "Stand Alone",
    cost: 27000,
    bedrooms: {
      double: 3,
    },
    sleeps: 6,
    ensuite: true,
    washrooms: 3,
    amenities: ["Cooker", "Fridge", "TV with DSTV"],
  },
  {
    name: "B37 Salama",
    duplexType: "Duplex Lower",
    cost: 34500,
    bedrooms: {
      double: 4,
    },
    sleeps: 8,
    ensuite: true,
    washrooms: 4,
    amenities: ["Cooker", "Fridge", "Toaster", "BBQ Jiko", "TV with DSTV"],
  },
  {
    name: "B40 Veew Upper",
    duplexType: "Duplex Upper",
    cost: 23000,
    bedrooms: {
      double: 1,
      twin: 1,
    },
    sleeps: 4,
    ensuite: true,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "B41 Avalon",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: {
      double: 2,
      twin: 2,
      bunk: 1,
    },
    sleeps: 9,
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Fridge",
      "Microwave",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "B40 Veew Lower",
    duplexType: "Duplex Lower",
    cost: 27500,
    bedrooms: {
      double: 2,
      twin: 1,
    },
    sleeps: 6,
    ensuite: true,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "B45 Albatros",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: {
      double: 2,
      twin: 2,
    },
    sleeps: 8,
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Fridge",
      "Microwave",
      "BBQ Jiko",
      "TV with DSTV",
      "Lake View",
    ],
  },
  {
    name: "B46 Chalet",
    duplexType: "Stand Alone",
    cost: 27000,
    bedrooms: {
      double: 2,
      twin: 1,
    },
    sleeps: 6,
    ensuite: true,
    washrooms: 3,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "C61 Nyawira",
    duplexType: "Stand Alone",
    cost: 34500,
    bedrooms: {
      double: 4,
    },
    sleeps: 8,
    ensuite: false,
    washrooms: 4,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "C76 Utatu",
    duplexType: "Duplex Lower",
    cost: 27500,
    bedrooms: {
      double: 2,
      twin: 1,
    },
    sleeps: 6,
    ensuite: false,
    washrooms: 3,
    amenities: [
      "Cooker",
      "Fridge",
      "Toaster",
      "Sandwich Toaster",
      "Microwave",
      "TV with DSTV",
    ],
  },
  {
    name: "C62 Jahazi",
    duplexType: "Stand Alone",
    cost: 40250,
    bedrooms: {
      twin: 5,
    },
    sleeps: 10,
    ensuite: true,
    washrooms: 5,
    amenities: [
      "Cooker",
      "3 gas/electric stoves",
      "Microwave",
      "Iron Box",
      "Fridge",
      "BBQ Jiko",
      "TV with DSTV",
    ],
  },
  {
    name: "C63 Landform",
    duplexType: "Stand Alone",
    cost: 40250,
    bedrooms: {
      double: 4,
      twin: 1,
    },
    sleeps: 10,
    ensuite: true,
    washrooms: 5,
    amenities: ["Cooker", "Fridge", "BBQ Jiko", "TV with DSTV"],
  },
  {
    name: "C72 Boma",
    duplexType: "Duplex Lower",
    cost: 21000,
    bedrooms: {
      double: 2,
    },
    sleeps: 4,
    ensuite: true,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "C68 Mumbu",
    duplexType: "Duplex Lower",
    cost: 26000,
    bedrooms: {
      twin: 3,
    },
    sleeps: 6,
    ensuite: false,
    washrooms: 3,
    amenities: ["Cooker", "Fridge", "BBQ Jiko", "TV with DSTV", "Microwave"],
  },
  {
    name: "C69 Nguren Down",
    duplexType: "Duplex Lower",
    cost: 22000,
    bedrooms: {
      double: 2,
    },
    sleeps: 4,
    ensuite: false,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
  {
    name: "C69 Nguren Up",
    type: "Duplex Upper",
    cost: 23000,
    bedrooms: {
      double: 1,
      twin: 1,
      twinKids: 1,
    },
    sleeps: 6,
    ensuite: false,
    washrooms: 2,
    amenities: [
      "Gas Cooker",
      "Microwave",
      "Fridge",
      "TV with DSTV",
      "BBQ Jiko",
    ],
  },
];
