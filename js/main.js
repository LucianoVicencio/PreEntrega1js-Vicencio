// Declaración de variables 
let terrenos = []; 

// prompts para capturar informacion
function capturarInformacionTerreno() {
    let terreno = {}; 

    // entradas
    terreno.titulo = prompt("Ingrese un título para el terreno en venta, intenta ser persuasivo... puedes probar con Inmejorable ubicación, o Apto PH, o Preventa:");
    terreno.descripcion = prompt("Ingrese la descripción del terreno, no olvide agregar superfice, servicios, cercanias, y si es barrio privado el monto de expensas:");
    terreno.precio = parseFloat(prompt("Ingrese el precio del terreno en USD (solo debes colocar el valor en números):"));

    return terreno;
}

// Función para publicar y capturar la info
function publicarTerreno() {
    let nuevoTerreno = capturarInformacionTerreno(); 

    // Agregar el nuevo terreno al arreglo y mostrar en consola
    terrenos.push(nuevoTerreno);
    console.log("Terreno Publicado:");
    console.log(nuevoTerreno);
}
