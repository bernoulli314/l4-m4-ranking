console.log("%cEtapa 1 · Los jugadores del torneo", "font-weight: bold; color: blue; font-size: 15px;");

const jugadores = [
  { nombre: "Aragorn", pais: "CL", puntajes: [120, 90, 150] },
  { nombre: "Legolas", pais: "AR", puntajes: [200, 180, 220] },
  { nombre: "Gimli",   pais: "CL", puntajes: [80, 60, 100] },
  { nombre: "Gandalf", pais: "PE", puntajes: [300, 250, 290] },
];

jugadores.forEach((jugador) => {
  console.log(`${jugador.nombre} (${jugador.pais})`);
});

console.log("");
console.log("%cEtapa 2 · Funciones utilitarias con arrow", "font-weight: bold; color: blue; font-size: 15px;");



const puntajeTotal = (jugador) => jugador.puntajes.reduce((acumulado, p) => acumulado + p, 0)

const promedio = (jugador) => puntajeTotal(jugador) / jugador.puntajes.length;

console.log(puntajeTotal)

jugadores.forEach(jugador => {
    console.log(
        `${jugador.nombre}: total ${puntajeTotal(jugador)}, promedio ${promedio(jugador)}`
    );
});

console.log("");
console.log("%cEtapa 3 · Una arrow que devuelve un objeto", "font-weight: bold; color: blue; font-size: 15px;");

const crearResumen = (jugador) => ({

    nombre: jugador.nombre,
    total: puntajeTotal(jugador),
    promedio: promedio(jugador)
})

jugadores.forEach(jugador => console.log(crearResumen(jugador)))