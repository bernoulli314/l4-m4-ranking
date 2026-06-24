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




