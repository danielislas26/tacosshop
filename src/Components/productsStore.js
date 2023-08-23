const productsArray = [
  {
    id: 1,
    title: "Tacos",
    price: 30,
    score: 40,
    description:
      "Delicioso taco con barbacoa recien salida del horno sobre dos tortilla de maiz",
    tamaños: {
      tamaño: "chico",
      precio: 30,
    },
    //sabores:["Campechano","Costilla","Espaldilla","Lomo","Maciza","Panza","Pescuezo","Surtida"]
    tipo: [
      { id: 1, title: "costilla", precio: 25 },
      {
        id: 2,
        title: "falda",
        precio: 25,
      },
    ],
  },
  {
    id: 2,
    title: "Kilogramos",
    price: 500,
    score: 89,
    description:
      "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
    tamaños: {
      cuarto: 125,
      medio: 250,
      trescuartos: 375,
      kilo: 500,
    },
    tipo: [
      {
        id: 3,
        title: "Costilla",
        precio: 500,
      },
      {
        id: 4,
        title: "Espaldilla",
        precio: 500,
      },
      {
        id: 5,
        title: "Falda",
        precio: 500,
      },
      {
        id: 6,
        title: "Lomo",
        precio: 500,
      },
      {
        id: 7,
        title: "Maciza",
        precio: 500,
      },
      {
        id: 8,
        title: "Pescuezo",
        precio: 500,
      },
    ],
  },
  {
    id: 3,
    title: "Consome",
    price: 50,
    score: 25,
    description: "Delicioso Consome de Borrego con arroz y garbanzo",
    tipo: [
      {
        title: "chico",
        precio: 30,
      },
      {
        title: "grande",
        precio: 50,
      },
    ],
  },
];
//////////////////////////////////////////////////////////////////////

const comida = [
  {
    id: 1,
    title: "consomes",
    price: 30,
    score: 77,
    description: "Delicioso Consome de Borrego con arroz y garbanzo",
    tipos: [
      {
        id: 1,
        subid: 1,
        title: "1/2 Litro",
        precio: 30,
      },
      {
        id: 1,
        subid: 2,
        title: "1 Litro",
        precio: 50,
      },
    ],
  },
  {
    id: 2,
    title: "tacos",
    price: 30,
    score: 100,
    description:
      "Delicioso taco con barbacoa recien salida del horno sobre dos tortilla de maiz",
    tipos: [
      {
        id: 2,
        subid: 3,
        title: "Campechano",
        precio: 30,
      },
      {
        id: 2,
        subid: 4,
        title: "Costilla",
        precio: 30,
      },
      {
        id: 2,
        subid: 5,
        title: "Espaldilla",
        precio: 30,
      },
      {
        id: 2,
        subid: 6,
        title: "Falda",
        precio: 30,
      },
      {
        id: 2,
        subid: 7,
        title: "Lomo",
        precio: 30,
      },
      {
        id: 2,
        subid: 8,
        title: "Maciza",
        precio: 30,
      },
      {
        id: 2,
        subid: 9,
        title: "Panza",
        precio: 30,
      },
      {
        id: 2,
        subid: 10,
        title: "Pescuezo",
        precio: 30,
      },
      {
        id: 2,
        subid: 11,
        title: "Surtido",
        precio: 30,
      },
    ],
  },
  {
    id: 3,
    title: "kilos",
    price: 500,
    score: 89,
    description:
      "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
    tipos: [
      { id: 3, subid: 12, title: "Costilla", precio: 500 },
      { id: 3, subid: 13, title: "Espaldilla", precio: 500 },
      { id: 3, subid: 14, title: "Falda", precio: 500 },
      { id: 3, subid: 15, title: "Lomo", precio: 500 },
      { id: 3, subid: 16, title: "Maciza", precio: 500 },
      { id: 3, subid: 17, title: "Pescuezo", precio: 500 },
    ],
  },
];

const types = [
  { id: 1, subid: 1, title: "Consome", tipo: "costilla", precio: 30 },
  { id: 1, subid: 2, title: "Consome", tipo: "falda", precio: 50 },
  { id: 2, subid: 3, title: "Taco", tipo: "Campechano", precio: 30 },
  { id: 2, subid: 4, title: "Taco", tipo: "Costilla", precio: 30 },
  { id: 2, subid: 5, title: "Taco", tipo: "Espaldilla", precio: 30 },
  { id: 2, subid: 6, title: "Taco", tipo: "Falda", precio: 30 },
  { id: 2, subid: 7, title: "Taco", tipo: "Lomo", precio: 30 },
  { id: 2, subid: 8, title: "Taco", tipo: "Maciza", precio: 30 },
  { id: 2, subid: 9, title: "Taco", tipo: "Panza", precio: 30 },
  { id: 2, subid: 10, title: "Taco", tipo: "Pescuezo", precio: 30 },
  { id: 2, subid: 11, title: "Taco", tipo: "Surtido", precio: 30 },
  { id: 3, subid: 12, title: "Kilo", tipo: "Costilla", precio: 500 },
  { id: 3, subid: 13, title: "Kilo", tipo: "Espaldilla", precio: 500 },
  { id: 3, subid: 14, title: "Kilo", tipo: "Falda", precio: 500 },
  { id: 3, subid: 15, title: "Kilo", tipo: "Lomo", precio: 500 },
  { id: 3, subid: 16, title: "Kilo", tipo: "Maciza", precio: 500 },
  { id: 3, subid: 17, title: "Kilo", tipo: "Pescuezo", precio: 500 },
];

let objeto = comida.map((product) => {
  product.tipos.map((producto) => {
    //console.log(producto)
    return producto;
  });
});

function getProductData(id) {
  let productData = types.find((product) => product.subid === id);
  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { comida, productsArray, getProductData };
