const apiKey = 'edf239680c4f578336c4791e82e4b587'; 





// traer la ciudad y mostrar el clima
document.getElementById('form-busqueda').addEventListener('submit', async function(e) {
    e.preventDefault();
    const ciudad = document.getElementById('ciudad').value;
    const resultado = document.getElementById('resultado');
    resultado.textContent = 'Buscando...';





    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`
        );

        
        const datos = await res.json();
        if (!res.ok) throw new Error(datos.message || 'Ciudad no encontrada');
        resultado.innerHTML = `
            <h2>${datos.name}, ${datos.sys.country}</h2>
            <p>Temperatura: ${datos.main.temp} °C</p>
            <p>Clima: ${datos.weather[0].description}</p>
        `;

    } catch (err) {


        resultado.textContent = 'No se pudo encontrar la ciudad. Intenta con otro nombre. prueba con (San Andres, CO), (Medellin, CO), (Cali, CO) ';
    }
});