const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Ananá",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Ananá"],
  },
];


////////////////////////////////////////

// a) Las pizzas que tengan un id impar
console.log("\n 🍕 a) Las pizzas con ID impar son:");
pizzas.forEach(pizza => {
  if (pizza.id % 2 !== 0) {
    console.log(`- La ${pizza.nombre} tiene un ID impar (${pizza.id})`);
  }
});

///////////////////////////////////////

// b) ¿Hay alguna pizza que valga menos de $600? 
console.log("\n 🍕 b) ¿Hay alguna pizza que salga menos de $600?");
const hayPizzaBarata = pizzas.some(pizza => pizza.precio < 600);

if (hayPizzaBarata) {
  console.log("Siii, tenemos pizza a menos de $600 🙌🏻");
} else {
  console.log("No, todas las pizzas salen más de $600 👎🏻");
}

///////////////////////////////////////

// c) El nombre de cada pizza con su respectivo precio
console.log("\n 🍕 c) Lista de precios de nuestras pizzas:");
pizzas.forEach(pizza => {
  console.log(`- La ${pizza.nombre} sale $${pizza.precio}`);
});

///////////////////////////////////////

// d) Todos los ingredientes de cada pizza
console.log("\n 🍕 d) Lista de ingredientes:");
pizzas.forEach(pizza => {
  console.log(`- Los ingredientes que usamos para la ${pizza.nombre} son:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`   • ${ingrediente}`);
  });
});

//////////////////////////////////////