

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
        slink: "price_1Nj0lEH329Hy6dQiS21Ewzg6",
        id: 1,
        subid: 1,
        title: "1/2 Litro",
        precio: 30,
      },
      {
        slink: "price_1Nj0rOH329Hy6dQi1OAUbb2n",
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
        slink:"price_1Nj0s8H329Hy6dQiD22OIoFK",
        id: 2,
        subid: 3,
        title: "Campechano",
        precio: 30,
      },
      {
        slink: "price_1Nj4BBH329Hy6dQixKrRZ64F",
        id: 2,
        subid: 4,
        title: "Costilla",
        precio: 30,
      },
      {
        slink: "price_1Nj4G9H329Hy6dQiZwuGWacC",
        id: 2,
        subid: 5,
        title: "Espaldilla",
        precio: 30,
      },
      {
        slink: "price_1Nj4GlH329Hy6dQie3TDPjsv",
        id: 2,
        subid: 6,
        title: "Falda",
        precio: 30,
      },
      {
        slink: "price_1Nj4HrH329Hy6dQiBER6d9ib",
        id: 2,
        subid: 7,
        title: "Lomo",
        precio: 30,
      },
      {
        slink: "price_1Nj4J3H329Hy6dQiIlUZfC7i",
        id: 2,
        subid: 8,
        title: "Maciza",
        precio: 30,
      },
      {
        slink: "price_1Nj4KAH329Hy6dQibFVyCR4i",
        id: 2,
        subid: 9,
        title: "Panza",
        precio: 30,
      },
      {
        slink: "price_1Nj4L2H329Hy6dQijVyITa12",
        id: 2,
        subid: 10,
        title: "Pescuezo",
        precio: 30,
      },
      {
        slink: "price_1Nj4LrH329Hy6dQinEr799p9",
        id: 2,
        subid: 11,
        title: "Surtida",
        precio: 30,
      },
    ],
  },
  {
    id: 3,
    title: "kilo de Barbacoa",
    price: 500,
    score: 89,
    description:
      "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
    tipos: [
      { slink:"price_1Nj0vAH329Hy6dQitIrYvwCW", id: 3, subid: 12, title: "Costilla", precio: 500 },
      { slink:"price_1Nj9wcH329Hy6dQidp0bbH24", id: 3, subid: 13, title: "Espaldilla", precio: 500 },
      { slink:"price_1Nj9zmH329Hy6dQi8Jv6fipt", id: 3, subid: 14, title: "Falda", precio: 500 },
      { slink:"price_1NjA0KH329Hy6dQitIIxHcbP", id: 3, subid: 15, title: "Lomo", precio: 500 },
      { slink:"price_1NjA1wH329Hy6dQifySG5Qpc", id: 3, subid: 16, title: "Maciza", precio: 500 },
      { slink:"price_1NjA2nH329Hy6dQi9q8Bd8LV", id: 3, subid: 17, title: "Surtida", precio: 500 },
    ],
  },
  {
    id: 4,
    title: "Medio de Barbacoa",
    price: 250,
    score: 63,
    description:
      "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
    tipos: [
      { slink:"price_1NjA46H329Hy6dQi9f5ZoDB6", id: 4, subid: 18, title: "Costilla", precio: 250 },
      { slink:"price_1NjA5HH329Hy6dQisqeUGmiC", id: 4, subid: 19, title: "Espaldilla", precio: 250 },
      { slink:"price_1NjA5pH329Hy6dQiJ7RSURGq", id: 4, subid: 20, title: "Falda", precio: 250 },
      { slink:"price_1NjA6mH329Hy6dQitFTHRmhk", id: 4, subid: 21, title: "Lomo", precio: 250 },
      { slink:"price_1NjA7kH329Hy6dQiYsncMp49", id: 4, subid: 22, title: "Maciza", precio: 250 },
      { slink:"price_1NjA9eH329Hy6dQiMUdnzm0q", id: 4, subid: 23, title: "Surtida", precio: 250 },
    ],
  },
  {
    id: 5,
    title: "Cuarto de Barbacoa",
    price: 125,
    score: 50,
    description:
      "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
    tipos: [
      { slink:"price_1NjAB8H329Hy6dQi3QtVcpp8", id: 5, subid: 24, title: "Costilla", precio: 125 },
      { slink:"price_1NjACIH329Hy6dQirWFBrtZX", id: 5, subid: 25, title: "Espaldilla", precio: 125 },
      { slink:"price_1NjACqH329Hy6dQi8bRwTCTc", id: 5, subid: 26, title: "Falda", precio: 125 },
      { slink:"price_1NjADIH329Hy6dQi1AZPENqW", id: 5, subid: 27, title: "Lomo", precio: 125 },
      { slink:"price_1NjAE3H329Hy6dQihnPN4sgQ", id: 5, subid: 28, title: "Maciza", precio: 125 },
      { slink:"price_1NjAElH329Hy6dQigTNMV59p", id: 5, subid: 29, title: "Surtida", precio: 125 },
    ],
  },
];

const types = [
  { id: 1, subid: 1, title: "Consome", tipo: "chico", precio: 30 },
  { id: 1, subid: 2, title: "Consome", tipo: "grande", precio: 50 },
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
  { id: 4, subid: 18, title: "Medio", tipo: "Costilla", precio: 250 },
  { id: 4, subid: 19, title: "Medio", tipo: "Espaldilla", precio: 250 },
  { id: 4, subid: 20, title: "Medio", tipo: "Falda", precio: 250 },
  { id: 4, subid: 21, title: "Medio", tipo: "Lomo", precio: 250 },
  { id: 4, subid: 22, title: "Medio", tipo: "Maciza", precio: 250 },
  { id: 4, subid: 23, title: "Medio", tipo: "Pescuezo", precio: 250 },
  { id: 5, subid: 24, title: "Cuarto", tipo: "Costilla", precio: 125 },
  { id: 5, subid: 25, title: "Cuarto", tipo: "Espaldilla", precio: 125 },
  { id: 5, subid: 26, title: "Cuarto", tipo: "Falda", precio: 125 },
  { id: 5, subid: 27, title: "Cuarto", tipo: "Lomo", precio: 125 },
  { id: 5, subid: 28, title: "Cuarto", tipo: "Maciza", precio: 125 },
  { id: 5, subid: 29, title: "Cuarto", tipo: "Pescuezo", precio: 125 },
];

const kilos = [
  {
    peso: "kilo",
    precio: 500
  },
  {
    peso: "medio",
    precio: 250
  },
  {
    peso: "Cuarto",
    precio: 125
  }
]

const kart = [
  { id: 1, subid: 1, quantity: 2 },
  { id: 1, subid: 2, quantity: 3 },
  { id: 2, subid: 3, quantity: 3 },
];



function drenado(id) {
  let pricesArr = [];
  let arr = kart.filter((platillo) => platillo.id === id);
  arr.map((item, i) => {
    let c = types.find((plato) => plato.subid === item.subid);
    pricesArr.push(c.precio * item.quantity);
  });

  let result = pricesArr.reduce((a, b) => {
    return a + b;
  }, 0);

  return result;
}

drenado(2);

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

function getProductDataMain(id) {
  let productData = types.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { comida, productsArray, getProductData, getProductDataMain, types };
