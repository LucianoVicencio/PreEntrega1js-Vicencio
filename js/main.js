function calcular() {
    const loteSeleccionado = document.getElementById("lote").value;
    const cuotas = parseInt(document.getElementById("cuotas").value);

    let precioLote;
    switch (loteSeleccionado) {
        case "A1":
        case "B1":
            precioLote = 10000;
            break;
        case "A2":
        case "A3":
        case "B2":
        case "B3":
            precioLote = 9500;
            break;
        case "A4":
        case "A5":
        case "B4":
        case "B5":
            precioLote = 9000;
            break;
    }
    const pagoInicial = parseFloat(document.getElementById("pago-inicial").value);
    if (pagoInicial < 2500 || pagoInicial > precioLote) {
        alert("El minimo p ingresar tiene q ser no menor a 2500usd.");
        return;
    }

    // Monto restante a pagar - pago inicial
    const montoRestante = precioLote - pagoInicial;

    // Monto de cada cuota + el total a pagar con intereses
    let interes;
    switch (cuotas) {
        case 6:
            interes = 6;
            break;
        case 12:
            interes = 10;
            break;
        case 18:
            interes = 15;
            break;
        case 24:
            interes = 19;
            break;
        case 30:
            interes = 26;
            break;
        case 36:
            interes = 34;
            break;
    }

    const montoPorInteres = montoRestante * (interes / 100);
    const totalAPagar = montoRestante + montoPorInteres;
    const montoCuota = totalAPagar / cuotas;

    // Precio final = pago inicial + total a pagar (restante en cuotas)
    const precioFinal = pagoInicial + totalAPagar;

    // Resultados en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p>Precio del lote: $${precioLote.toFixed(2)}</p>
        <p>Pago inicial: $${pagoInicial.toFixed(2)}</p>
        <p>Monto restante a pagar: $${montoRestante.toFixed(2)}</p>
        <p>Cantidad de cuotas: ${cuotas}</p>
        <p>Interés aplicado: ${interes}%</p>
        <p>Monto de cada cuota: $${montoCuota.toFixed(2)}</p>
        <p>Precio final: $${precioFinal.toFixed(2)}</p>
    `;
}

function actualizarOpcionesPagoInicial() {
    const loteSeleccionado = document.getElementById("lote").value;
    let precioLote;

    // Asignamos el precio del lote según la opción seleccionada
    switch (loteSeleccionado) {
        case "A1":
        case "B1":
            precioLote = 10000;
            break;
        case "A2":
        case "A3":
        case "B2":
        case "B3":
            precioLote = 9500;
            break;
        case "A4":
        case "A5":
        case "B4":
        case "B5":
            precioLote = 9000;
            break;
    }

    // Generamos las opciones del desplegable
    const pagoInicialSelect = document.getElementById("pago-inicial");
    pagoInicialSelect.innerHTML = "";
    for (let i = 2500; i <= precioLote - 500; i += 500) {
        pagoInicialSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

// Llamamos a la función para actualizar las opciones del pago inicial cuando se cambia la opción del lote
document.getElementById("lote").addEventListener("change", actualizarOpcionesPagoInicial);

// Llamamos a la función inicialmente para que las opciones se carguen al abrir la página
actualizarOpcionesPagoInicial();
