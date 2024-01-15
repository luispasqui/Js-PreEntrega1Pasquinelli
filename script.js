function calcularCosto() {
    var itemSeleccionado = document.getElementById("item").value;
    var cantidad = parseInt(document.getElementById("quantity").value);
    var costoTotal = 0;

    // Algoritmo con condicional
    if (itemSeleccionado === "laptop") {
      costoTotal = 1000 * cantidad;
    } else if (itemSeleccionado === "phone") {
      costoTotal = 500 * cantidad;
    } else if (itemSeleccionado === "tablet") {
      costoTotal = 300 * cantidad;
    }

    // Algoritmo con ciclo (simulando descuento del 10% si se compran más de 2 artículos)
    for (var i = 1; i <= cantidad; i++) {
      costoTotal += (itemSeleccionado === "laptop" ? 1000 : (itemSeleccionado === "phone" ? 500 : 300));
    }

    // Mostrar el resultado
    var outputDiv = document.getElementById("output");
    console.log ("El costo total es: $" + costoTotal);
  }