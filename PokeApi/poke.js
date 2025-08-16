document.getElementById('form-busqueda').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtiene el nombre o ID del Pokémon
    var nombre = document.getElementById('pokemon').value.toLowerCase().trim();
    var resultado = document.getElementById('resultado');
    resultado.textContent = 'Buscando...';

    // Hace la petición a la API de Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon/' + nombre)
        .then(function(respuesta) {
            if (!respuesta.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return respuesta.json();
        })
        .then(function(datos) {
            // Muestra la información básica del Pokémon
            var tipos = [];
            for (var i = 0; i < datos.types.length; i++) {
                tipos.push(datos.types[i].type.name);
            }

            var habilidades = [];
            for (var j = 0; j < datos.abilities.length; j++) {
                habilidades.push(datos.abilities[j].ability.name);
            }

            resultado.innerHTML = 
                '<div class="carta-pokemon">' +
                    '<img src="' + datos.sprites.front_default + '" alt="' + datos.name + '">' +
                    '<h2>' + datos.name + ' (#' + datos.id + ')</h2>' +
                    '<p><strong>Tipo:</strong> ' + tipos.join(', ') + '</p>' +
                    '<p><strong>Habilidades:</strong> ' + habilidades.join(', ') + '</p>' +
                '</div>';
        })
        .catch(function(error) {
            resultado.textContent = 'Pokémon no encontrado. Intenta con otro nombre o número.';
        });
});