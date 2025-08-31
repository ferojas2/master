const display = document.getElementById("display");
const botones = document.querySelectorAll(".boton[data-valor]");
const botonIgual = document.getElementById("igual");
const botonLimpiar = document.getElementById("limpiar");
const botonRetroceso = document.getElementById("retroceso");

// Añadir valores al display con validación
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.getAttribute("data-valor");
    const ultimoCaracter = display.value.slice(-1);
    const operadores = ['+', '-', '*', '/'];

    // Evita dos operadores seguidos
    if (operadores.includes(valor) && operadores.includes(ultimoCaracter)) {
      display.value = display.value.slice(0, -1) + valor;
    } else {
      display.value += valor;
    }
  });
});

// Calcular el resultado
botonIgual.addEventListener("click", () => {
  try {
    // Evalúa solo si no termina en operador
    const ultimo = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(ultimo)) {
      display.value = "Error";
      return;
    }

    const resultado = eval(display.value);
    display.value = resultado;
  } catch (error) {
    display.value = "Error";
  }
});

// Limpiar el display
botonLimpiar.addEventListener("click", () => {
  display.value = "";
});

// Retroceso (borrar último carácter)
botonRetroceso.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

