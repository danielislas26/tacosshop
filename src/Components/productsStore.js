const productsArray = [
    {
        id: 1,
        title: "Tacos",
        price: 30,
        score: 40,
        description: "Delicioso taco con barbacoa recien salida del horno sobre dos tortilla de maiz",
        tamaños: {
            tamaño: "chico",
            precio: 30
        },
        //sabores:["Campechano","Costilla","Espaldilla","Lomo","Maciza","Panza","Pescuezo","Surtida"]
        tipo: [
            {
                title: "costilla",
                precio: 25,
            },
            {
                title: "falda",
                precio: 25,
            },
        ]
    },
    {
        id: 2,
        title: "Kilogramos",
        price: 500,
        score: 89,
        description: "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
        tamaños: {
            cuarto: 125,
            medio: 250,
            trescuartos: 375,
            kilo: 500
        },
        tipo: [
            {
                title: "costilla",
                precio: 500,
            },
            {
                title: "maciza",
                precio: 500,
            },
            {
                title: "espaldilla",
                precio: 500,
            },
        ]
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
        ]
    }
]

const platillos = {
    tipo:{
        chico:30,
        grande:50
    },
    tipo:{
        costilla:25,
        maciza:25,
        espaldilla:25
    },
    tipo:{
        cuarto:125,
        medio:250,
        trescuartos:375

    }
}

const comida = [
    {
        id:1,
        title: "consomes",
        price: 30,
        score: 77,
        description: "Delicioso Consome de Borrego con arroz y garbanzo",
        tipos: [
            {
                title: "chico",
                precio: 30,
            },
            {
                title: "grande",
                precio: 50,
            },
        ]
    },
    {
        id:2,
        title: "tacos",
        price:30,
        score: 100,
        description: "Delicioso taco con barbacoa recien salida del horno sobre dos tortilla de maiz",
        tipos: [
            {
                title: "costilla",
                precio: 25,
            },
            {
                title: "falda",
                precio: 25,
            },
            
        ]
    },
    {
        id:3,
        title: "kilos",
        price: 500,
        score:89,
        description: "Delicioso kilo de barbacoa hecha al horno con leña y sin hueso",
        tipos: [
            {
                title: "costilla",
                precio: 500,
            },
            {
                title: "maciza",
                precio: 500,
            },
            {
                title: "espaldilla",
                precio: 500,
            },
        ]
    }
]

/*productsArray.map((product, idx) => (
        
    console.log(product.title)
    
  ))

comida.map((plato,ix) =>(
    //console.log(comida[ix].id),
    //console.log(`el plato es ${plato.title}`),
    plato.tipos.map((tippo,iz)=>{
        if(plato.id===3){
            console.log(tippo.title)
            
        }
    })
))
*/



/*Object.keys(platillos.tipo).map((key) => (
    console.log(platillos.tipo[key])
))*/

/*let tipos = productsArray.tipo;
console.log(`this is ${tipos}`)
*/

/*productsArray.map((obj,idx) => (
    console.log(obj.tipo)
))*/

function printValues(obj) {
    
    for (var key in obj) {
        let data = obj[key].tipo;
       
    }
}






printValues(productsArray)


let keys = Object.keys(productsArray)
console.log(keys)

//printValues(productsArray);

function getProductData(id) {
    let productData = productsArray.find(product => product.id === "3")
    

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray,comida };