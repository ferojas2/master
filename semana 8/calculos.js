// Definición de la clase Rectángulo
    class Rectangulo {
      constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
      }

      calcularArea() {
        return this.ancho * this.alto;
      }

      calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
      }
    }

    // Función para manejar el clic del botón
    function calcular() {
      const ancho = parseFloat(document.getElementById('ancho').value);
      const alto = parseFloat(document.getElementById('alto').value);
      const resultado = document.getElementById('resultado');

      // Validación básica
      if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
        resultado.textContent = "Por favor, ingresa valores válidos mayores que 0.";
        return;
      }

      const rect = new Rectangulo(ancho, alto);
      const area = rect.calcularArea();
      const perimetro = rect.calcularPerimetro();
      areaREc.innerHTML = area;
     peri.innerHTML = perimetro;

    
   }
