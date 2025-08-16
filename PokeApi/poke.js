document.getElementById('form-busqueda').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nombre = document.getElementById('pokemon').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado');
    resultado.textContent = 'Buscando...';





    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!res.ok) throw new Error('Pokémon no encontrado');
        const datos = await res.json();

        const habilidades = datos.abilities.map(hab => hab.ability.name).join(', ');
        const tipos = datos.types.map(tipo => tipo.type.name).join(', ');
        const poderes = datos.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('');

        resultado.innerHTML = `
            <div class="carta-pokemon">
                <img src="${datos.sprites.front_default}" alt="${datos.name}">
                <h2>${datos.name} (#${datos.id})</h2>
                <p><strong>Tipo:</strong> ${tipos}</p>
                <p><strong>Habilidades:</strong> ${habilidades}</p>
                <ul><strong>Poderes:</strong> ${poderes}</ul>
            </div>
        `;
    } catch (err) {
        resultado.textContent = 'Pokémon no encontrado.';
    }
});