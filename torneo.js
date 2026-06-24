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

console.log("");
console.log("%cEtapa 4 · Tu propio 'para cada jugador'", "font-weight: bold; color: blue; font-size: 15px;");

const paraCadaJugador = (accion) => {
    for (let i=0; i < jugadores.length; i++){
        accion(jugadores[i]);
    }
};

console.log("-- solo nombre --");
paraCadaJugador((n) => {
  console.log(n.nombre);
});

console.log("-- nombre y país --");
paraCadaJugador((n) => {
    console.log(n.nombre + ' - ' + n.pais)
});

console.log("");
console.log("%cEtapa 5 · Arrow como 'condición' (predicado)", "font-weight: bold; color: blue; font-size: 15px;");

const contarJugadoresQue = (condicion) => {
    let contador = 0;

    for (let i=0; i < jugadores.length; i++){
        if (condicion(jugadores[i])){
            contador++
        }
    }
    return contador;
}

const totalMayor400 = jugador => puntajeTotal(jugador) > 400;
const esChileno = jugador => jugador.pais == "CL"

console.log('Con 400+ puntos: ', contarJugadoresQue(totalMayor400))
console.log('Del país CL: ' + contarJugadoresQue(esChileno))

console.log("");
console.log("%cEtapa 6 · Clasificar con valor por defecto", "font-weight: bold; color: blue; font-size: 15px;");

const clasificar = (jugador, minimo = 400) => {
    return puntajeTotal(jugador) >= minimo
        ? 'Clasificado'
        : 'Eliminado';
};

console.log("-- sin minimo (400) --");
jugadores.forEach(jugador => console.log(jugador.nombre + ': ' + clasificar(jugador)));
console.log("-- minimo 300 --");
jugadores.forEach(jugador => console.log(jugador.nombre + ': ' + clasificar(jugador, minimo=300)));
