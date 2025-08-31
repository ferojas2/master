 // Participantes iniciales
    let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];

    // Función para mostrar la clasificación
    function mostrarClasificacion() {
      const lista = document.getElementById("clasificacion-lista");
      lista.innerHTML = "";
      participantes.forEach(participante => {
        const li = document.createElement("li");
        li.textContent = participante;
        lista.appendChild(li);
      });
    }

    // Laura supera a Javier
    function lauraSuperaAJavier() {
      const indexLaura = participantes.indexOf("Laura");
      const indexJavier = participantes.indexOf("Javier");
      if (indexLaura > indexJavier) {
        [participantes[indexLaura], participantes[indexJavier]] = [participantes[indexJavier], participantes[indexLaura]];
        mostrarClasificacion();
      } else {
        alert("Laura ya ha superado a Javier o Javier no está.");
      }
    }

    // Eliminar a Patricia
    function eliminarPatricia() {
      const index = participantes.indexOf("Patricia");
      if (index !== -1) {
        participantes.splice(index, 1);
        mostrarClasificacion();
      } else {
        alert("Patricia ya fue eliminada.");
      }
    }

    // Agregar a Raúl y Sofía detrás de Elena y antes de Carlos
    function agregarRaulYSofia() {
      const indexCarlos = participantes.indexOf("Carlos");
      if (indexCarlos !== -1) {
        participantes.splice(indexCarlos, 0, "Raúl", "Sofía");
        mostrarClasificacion();
      } else {
        alert("Carlos no está en la lista.");
      }
    }

    // Agregar a Carmen al inicio
    function agregarCarmen() {
      if (!participantes.includes("Carmen")) {
        participantes.unshift("Carmen");
        mostrarClasificacion();
      } else {
        alert("Carmen ya está en la clasificación.");
      }
    }

    // Mostrar la clasificación al cargar la página
    window.onload = mostrarClasificacion;
