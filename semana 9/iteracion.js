var biblioteca = [
  {
    autor: 'Bill Gates',
    titulo: 'The Road Ahead',
    estadoLectura: true
  },
  {
    autor: 'Steve Jobs',
    titulo: 'Walter Isaacson',
    estadoLectura: true
  },
  {
    autor: 'Suzanne Collins',
    titulo: 'Mockingjay: The Final Book of The Hunger Games',
    estadoLectura: false
  }
];

var resultadoDiv = document.getElementById("resultado");

biblioteca.forEach(function(libro) {
  var mensaje = libro.estadoLectura
    ? `✅ Ya has leído "<strong>${libro.titulo}</strong>" de ${libro.autor}.`
    : `📖 Aún no has leído "<strong>${libro.titulo}</strong>" de ${libro.autor}.`;

  var parrafo = document.createElement("p");
  parrafo.innerHTML = mensaje;
  resultadoDiv.appendChild(parrafo);
});

  