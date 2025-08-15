// Simulación de una API asíncrona de películas
const peliculas = [
    {
        id: 1,
        titulo: "avengers endgame",
        descripcion: " Los Vengadores se enfrentan a Thanos en una batalla épica.",
        lanzamiento:  2019,
        genero: " Acción",
        imagen: "  https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },
    {
        id: 2,
        titulo: "Titanic",
        descripcion: "Una historia de amor en el trágico viaje del Titanic.",
        lanzamiento: 1997,
        genero: "Romance",
        imagen: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
        id: 3,
        titulo: "Avengers: Endgame",
        descripcion: "Los Vengadores se enfrentan a Thanos.",
        lanzamiento: 2019,
        genero: "Acción",
        imagen: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },
    {
        id: 4,
        titulo: "Coco",
        descripcion: "Un niño viaja al mundo de los muertos para descubrir su legado familiar.",
        lanzamiento: 2017,
        genero: "Animación",
        imagen: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
    },
    {
        id: 5,
        titulo: "Anabel: Creation",
        descripcion: "La historia de cómo se creó la muñeca Anabel.",
        lanzamiento: 2017,
        genero: "Terror",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_.jpg"
    },
    {
        id: 6,
        titulo: "los Increíbles 2",
        descripcion: "La familia Parr regresa para una nueva aventura.",
        lanzamiento: 2018,
        genero: "Animación",
        imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/18/04/13/11/46/5802807.jpg"
    },
    {
        id: 7,
        titulo: "lobo de wall street",
        descripcion: "La vida de Jordan Belfort, un corredor de bolsa corrupto.",
        lanzamiento: 2013,
        genero: "Drama",
        imagen: "https://images.justwatch.com/poster/312586816/s718/el-lobo-de-wall-street.jpg"
    },
    {
        id: 8,
        titulo: "creed 2",
        descripcion: "Adonis Creed enfrenta a un nuevo rival en el ring.",
        lanzamiento: 2018,
        genero: "Deportes",
        imagen: " https://es.web.img2.acsta.net/pictures/18/10/31/17/44/5885767.jpg"
    },
    {
        id: 9,
        titulo: "letras explícitas",
        descripcion: " Un documental sobre la influencia de la música en la cultura.",
        lanzamiento: 2015,
        genero: "Documental",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 10,
        titulo: "minecrafter",
        descripcion: " Un grupo de jugadores se enfrenta a desafíos en un mundo de bloques.",
        lanzamiento:  2024,
        genero: " Aventura",
        imagen: " https://i.blogs.es/b9f87c/a-minecraft-movie-2880x1800-21613/500_333.jpeg"
    },
    {
        id: 11,
        titulo: " Avatar",
        descripcion: " Un exmarine se infiltra en un mundo alienígena para ayudar a los humanos.",
        lanzamiento: 2025,
        genero: " Ciencia Ficción",
        imagen: " https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg "
    },
    {
        id: 12,
        titulo: " Jurassic World",
        descripcion: "  Un parque temático de dinosaurios se convierte en un caos.",
        lanzamiento:  2015,
        genero: " Aventura",
        imagen: " https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/recursos/jurassic-world-2-poster/137996210-1-esl-ES/Jurassic-World-2-poster.jpg"
    },
    {
        id: 13,
        titulo: " depredador",
        descripcion: "  Un grupo de soldados se enfrenta a un cazador alienígena en la jungla.",
        lanzamiento:   2018,
        genero: " Ciencia Ficción",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_.jpg"
    },
    {
        id: 14,
        titulo: " el conjuro 2",
        descripcion: " Los investigadores paranormales Ed y Lorraine Warren ayudan a una familia en peligro.",
        lanzamiento:  2016,
        genero: " Terror",
        imagen: "https://m.media-amazon.com/images/M/MV5BMzM2OTE4ZWUtMzNiNy00MzhmLWE0YmMtZGE3ZTg2ZmUwODUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 15,
        titulo: "Interstellar",
        descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano.",
        lanzamiento: 2014,
        genero: "Ciencia Ficción",
        imagen: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    }
];

// Simula una petición asíncrona para obtener películas
function obtenerPeliculas() {
    return new Promise(resolve => {
        setTimeout(() => resolve(peliculas), 500);
    });
}

// Filtra películas por nombre o género (asincrónico)
async function buscarPeliculas(filtro) {
    const todas = await obtenerPeliculas();
    if (!filtro) return todas;
    const filtroLower = filtro.toLowerCase();
    return todas.filter(p =>
        p.titulo.toLowerCase().includes(filtroLower) ||
        p.genero.toLowerCase().includes(filtroLower)
    );
}

// Renderiza las cartas de películas
function renderGaleria(peliculas) {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = '';
    if (peliculas.length === 0) {
        galeria.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }
    peliculas.forEach(p => {
        const carta = document.createElement('div');
        carta.className = 'carta-pelicula';
        carta.innerHTML = `
            <img src="${p.imagen}" alt="${p.titulo}">
            <h3>${p.titulo}</h3>
            <p><strong>Género:</strong> ${p.genero}</p>
            <p><strong>Lanzamiento:</strong> ${p.lanzamiento}</p>
            <p>${p.descripcion}</p>
            `;
        galeria.appendChild(carta);
    });
}

// Inicializa la galería y el buscador
async function inicializarGaleria() {
    const peliculas = await obtenerPeliculas();
    renderGaleria(peliculas);

    document.getElementById('btn-buscar').addEventListener('click', async () => {
        const filtro = document.getElementById('input-busqueda').value;
        const resultado = await buscarPeliculas(filtro);
        renderGaleria(resultado);
    });

    // Filtra automáticamente mientras se escribe
    document.getElementById('input-busqueda').addEventListener('input', async (e) => {
        const filtro = e.target.value;
        const resultado = await buscarPeliculas(filtro);
        renderGaleria(resultado);
    });
}

inicializarGaleria();